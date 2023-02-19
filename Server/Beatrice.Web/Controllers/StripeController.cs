
using Beatrice.Service.Configuration;
using Beatrice.Service.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Stripe;

namespace Beatrice.Web.Controllers
{

    public class StripeController : Controller
    {
        private readonly IOptionsSnapshot<StripeConfig> _stripeConfig;
        private readonly IAwsUserService _awsUserService;
        private readonly IStripeCustomerService _stripeCustomerService;

        public StripeController(
            IOptionsSnapshot<StripeConfig> stripeConfig, IAwsUserService awsUserService, IStripeCustomerService stripeCustomerService)
        {
            _stripeConfig = stripeConfig;
            _awsUserService = awsUserService;
            _stripeCustomerService = stripeCustomerService;
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

                        var customer = await _stripeCustomerService.GetAsync(paymentIntent.CustomerId);
                        var awsUid = customer.Metadata.FirstOrDefault(x => x.Key == "AwsUid").Value;
                        var tokens = paymentIntent.Metadata.FirstOrDefault(x => x.Key == "Tokens").Value;

                        
                        if (!string.IsNullOrEmpty(tokens) && !string.IsNullOrEmpty(awsUid))
                        {

                            await _awsUserService.UpdateTokens(int.Parse(tokens), awsUid);

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
