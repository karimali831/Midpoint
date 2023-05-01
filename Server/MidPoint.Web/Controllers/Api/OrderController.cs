using MidPoint.Library.Service;
using MidPoint.Library.ViewModels;
using Microsoft.AspNetCore.Mvc;
using MidPoint.Library.DTO;
using MidPoint.Library.Helper;
using Stripe;

namespace MidPoint.Web.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {
        private readonly IStripePaymentService _stripePaymentService;
        private readonly IStripePriceService _stripePriceService;
        private readonly IStripeDiscountService _stripeDiscountService;

        public OrderController(
            IStripePaymentService stripePaymentService,
            IStripePriceService stripePriceService,
            IStripeDiscountService stripeDiscountService)
        {
            _stripePaymentService = stripePaymentService;
            _stripePriceService = stripePriceService;
            _stripeDiscountService = stripeDiscountService;
        }

        [HttpGet(nameof(GetPricingModel))]
        public async Task<IEnumerable<StripePricePlan>> GetPricingModel()
        {
            return await _stripePriceService.GetPricingModel();
        }

        [HttpPost("CreatePaymentIntent/{priceId}/{awsUid}/{promoCode?}")]
        public async Task<PaymentIntentResponse> CreatePaymentIntent(string priceId, string awsUid,
            string? promoCode = null)
        {
            Coupon? coupon = null;
            if (!string.IsNullOrEmpty(promoCode))
            {
                var couponByPromoCode = await _stripeDiscountService.GetCouponByPromotionCode(promoCode);

                if (couponByPromoCode is null)
                {
                    return new PaymentIntentResponse { ErrorMsg = "Invalid promotion code" };
                }

                coupon = couponByPromoCode;
            }

            return await _stripePaymentService.CreatePaymentIntent(priceId, awsUid, coupon);
        }
    }
}