using MidPoint.Library.Helper;
using MidPoint.Library.Model.Db;
using MidPoint.Library.Repository;
using MidPoint.Library.ViewModels;
using Coupon = MidPoint.Library.Model.Db.Coupon;

namespace MidPoint.Library.Service
{
    public interface IPromotionService
    {
        Task<Coupon?> GetCouponByPromotionCode(string code);
        Task<IEnumerable<PromotionViewModel>> GetPromotionsAsync(string awsUid);
        Task<Promotion?> GetByCouponIdAsync(int couponId, string creatorCustomerId);
        Task<Promotion?> GetByPromoCodeAsync(string code, bool activeOnly);
        Task ReceiverClaimPromoCode(string code, string receiver, string awsUid);
        Task CreatorClaimPromoCode(string code, string awsUid);
    }

    public class PromotionService : IPromotionService
    {
        private readonly IPromotionRepository _promotionRepository;
        private readonly IBillingCustomerService _billingCustomerService;
        private readonly ICouponService _couponService;
        private readonly ICacheService _cacheService;

        public PromotionService(
            IPromotionRepository promotionRepository,  
            IBillingCustomerService billingCustomerService, 
            ICouponService couponService,
            ICacheService cacheService)
        {
            _billingCustomerService = billingCustomerService;
            _couponService = couponService;
            _promotionRepository = promotionRepository;
            _cacheService = cacheService;
        }
        
        public async Task<Coupon?> GetCouponByPromotionCode(string code)
        {
            var promo = await _promotionRepository.GetByPromoCodeAsync(code, activeOnly: true);

            if (promo is null)
                return null;
            
            return await _couponService.GetAsync(promo.CouponId);
        }
        
        public async Task<IEnumerable<PromotionViewModel>> GetPromotionsAsync(string awsUid)
        {
            var billingCustomer = await _billingCustomerService.GetByAwsUidAsync(awsUid);

            if (billingCustomer is null)
                throw new NullReferenceException($"Billing customer is null: awsUid: {awsUid}");

            return await _cacheService.GetOrCreateAsync(
               CachedKey.PromotionCodes(awsUid),
                   async () =>
                   {

                       var coupons = (await _couponService.GetAllAsync()).ToList();
                       var expires = DateTime.UtcNow.AddMonths(3);

                       foreach (var coupon in coupons)
                       {
                           var exists = await GetByCouponIdAsync(coupon.Id, billingCustomer.CustomerId);

                           if (exists is not null)
                               continue;

                           var model = new Promotion
                           {
                               Id = Guid.NewGuid(),
                               CreatorCustomerId = billingCustomer.CustomerId,
                               CouponId = coupon.Id,
                               Code = Utils.RandomString(8),
                               Expires = expires,
                               Active = true
                           };

                           await _promotionRepository.AddAsync(model);
                       }

                       return (await _promotionRepository.GetAllAsync(billingCustomer.CustomerId))
                           .Select(x => new PromotionViewModel
                           {
                               CouponName = x.CouponName,
                               CreatorCustomerId = x.CreatorCustomerId,
                               ReceiverCustomerId = x.ReceiverCustomerId,
                               Code = x.Code,
                               Expires = x.Expires,
                               ReceiverClaimedDate = x.ReceiverClaimedDate,
                               CreatorClaimedDate = x.CreatorClaimedDate,
                               ExpiresStr = x.Expires.ToString("D"),
                               ReceiverClaimedDateStr = x.ReceiverClaimedDate?.ToString("D"),
                               CreatorClaimedDateStr = x.CreatorClaimedDate?.ToString("D")
                           });
                   });
        }
        
        public async Task<Promotion?> GetByCouponIdAsync(int couponId, string creatorId)
        {
            return await _promotionRepository.GetByCouponIdAsync(couponId, creatorId);
        }

        public async Task<Promotion?> GetByPromoCodeAsync(string code, bool activeOnly)
        {
            return await _promotionRepository.GetByPromoCodeAsync(code, activeOnly);
        }

        public async Task ReceiverClaimPromoCode(string code, string receiver, string awsUid)
        {
            _cacheService.Remove(CachedKey.PromotionCodes(awsUid));
            await _promotionRepository.ReceiverClaimPromoCode(code, receiver);
        }

        public async Task CreatorClaimPromoCode(string code, string awsUid)
        {
            _cacheService.Remove(CachedKey.CustomerPayments(awsUid));
            await _promotionRepository.CreatorClaimPromoCode(code);
        }
    }
}