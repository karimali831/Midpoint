using Beatrice.Service.Model;
using Beatrice.Service.Service;
using Beatrice.Web.Attributes;
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

        [HttpGet("start")]
        public async Task<EC2Response> Create()
        {
            var response = await _ec2InstanceService.CreateAsync();
            return response;
        }

        
        [HttpDelete("delete/{instanceId}")]
        public async Task Delete([FromRoute] string instanceId)
        {
            return;
        }

    }
}
