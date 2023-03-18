using Amazon.EC2;
using Amazon.EC2.Internal;
using Amazon.EC2.Model;
using Microsoft.Extensions.Options;
using MidPoint.Library.Configuration;
using MidPoint.Library.ExceptionHandler;
using MidPoint.Library.Model;

namespace MidPoint.Library.Service
{
    public interface IEC2InstanceService
    {
        Task<List<Instance>> GetRunningAsync(string instanceId = null);
        Task<EC2Response> CreateAsync(string awsUid, string hostRoomId);
        Task TerminateAsync(IList<(string InstanceId, string AwsUid)> data);
    }

    public class EC2InstanceService : IEC2InstanceService
    {
        private readonly AmazonEC2Client _ec2Client;
        private readonly IOptions<AwsConfig> _awsConfig;
        private readonly IAwsUserService _awsUserService;
        private readonly IExceptionHandlerService _exceptionHandlerService;

        public EC2InstanceService(
            IOptions<AwsConfig> awsConfig, 
            IExceptionHandlerService exceptionHandlerService, 
            IAwsUserService awsUserService)
        {
            _exceptionHandlerService = exceptionHandlerService;
            _awsUserService = awsUserService;

            try
            {
                // Create an EC2 client
                var accessKey = awsConfig.Value.AccessKey;
                var SecretAccessKey = awsConfig.Value.SecretAccessKey;
                
                _ec2Client = new AmazonEC2Client(accessKey, SecretAccessKey);
            }
            catch (Exception ex)
            {
                _exceptionHandlerService.ReportException(ex).Send();
            }
        }
        
        public async Task<List<Instance>> GetRunningAsync(string instanceId = null)
        {
            var request = new DescribeInstancesRequest();
            
            return (await _ec2Client.DescribeInstancesAsync(request)).Reservations
                .SelectMany(x => x.Instances)
                .Where(x => x.State.Code == 16 && (instanceId == null || instanceId == x.InstanceId))
                .ToList();
        }

        public async Task<EC2Response> CreateAsync(string awsUid, string hostRoomId)
        {
            var createResponse = await _ec2Client.DescribeSecurityGroupsAsync();

            var Groups = new List<string>() {createResponse.SecurityGroups.First().GroupId };
            var describeRequest = new DescribeSecurityGroupsRequest()
            {
                GroupIds = Groups
            };

            var describeResponse = await _ec2Client.DescribeSecurityGroupsAsync(describeRequest);
            return await Launch(describeResponse, awsUid, hostRoomId);
        }

        public async Task TerminateAsync(IList<(string InstanceId, string AwsUid)> data)
        {
            await _ec2Client.TerminateInstancesAsync(new TerminateInstancesRequest
            {
                InstanceIds = data.Select(x => x.InstanceId).ToList()
            });

            foreach (var awsUid in data.Select(x => x.AwsUid))
            {
                await _awsUserService.UpdateAsync<string>("createdInstanceId", null, awsUid);
            }
        }

        private async Task<EC2Response> Launch(DescribeSecurityGroupsResponse describeResponse, string awsUid, string hostRoomId)
        {
            var groups = new List<string>() { describeResponse.SecurityGroups[0].GroupId };
            var launchRequest = new RunInstancesRequest()
            {
                ImageId = "ami-01e91a8e71e619d87",
                InstanceType = InstanceType.T2Micro,
                MinCount = 1,
                MaxCount = 1,
                KeyName = "testKeyPair",
                SecurityGroupIds = groups,
                TagSpecifications = new List<TagSpecification>
                {
                    new()
                    {
                        ResourceType = ResourceType.Instance,
                        Tags = new List<Tag>
                        {
                            new() { Key = "AwsUid", Value = awsUid },
                            new() { Key = "HostRoomId", Value = hostRoomId }
                        }
                    }
                }
            };

            var launchResponse = await _ec2Client.RunInstancesAsync(launchRequest);
            var instance = launchResponse.Reservation.Instances.First();
            
            await CheckState(new List<string> { instance.InstanceId });
            await _awsUserService.UpdateAsync("createdInstanceId", instance.InstanceId, awsUid);
            
            return new EC2Response
            {
                Message = launchResponse.ResponseMetadata.RequestId,
                Status = launchResponse.HttpStatusCode,
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
