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
        
        [HttpGet("get/{instanceId:string}/{awsUid:string}")]
        public async Task Get(string instanceId, string awsUid)
        {
            var instance = (await _ec2InstanceService.GetRunningAsync(instanceId))
                .FirstOrDefault();

            if (instance == null)
            {
                await _awsUserService.UpdateAsync<string>("createdInstanceId", null, awsUid);
            }
        }
        

        [HttpGet("get")]
        public async Task<IList<Instance>> Get()
        {
            return await _ec2InstanceService.GetRunningAsync();
        }

        [HttpGet("start/{awsUid}")]
        public async Task<EC2Response> Create(string awsUid)
        {
            return await _ec2InstanceService.CreateAsync(awsUid);
        }
    }
}
