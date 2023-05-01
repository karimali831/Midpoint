using Microsoft.Extensions.Options;
using MidPoint.Library.Configuration;
using Stripe;

namespace MidPoint.Library.Service
{
    public interface IStripeDiscountService
    {
        Task<Coupon?> GetCouponByPromotionCode(string code);
    }

    public class StripeDiscountService : IStripeDiscountService
    {
        private readonly CouponService _couponService;
        private readonly PromotionCodeService _promotionCodeService;

        public StripeDiscountService(IOptions<StripeConfig> stripeConfig)
        {
            _couponService = new CouponService();
            _promotionCodeService = new PromotionCodeService();
        }

        public async Task<Coupon> GetAsync(string id)
        {
            return await _couponService.GetAsync(id);
        }

        public async Task<Coupon?> GetCouponByPromotionCode(string code)
        {
            var promotionCode = await GetPromotionByCode(code);

            if (promotionCode is not null)
            {
                return await _couponService.GetAsync(promotionCode.Coupon.Id);
            }

            return null;
        }

        private async Task<PromotionCode?> GetPromotionByCode(string code)
        {
            return (await _promotionCodeService.ListAsync(
                    new PromotionCodeListOptions
                    {
                        // Default 10
                        Limit = 100
                    }))
                .FirstOrDefault(x => x.Code.Equals(code, StringComparison.OrdinalIgnoreCase));
        }
    }
}