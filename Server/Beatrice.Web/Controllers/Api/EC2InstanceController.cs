using System.Net;
using Amazon.EC2.Model;
using MidPoint.Library.Model;
using MidPoint.Library.Service;
using Microsoft.AspNetCore.Mvc;

namespace Beatrice.Web.Controllers.Api
{
    [Route("api/[controller]")]
    // [ApiKey]
    [ApiController]
    public class EC2InstanceController : ControllerBase
    {
        private readonly IEC2InstanceService _ec2InstanceService;
        private readonly IAwsUserService _awsUserService;
        
        public EC2InstanceController(
            IEC2InstanceService ec2InstanceService, 
            IAwsUserService awsUserService)
        {
            _ec2InstanceService = ec2InstanceService;
            _awsUserService = awsUserService;
        }
        
        [HttpGet("get/{awsUid}")]
        public async Task<EC2Response> Get(string awsUid)
        {
            var instance = (await _ec2InstanceService.GetRunningAsync())
                .FirstOrDefault(x => awsUid == x.Tags.First(x => x.Key == "AwsUid").Value);

            if (instance == null)
                return null;

            return new EC2Response
            {
                Status = (HttpStatusCode)20,
                Message = null,
                HostRoomId = instance.Tags.First(x => x.Key == "HostRoomId").Value,
                LaunchTime = instance.LaunchTime
            };
        }
        
        [HttpGet("get")]
        public async Task<IList<Instance>> Get()
        {
            return await _ec2InstanceService.GetRunningAsync();
        }

        [HttpGet("start/{awsUid}/{hostRoomId}")]
        public async Task<EC2Response> Create(string awsUid, string hostRoomId)
        {
            return await _ec2InstanceService.CreateAsync(awsUid, hostRoomId);
        }
        
        [HttpGet("terminate/{awsUid}")]
        public async Task Terminate(string awsUid)
        {
            var instance = (await _ec2InstanceService.GetRunningAsync())
                .First(x => awsUid == x.Tags.First(x => x.Key == "AwsUid").Value);
            
            var data = new List<(string InstanceId, string AwsUid)> { (instance.InstanceId, awsUid) };
            await _ec2InstanceService.TerminateAsync(data);
        }
    }
}
