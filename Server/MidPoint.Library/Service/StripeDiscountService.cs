// using MidPoint.Library.Repository;
// using Stripe;
//
// namespace MidPoint.Library.Service
// {
//     public interface IStripeDiscountService
//     {
//         // Task<Coupon?> GetCouponByPromotionCode(string code);
//         // Task<PromotionCode> CreateAsync(string code, string couponId, DateTime expires);
//     }
//
//     public class StripeDiscountService : IStripeDiscountService
//     {
//         private readonly CouponService _couponService;
//         private readonly PromotionCodeService _promotionCodeService;
//
//         public StripeDiscountService(
//             IPromotionRepository promotionRepository)
//         {
//             _couponService = new CouponService();
//             _promotionCodeService = new PromotionCodeService();
//         }
//
//         // public async Task<PromotionCode> CreateAsync(string code, string couponId, DateTime expires)
//         // {
//         //     return await _promotionCodeService.CreateAsync(new PromotionCodeCreateOptions
//         //     {
//         //         Active = true,
//         //         Code = code,
//         //         Coupon = couponId,
//         //         ExpiresAt = expires,
//         //         MaxRedemptions = 2
//         //     });
//         // }
//
//
//         
//         // public async Task<Coupon?> GetCouponByPromotionCode(string code)
//         // {
//         //     var promotionCode = await GetPromotionByCode(code);
//         //
//         //     if (promotionCode is not null)
//         //     {
//         //         return await _couponService.GetAsync(promotionCode.Coupon.Id);
//         //     }
//         //
//         //     return null;
//         // }
//
//         // private async Task<PromotionCode?> GetPromotionByCode(string code)
//         // {
//         //     return (await _promotionCodeService.ListAsync(
//         //             new PromotionCodeListOptions
//         //             {
//         //                 // Default 10
//         //                 Limit = 100
//         //             }))
//         //         .FirstOrDefault(x => x.Code.Equals(code, StringComparison.OrdinalIgnoreCase));
//         // }
//     }
// }