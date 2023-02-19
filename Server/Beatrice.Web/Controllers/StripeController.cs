
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


        public StripeController(
            IOptionsSnapshot<StripeConfig> stripeConfig)
        {
            _stripeConfig = stripeConfig;

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

            

                if (stripeEvent.Data.Object is Invoice invoice)
                {
      
                    
                    // InvoicePaymentSucceeded is obsolete oddly that fires rather than InvoicePaid
                    if (stripeEvent.Type is Events.InvoicePaid or Events.InvoicePaymentSucceeded)
                    {
                        // Used to provision services after the trial has ended.
                        // The status of the invoice will show up as paid. Store the status in your
                        // database to reference when a user accesses your service to avoid hitting rate
                        // limits.
               
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
