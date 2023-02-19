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

        [HttpPost("CreatePaymentIntent/{priceId}")]
        public async Task<JsonResult> CreatePaymentIntent([FromRoute] string priceId)
        {
            try
            {
                var price = await _stripePriceService.GetAsync(priceId);
                var amount = price.UnitAmount ?? 0;

                if (amount == 0)
                    throw new Exception("An error occurred");
                
                var paymentIntent = await _stripePaymentService.CreatePaymentIntent(amount);
                return Json(new { clientSecret = paymentIntent.ClientSecret });
            }
            catch (Exception exp)
            {
                return Json(new { ErrorMsg = exp.Message} );
            }

        }
        

    }
}