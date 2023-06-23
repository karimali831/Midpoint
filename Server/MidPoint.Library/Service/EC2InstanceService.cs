using Amazon;
using Amazon.EC2;
using Amazon.EC2.Model;
using Microsoft.Extensions.Options;
using MidPoint.Library.Configuration;
using MidPoint.Library.Enum;
using MidPoint.Library.ExceptionHandler;
using MidPoint.Library.Model;
using MidPoint.Library.Repository;

namespace MidPoint.Library.Service
{
    public interface IEc2InstanceService
    {
        Task<List<Instance>> GetAllAsync(IList<Ec2InstanceStatus> statuses);
        Task<Instance?> GetRunningAsync(string instanceId);
        Task<EC2Response> CreateAsync(string awsUid, string customerId, string hostRoomId);
        Task TerminateAsync(IList<(string InstanceId, string AwsUid, string CustomerId)> data);
    }

    public class Ec2InstanceService : IEc2InstanceService
    {
        private readonly AmazonEC2Client _ec2Client;
        private readonly IAwsUserService _awsUserService;
        private readonly IExceptionHandlerService _exceptionHandlerService;
        private readonly ITokenLogRepository _tokenLogRepository;
        private readonly IPaymentService _paymentService;
        private readonly IInstanceService _instanceService;

        public Ec2InstanceService(
            IOptions<AwsConfig> awsConfig,
            IAwsUserService awsUserService,
            ITokenLogRepository tokenLogRepository,
            IPaymentService paymentService,
            IExceptionHandlerService exceptionHandlerService, 
            IInstanceService instanceService)
        {
            _awsUserService = awsUserService;
            _paymentService = paymentService;
            _exceptionHandlerService = exceptionHandlerService;
            _instanceService = instanceService;
            _tokenLogRepository = tokenLogRepository;

            var accessKey = awsConfig.Value.AccessKey;
            var secretAccessKey = awsConfig.Value.SecretAccessKey;

            _ec2Client = new AmazonEC2Client(accessKey, secretAccessKey, new AmazonEC2Config
            {
                RegionEndpoint = RegionEndpoint.EUWest2
            });
        }

        public async Task<Instance?> GetRunningAsync(string instanceId)
        {
            var request = new DescribeInstancesRequest();

            return (await _ec2Client.DescribeInstancesAsync(request)).Reservations
                .SelectMany(x => x.Instances)
                .FirstOrDefault(x => x.State.Code == 16 && instanceId == x.InstanceId && x.KeyName == "MidPoint");
        }

        public async Task<List<Instance>> GetAllAsync(IList<Ec2InstanceStatus> statuses)
        {
            var request = new DescribeInstancesRequest();

            return (await _ec2Client.DescribeInstancesAsync(request)).Reservations
                .SelectMany(x => x.Instances)
                .Where(x => statuses.Contains((Ec2InstanceStatus)x.State.Code) && x.KeyName == "MidPoint")
                .ToList();
        }

        public async Task<EC2Response> CreateAsync(string awsUid, string customerId, string hostRoomId)
        {
            try
            {
                var createResponse = await _ec2Client.DescribeSecurityGroupsAsync();
                var groups = new List<string>() { createResponse.SecurityGroups.First().GroupId };

                var describeRequest = new DescribeSecurityGroupsRequest()
                {
                    GroupIds = groups
                };

                var describeResponse = await _ec2Client.DescribeSecurityGroupsAsync(describeRequest);

                return await Launch(describeResponse, awsUid, customerId, hostRoomId);
            }
            catch (Exception exp)
            {
                _exceptionHandlerService.ReportException(exp);

                return new EC2Response
                {
                    Message = exp.Message,
                };
            }
        }

        public async Task TerminateAsync(IList<(string InstanceId, string AwsUid, string CustomerId)> data)
        {
            try
            {
                // Terminate instance in AWS EC2
                await _ec2Client.TerminateInstancesAsync(new TerminateInstancesRequest
                {
                    InstanceIds = data.Select(x => x.InstanceId).ToList()
                });

                foreach (var instance in data)
                {
                    // Get AWS user
                    var user = await _awsUserService.GetAsync(instance.AwsUid);

                    // Total tokens deducted for instance
                    var totalTokenDeductions = await _tokenLogRepository.GetTotalDeductions(instance.InstanceId);

                    // Deduct purchase tokens used 
                    var calc = user.PurchasedTokens - totalTokenDeductions;
                    await _awsUserService.UpdateAsync("purchasedTokens", (calc < 0 ? 0 : calc).ToString(),
                        instance.AwsUid);

                    // Set instance Id to null in Users table
                    await _awsUserService.UpdateAsync<string>("createdInstanceId", null, instance.AwsUid);

                    // Set inactive for all tokens in log 
                    await _tokenLogRepository.SetInactiveAsync(instance.InstanceId);

                    // Set purchased tokens to inactive
                    await _paymentService.SetInactiveAsync(instance.CustomerId);
                    
                    // Terminate instance in local db
                    await _instanceService.SetTerminatedAsync(instance.InstanceId);

                    // Update total streams and last stream
                    var completedStreams = await _instanceService.GetCompletedAsync(instance.AwsUid, activeOnly: false);

                    await _awsUserService.UpdateAsync("totalStreams", completedStreams.Count,
                       instance.AwsUid);
                    
                    await _awsUserService.UpdateAsync("lastStream", completedStreams.First().LaunchedDate.ToString("MM/dd/yyyy HH:mm"),
                       instance.AwsUid);

                    await _awsUserService.UpdateAsync("totalSeconds", completedStreams.Sum(x => x.MinutesUsed),
                       instance.AwsUid);
                }
            }
            catch (Exception exp)
            {
                _exceptionHandlerService.ReportException(exp);
            }
        }

        private async Task<EC2Response> Launch(DescribeSecurityGroupsResponse describeResponse, string awsUid,
            string customerId, string hostRoomId)
        {
            var groups = new List<string>() { describeResponse.SecurityGroups[0].GroupId };

            var launchRequest = new RunInstancesRequest()
            {
                ImageId = "ami-01438d6029c106183",
                InstanceType = InstanceType.T2Micro,
                MinCount = 1,
                MaxCount = 1,
                KeyName = "MidPoint",
                SecurityGroupIds = groups,
                TagSpecifications = new List<TagSpecification>
                {
                    new()
                    {
                        ResourceType = ResourceType.Instance,
                        Tags = new List<Tag>
                        {
                            new() { Key = "AwsUid", Value = awsUid },
                            new() { Key = "CustomerId", Value = customerId },
                            new() { Key = "HostRoomId", Value = hostRoomId }
                        }
                    }
                }
            };

            var launchResponse = await _ec2Client.RunInstancesAsync(launchRequest);
            var instance = launchResponse.Reservation.Instances.First();

            await CheckState(new List<string> { instance.InstanceId });
            await _awsUserService.UpdateAsync("createdInstanceId", instance.InstanceId, awsUid);

            if ((Ec2InstanceStatus)instance.State.Code == Ec2InstanceStatus.Running)
            {
                await _instanceService.CreateAsync(new Model.Db.Instance
                {
                    Id = instance.InstanceId,
                    AwsUid = awsUid,
                    Status = launchResponse.HttpStatusCode,
                    LaunchedDate = instance.LaunchTime
                });
            }
            

            return new EC2Response
            {
                Message = launchResponse.ResponseMetadata.RequestId,
                StatusCode = launchResponse.HttpStatusCode,
                State = (Ec2InstanceStatus)instance.State.Code,
                LaunchTime = instance.LaunchTime,
                HostRoomId = hostRoomId
            };
        }

        // Method to wait until the instances are running (or at least not pending)
        private async Task CheckState(List<string> instanceIds)
        {
            Console.WriteLine(
                "\nWaiting for the instances to start." +
                "\nPress any key to stop waiting. (Response might be slightly delayed.)");

            DescribeInstancesResponse responseDescribe;
            var requestDescribe = new DescribeInstancesRequest
            {
                InstanceIds = instanceIds
            };

            // Check every couple of seconds
            const int wait = 2000;
            while (true)
            {
                // Get and check the status for each of the instances to see if it's past pending.
                // Once all instances are past pending, break out.
                // (For this example, we are assuming that there is only one reservation.)
                Console.Write(".");
                responseDescribe = await _ec2Client.DescribeInstancesAsync(requestDescribe);
                var numberRunning = responseDescribe.Reservations[0].Instances.Count(i => (i.State.Code & 255) > 0);
                if (numberRunning == responseDescribe.Reservations[0].Instances.Count)
                    break;

                // Wait a bit and try again (unless the user wants to stop waiting)
                Thread.Sleep(wait);
                if (Console.KeyAvailable)
                    break;
            }

            Console.WriteLine("\nNo more instances are pending.");
            foreach (var i in responseDescribe.Reservations[0].Instances)
            {
                Console.WriteLine($"For {i.InstanceId}:");
                Console.WriteLine($"  VPC ID: {i.VpcId}");
                Console.WriteLine($"  Instance state: {i.State.Name}");
                Console.WriteLine($"  Public IP address: {i.PublicIpAddress}");
                Console.WriteLine($"  Public DNS name: {i.PublicDnsName}");
                Console.WriteLine($"  Key pair name: {i.KeyName}");
            }
        }
    }
}