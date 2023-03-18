using MidPoint.Library.Configuration;
using MidPoint.Library.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MidPoint.Library.ExceptionHandler;
using MidPoint.Library.Model.Db;
using MidPoint.Library.Repository;
using Stripe;

namespace Beatrice.Web.Controllers
{
    public class StripeController : Controller
    {
        private readonly IOptionsSnapshot<StripeConfig> _stripeConfig;
        private readonly IAwsUserService _awsUserService;
        private readonly IStripeCustomerService _stripeCustomerService;
        private readonly ITokenLogRepository _tokenLogRepository;
        private readonly IExceptionHandlerService _exceptionHandlerService;

        public StripeController(
            IOptionsSnapshot<StripeConfig> stripeConfig, 
            IAwsUserService awsUserService, 
            IStripeCustomerService stripeCustomerService, 
            IExceptionHandlerService exceptionHandlerService, 
            ITokenLogRepository tokenLogRepository)
        {
            _stripeConfig = stripeConfig;
            _awsUserService = awsUserService;
            _stripeCustomerService = stripeCustomerService;
            _exceptionHandlerService = exceptionHandlerService;
            _tokenLogRepository = tokenLogRepository;
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

                if (stripeEvent.Data.Object is SetupIntent setupIntent)
                {
                    // Update default payment method to subscription and customer entities
                    if (stripeEvent.Type == Events.SetupIntentSucceeded)
                    {
                        // Attach to customer entity first before updating Subscription default payment method
                    }
                }
                
                if (stripeEvent.Data.Object is PaymentIntent paymentIntent)
                {
                    if (stripeEvent.Type == Events.PaymentIntentSucceeded)
                    {

                        try
                        {
                            var customer = await _stripeCustomerService.GetAsync(paymentIntent.CustomerId);
                            var awsUid = customer.Metadata.FirstOrDefault(x => x.Key == "AwsUid").Value;
                            var purchasedTokens = paymentIntent.Metadata.FirstOrDefault(x => x.Key == "Tokens").Value;

                            var user = await _awsUserService.GetAsync(awsUid);
                            var preTokens = user.PurchasedToken ?? 0;
                            var tokens = int.Parse(purchasedTokens) + preTokens;

                            await _tokenLogRepository.AddAsync(new TokenLog
                            {
                                Id = Guid.NewGuid(),
                                PaymentIntentId = paymentIntent.Id,
                                AwsUid = awsUid,
                                PreTokens = preTokens,
                                PostTokens = tokens
                            });
                            
                            ;
                            await _awsUserService.UpdateAsync("purchasedTokens", tokens, awsUid);
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
                return BadRequest();
            }
            catch (Exception exp)
            {
                return StatusCode(500);
            }
        }
    }
}
