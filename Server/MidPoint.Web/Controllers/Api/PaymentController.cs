using Microsoft.AspNetCore.Mvc;
using MidPoint.Library.Service;
using MidPoint.Library.ViewModels;

namespace MidPoint.Web.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IPaymentService _paymentService;
        private readonly IBillingCustomerService _billingCustomerService;
        
        public PaymentController(
            IPaymentService paymentService,
            IBillingCustomerService billingCustomerService)
        {
            _billingCustomerService = billingCustomerService;
            _paymentService = paymentService;
        }

        [HttpGet("Get/{awsUid}")]
        public async Task<IEnumerable<PaymentViewModel>> GetPayments(string awsUid)
        {
            var billingCustomer = await _billingCustomerService.GetByAwsUidAsync(awsUid);

            if (billingCustomer == null)
                return Enumerable.Empty<PaymentViewModel>();
            
            return await _paymentService.GetAlLAsync(billingCustomer.CustomerId, activeOnly: false);
        }
    }
}
