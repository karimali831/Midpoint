using MidPoint.Library.Configuration;
using MidPoint.Library.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MidPoint.Library.ExceptionHandler;
using MidPoint.Library.Model.Db;
using Stripe;
using MidPoint.Library.Repository;

namespace MidPoint.Web.Controllers
{
    public class StripeController : Controller
    {
        private readonly IOptions<StripeConfig> _stripeConfig;
        private readonly IAwsUserService _awsUserService;
        private readonly IPaymentService _paymentService;
        private readonly ITokenLogRepository _tokenLogRepository;
        private readonly IExceptionHandlerService _exceptionHandlerService;
        private readonly IPromotionService _promotionService;
        private readonly IBillingCustomerService _billingCustomerService;
        private readonly IStripePaymentMethodService _stripePaymentMethodService;

        public StripeController(
            IOptions<StripeConfig> stripeConfig, 
            IAwsUserService awsUserService, 
            IExceptionHandlerService exceptionHandlerService,
            ITokenLogRepository tokenLogRepository,
            IPaymentService paymentService, 
            IBillingCustomerService billingCustomerService, 
            IPromotionService promotionService,
            IStripePaymentMethodService stripePaymentMethodService)
        {
            _stripeConfig = stripeConfig;
            _awsUserService = awsUserService;
            _exceptionHandlerService = exceptionHandlerService;
            _tokenLogRepository = tokenLogRepository;
            _paymentService = paymentService;
            _billingCustomerService = billingCustomerService;
            _promotionService = promotionService;
            _stripePaymentMethodService = stripePaymentMethodService;
        }
        
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Webhook()
        {
            var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();

            try
            {
                var stripeEvent = EventUtility.ConstructEvent(json,
                    Request.Headers["Stripe-Signature"],
                    _stripeConfig.Value.WebhookSecret
                );
             
                if (stripeEvent.Data.Object is Customer customer)
                {
                    if (stripeEvent.Type == Events.CustomerDeleted)
                    {
                        await _billingCustomerService.SetInactiveAsync(customer.Id);
                    }
                }
                
                if (stripeEvent.Data.Object is PaymentIntent paymentIntent)
                {
                    if (stripeEvent.Type == Events.PaymentIntentSucceeded)
                    {
                        try
                        {
                            var billingCustomer =
                                await _billingCustomerService.GetByCustomerIdAsync(paymentIntent.CustomerId);
                            
                            var purchasedTokens = paymentIntent.Metadata.First(x => x.Key == "Tokens").Value;
                           
                            var user = await _awsUserService.GetAsync(billingCustomer.AwsUid);
                            var tokens = int.Parse(purchasedTokens) + user.RemainingTokens;

                            var liveInstanceTotalDeductions = 0;
                            if (user.CreatedInstanceId is not null)
                            {
                                liveInstanceTotalDeductions = await _tokenLogRepository.GetTotalDeductions(user.CreatedInstanceId);
                                await _tokenLogRepository.SetInactiveAsync(user.CreatedInstanceId);
                            }

                            var calcTokens = tokens - liveInstanceTotalDeductions;
                            var paymentMethod = await _stripePaymentMethodService.GetAsync(paymentIntent.PaymentMethodId);

                            await _paymentService.AddAsync(new Payment
                            {
                                Id = paymentIntent.Id,
                                CustomerId = paymentIntent.CustomerId,
                                //PurchasedTokens = tokens,
                                PurchasedTokens = int.Parse(purchasedTokens),
                                RemainingTokens = calcTokens,
                                Amount = paymentIntent.Amount,
                                Status = paymentIntent.Status,
                                CardBrand = paymentMethod.Card.Brand,
                                CardLast4 = paymentMethod.Card.Last4,
                                Created = DateTime.UtcNow
                            });

  
                            await _awsUserService.UpdateAsync("purchasedTokens", tokens, billingCustomer.AwsUid);
                            await _awsUserService.UpdateAsync("remainingTokens", calcTokens, billingCustomer.AwsUid);
                            
                            var promoCode = paymentIntent.Metadata.FirstOrDefault(x => x.Key == "PromoCode").Value;

                            if (promoCode is not null)
                            {
                                var promotion = await _promotionService.GetByPromoCodeAsync(promoCode, activeOnly: true);
                            
                                if (promotion is not null)
                                {
                                    if (promotion.ReceiverCustomerId is null)
                                    {
                                        await _promotionService.ReceiverClaimPromoCode(promoCode, paymentIntent.CustomerId, billingCustomer.AwsUid);
                                    }
                                    else
                                    {
                                        await _promotionService.CreatorClaimPromoCode(promoCode, billingCustomer.AwsUid);
                                    }
                                }
                            }
                        }
                        catch (Exception exp)
                        {
                            _exceptionHandlerService.ReportException(exp).Send();
                        }
                    }
                }
                
                return Ok();
            }
            catch (StripeException exp)
            {
                _exceptionHandlerService.ReportException(exp.InnerException ?? exp)
                    .AddTags(new Dictionary<string, string?> { 
                        { "Stripe", "Webhook"  } 
                    })
                    .Send();
                return BadRequest();
            }
            catch (Exception exp)
            {
                _exceptionHandlerService.ReportException(exp.InnerException ?? exp)
                    .AddTags(new Dictionary<string, string?> {
                        { "Stripe", "Webhook"  }
                    })
                    .Send();

                return StatusCode(500);
            }
        }
    }
}
