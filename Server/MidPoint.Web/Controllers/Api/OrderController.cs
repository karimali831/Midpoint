﻿using MidPoint.Library.Service;
using MidPoint.Library.ViewModels;
using Microsoft.AspNetCore.Mvc;
using MidPoint.Library.DTO;
using MidPoint.Library.Model.Db;
using Coupon = MidPoint.Library.Model.Db.Coupon;

namespace MidPoint.Web.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {
        private readonly IStripePaymentService _stripePaymentService;
        private readonly IStripePriceService _stripePriceService;
        private readonly IPromotionService _promotionService;
        private readonly IStripeCustomerService _stripeCustomerService;
        private readonly IBillingCustomerService _billingCustomerService;

        public OrderController(
            IStripePaymentService stripePaymentService,
            IStripePriceService stripePriceService,
            IPromotionService promotionService,
            IBillingCustomerService billingCustomerService,
            IStripeCustomerService stripeCustomerService)
        {
            _stripePaymentService = stripePaymentService;
            _stripePriceService = stripePriceService;
            _promotionService = promotionService;
            _billingCustomerService = billingCustomerService;
            _stripeCustomerService = stripeCustomerService;
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
            var billingCustomer = await _billingCustomerService.GetByAwsUidAsync(awsUid) ??
                await _billingCustomerService.CreateAsync(awsUid, 
                    (await _stripeCustomerService.CreateAsync(awsUid)).Id
                );

            Coupon? coupon = null;
            if (!string.IsNullOrEmpty(promoCode))
            {
                var couponByPromoCode = await _promotionService.GetCouponByPromotionCode(promoCode);
                
                if (couponByPromoCode is null)
                {
                    return new PaymentIntentResponse { ErrorMsg = "Invalid promotion code" };
                }

                var existingPromoCode = await _promotionService.GetByPromoCodeAsync(promoCode, activeOnly: false);

                if (existingPromoCode is not null)
                {
                    if (existingPromoCode.ReceiverCustomerId is null && billingCustomer.CustomerId == existingPromoCode.CreatorCustomerId)
                    {
                        return new PaymentIntentResponse
                            { ErrorMsg = "This promotion share code has not yet been claimed" };
                    }

                    if (existingPromoCode.ReceiverClaimedDate is not null && billingCustomer.CustomerId != existingPromoCode.CreatorCustomerId)
                    {
                        return new PaymentIntentResponse
                            { ErrorMsg = "This promotion share code has already been claimed" };
                    }
                    
                    if (existingPromoCode.CreatorClaimedDate is not null)
                    {
                        return new PaymentIntentResponse
                            { ErrorMsg = "This promotion share code has already been used" };
                    }
                }

                coupon = couponByPromoCode;
            }


            return await _stripePaymentService.CreatePaymentIntent(priceId, billingCustomer.CustomerId, coupon, promoCode);
        }
    }
}