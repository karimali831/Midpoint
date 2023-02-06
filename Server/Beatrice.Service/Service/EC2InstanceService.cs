using Amazon.EC2;
using Amazon.EC2.Model;
using Amazon.Runtime;
using Beatrice.Service.Model;

namespace Beatrice.Service.Service
{
    public interface IEC2InstanceService
    {
        Task<List<Instance>> GetAllRunningAsync();
        Task<EC2Response> CreateAsync();
    }

    public class EC2InstanceService : IEC2InstanceService
    {
        private readonly AmazonEC2Client _ec2Client;

        public EC2InstanceService()
        {
            var accessKey = "AKIA5HPQCAYQVDAKYUE2";
            var SecretAccessKey = "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";
            var sessionToken = "zn4q9EBTtAsSwimGDjjmwxqCMcYdsi9qE6qC4TI2";

            var tempCredentials = new SessionAWSCredentials(
            accessKey,
            SecretAccessKey,
            sessionToken);

            // Create an EC2 client
            try
            {
                _ec2Client = new AmazonEC2Client(accessKey, SecretAccessKey);
            }
            catch (Exception ex)
            {
                var tt = "";   
            }

          
        }

        public async Task<List<Instance>> GetAllRunningAsync()
        {
            var req = new DescribeInstancesRequest();
            var result = (await _ec2Client.DescribeInstancesAsync(req)).Reservations;

            return result.SelectMany(reservation => reservation.Instances).ToList();
        }

        public async Task<EC2Response>CreateAsync()
        {
            // var createRequest = new CreateSecurityGroupRequest
            // {
            //     GroupName = "testSecGroup",
            //     Description = "My sample security group for EC2-Classic"
            // };
            //
            // var createResponse = await _ec2Client.CreateSecurityGroupAsync(createRequest);

            var createResponse = await _ec2Client.DescribeSecurityGroupsAsync();

            var Groups = new List<string>() {createResponse.SecurityGroups.First().GroupId };
            var describeRequest = new DescribeSecurityGroupsRequest()
            {
                GroupIds = Groups
            };

            var describeResponse = await _ec2Client.DescribeSecurityGroupsAsync(describeRequest);
            return await Launch(describeResponse);
        }

        private async Task IPRange(DescribeSecurityGroupsResponse describeResponse)
        {
            var ipRange = new IpRange
            {
                CidrIp = "1.1.1.1/1"
            };

            var ranges = new List<IpRange> { ipRange };

            var ipPermission = new IpPermission
            {
                IpProtocol = "tcp",
                FromPort = 22,
                ToPort = 22,
                Ipv4Ranges = ranges
            };

            var ingressRequest = new AuthorizeSecurityGroupIngressRequest
            {
                GroupId = describeResponse.SecurityGroups[0].GroupId
            };
            ingressRequest.IpPermissions.Add(ipPermission);
            var ingressResponse = await _ec2Client.AuthorizeSecurityGroupIngressAsync(ingressRequest);

            var request = new CreateKeyPairRequest
            {
                KeyName = "testKeyPair"
            };

            var response = await _ec2Client.CreateKeyPairAsync(request);
            Console.WriteLine();
            Console.WriteLine("New key: " + "testKeyPair");

            // Save the private key in a .pem file    
            await using (var s = new FileStream("privatekeyFike.pem", FileMode.Create))
            await using (var writer = new StreamWriter(s))
            {
                await writer.WriteLineAsync(response.KeyPair.KeyMaterial);
            }

            await Launch(describeResponse);
        }


        private async Task<EC2Response> Launch(DescribeSecurityGroupsResponse describeResponse)
        {
            const string keyPairName = "testKeyPair";

            var groups = new List<string>() { describeResponse.SecurityGroups[0].GroupId };
            var launchRequest = new RunInstancesRequest()
            {
                
                ImageId = "ami-06db9d8fca38be745",
                InstanceType = InstanceType.T2Micro,
                MinCount = 1,
                MaxCount = 1,
                KeyName = keyPairName,
                SecurityGroupIds = groups,
            };

            var launchResponse = await _ec2Client.RunInstancesAsync(launchRequest);

            var instanceId = launchResponse.Reservation.Instances.First().InstanceId;

            await CheckState(new List<string> { instanceId });
            

            return new EC2Response
            {
                Message = launchResponse.ResponseMetadata.RequestId,
                Status = launchResponse.HttpStatusCode
            };
        }

        //public async Task CreateAsync()
        //{
        //    var groupID = "";
        //    var ami = "";
        //    var keyPairName = "";
        //    var subnetID = "";

        //    // Create an object with the necessary properties
        //    var request = GetRequestData(groupID, ami, keyPairName, subnetID);

        //    // Launch the instances and wait for them to start running
        //    var instanceIds = await LaunchInstances(request);
        //    await CheckState(instanceIds);
        //}

        //// Method to put together the properties needed to launch the instance.
        //private static RunInstancesRequest GetRequestData(
        //  string groupID, string ami, string keyPairName, string subnetID)
        //{
        //    // Common properties
        //    var groupIDs = new List<string>() { groupID };
        //    var request = new RunInstancesRequest()
        //    {
        //        // The first three of these would be additional command-line arguments or similar.
        //        InstanceType = InstanceType.T1Micro,
        //        MinCount = 1,
        //        MaxCount = 1,
        //        ImageId = ami,
        //        KeyName = keyPairName
        //    };

        //    // Properties specifically for EC2 in a VPC.
        //    if (!string.IsNullOrEmpty(subnetID))
        //    {
        //        request.NetworkInterfaces =
        //            new List<InstanceNetworkInterfaceSpecification>() {
        //                new InstanceNetworkInterfaceSpecification() {
        //                      DeviceIndex = 0,
        //                      SubnetId = subnetID,
        //                      Groups = groupIDs,
        //                      AssociatePublicIpAddress = true
        //                }
        //            };
        //    }

        //    // Properties specifically for EC2-Classic
        //    else
        //    {
        //        request.SecurityGroupIds = groupIDs;
        //    }
        //    return request;
        //}

        //// Method to launch the instances
        //// Returns a list with the launched instance IDs
        //private async Task<List<string>> LaunchInstances(RunInstancesRequest requestLaunch)
        //{
        //    var instanceIds = new List<string>();
        //    var responseLaunch = await _ec2Client.RunInstancesAsync(requestLaunch);

        //    Console.WriteLine("\nNew instances have been created.");
        //    foreach (var item in responseLaunch.Reservation.Instances)
        //    {
        //        instanceIds.Add(item.InstanceId);
        //        Console.WriteLine($"  New instance: {item.InstanceId}");
        //    }

        //    return instanceIds;
        //}

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
