using System.Net;
using Microsoft.AspNetCore.Mvc;
using MidPoint.Library.Model;
using MidPoint.Library.Service;

namespace MidPoint.Web.Controllers.Api
{
    [Route("api/[controller]")]
    // [ApiKey]
    [ApiController]
    public class EC2InstanceController : ControllerBase
    {
        private readonly IEc2InstanceService _ec2InstanceService;
        private readonly ITokenJobService _tokenJobService;
        private readonly IAwsUserService _awsUserService;
        
        public EC2InstanceController(
            IEc2InstanceService ec2InstanceService, 
            ITokenJobService tokenJobService,
            IAwsUserService awsUserService)
        {
            _ec2InstanceService = ec2InstanceService;
            _tokenJobService = tokenJobService;
            _awsUserService = awsUserService;
        }

        [HttpGet("get/{instanceId}/{awsUid}")]
        public async Task<EC2Response?> Get(string instanceId, string awsUid)
        {
            var instance = await _ec2InstanceService.GetRunningAsync(instanceId);

            if (instance == null)
                return null;

            var awsUidFromTag = instance.Tags.FirstOrDefault(tag => tag.Key == "AwsUid")?.Value;

            if (awsUidFromTag != awsUid)
                return null;


            return new EC2Response
            {
                Status = (HttpStatusCode)20,
                Message = null,
                HostRoomId = instance.Tags.First(x => x.Key == "HostRoomId").Value,
                LaunchTime = instance.LaunchTime
            };
        }

        [HttpGet("start/{awsUid}/{hostRoomId}")]
        public async Task<EC2Response> Create(string? awsUid, string hostRoomId)
        {
            return await _ec2InstanceService.CreateAsync(awsUid, hostRoomId);
        }
        
        [HttpGet("terminate/{awsUid}")]
        public async Task Terminate(string awsUid)
        {
            var instance = (await _ec2InstanceService.GetAllRunningAsync())
                .First(x => awsUid == x.Tags.First(tag => tag.Key == "AwsUid").Value);
            
            var data = new List<(string InstanceId, string AwsUid)> { (instance.InstanceId, awsUid) };
            await _ec2InstanceService.TerminateAsync(data);
        }
    }
}
