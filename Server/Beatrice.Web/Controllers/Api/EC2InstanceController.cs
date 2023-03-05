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

        public EC2InstanceController(IEC2InstanceService ec2InstanceService)
        {
            _ec2InstanceService = ec2InstanceService;
        }
        
        [HttpGet("get")]
        public async Task<IList<Instance>> GetAll()
        {
            return await _ec2InstanceService.GetAllRunningAsync();
        }

        [HttpGet("start/{awsUid}")]
        public async Task<EC2Response> Create(string awsUid)
        {
            return await _ec2InstanceService.CreateAsync(awsUid);
        }
    }
}
