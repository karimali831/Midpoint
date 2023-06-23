using System.Net;
using Microsoft.AspNetCore.Mvc;
using MidPoint.Library.Enum;
using MidPoint.Library.Model;
using MidPoint.Library.Model.Db;
using MidPoint.Library.Service;

namespace MidPoint.Web.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class Ec2InstanceController : ControllerBase
    {
        private readonly IEc2InstanceService _ec2InstanceService;
        private readonly IBillingCustomerService _billingCustomerService;
        private readonly IInstanceService _instanceService;

        public Ec2InstanceController(
            IEc2InstanceService ec2InstanceService,
            IBillingCustomerService billingCustomerService, 
            IInstanceService instanceService)
        {
            _ec2InstanceService = ec2InstanceService;
            _billingCustomerService = billingCustomerService;
            _instanceService = instanceService;
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
                StatusCode = (HttpStatusCode)20,
                Message = null,
                State = (Ec2InstanceStatus)instance.State.Code,
                HostRoomId = instance.Tags.First(x => x.Key == "HostRoomId").Value,
                LaunchTime = instance.LaunchTime
            };
        }

        [HttpGet("start/{awsUid}/{hostRoomId}")]
        public async Task<EC2Response> Create(string awsUid, string hostRoomId)
        {
            var customerId = (await _billingCustomerService.GetByAwsUidAsync(awsUid))?.CustomerId;

            if (customerId is null)
                throw new NullReferenceException($"Billing customer is null: customerId: {customerId}");

            return await _ec2InstanceService.CreateAsync(awsUid, customerId, hostRoomId);
        }

        [HttpGet("terminate/{awsUid}")]
        public async Task Terminate(string awsUid)
        {
            var statuses = new List<Ec2InstanceStatus> { 
                Ec2InstanceStatus.Running, 
                Ec2InstanceStatus.Pending 
            };

            var instance = (await _ec2InstanceService.GetAllAsync(statuses))
                .FirstOrDefault(x => awsUid == x.Tags.FirstOrDefault(tag => tag.Key == "AwsUid")?.Value);

            if (instance is null)
                return;

            var customer = await _billingCustomerService.GetByAwsUidAsync(awsUid);
            
            if (customer is null)
                throw new NullReferenceException($"Billing customer is null: customerId: {customer}");

            var data = new List<(string InstanceId, string AwsUid, string CustomerId)>
            {
                (instance.InstanceId, awsUid, customer.CustomerId)
            };

            await _ec2InstanceService.TerminateAsync(data);
        }

        [HttpGet("get/{awsUid}")]
        public async Task<IEnumerable<InstanceLog>> GetInstances(string awsUid)
        {
            return await _instanceService.GetCompletedAsync(awsUid, activeOnly: false);
        }
    }
}