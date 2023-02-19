using Beatrice.Service.Service;
using Beatrice.Service.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Beatrice.Web.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {
        private readonly IStripePaymentService _stripePaymentService;
        private readonly IStripePriceService _stripePriceService;
        
        public OrderController(IStripePaymentService stripePaymentService, IStripePriceService stripePriceService)
        {
            _stripePaymentService = stripePaymentService;
            _stripePriceService = stripePriceService;
        }

        [HttpGet(nameof(GetPricingModel))]
        public async Task<IEnumerable<StripePricePlan>> GetPricingModel()
        {
            return await _stripePriceService.GetPricingModel();
        }

        [HttpPost("CreatePaymentIntent/{priceId}/{awsUid}")]
        public async Task<JsonResult> CreatePaymentIntent([FromRoute] string priceId, string awsUid)
        {
            try
            {
                var paymentIntent = await _stripePaymentService.CreatePaymentIntent(priceId, awsUid);
                return Json(new { clientSecret = paymentIntent.ClientSecret });
            }
            catch (Exception exp)
            {
                return Json(new { ErrorMsg = exp.Message} );
            }
        }
    }
}