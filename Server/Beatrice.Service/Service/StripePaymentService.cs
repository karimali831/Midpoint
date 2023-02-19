using Stripe;

namespace Beatrice.Service.Service
{
    public interface IStripePaymentService
    {
        Task<PaymentIntent> CreatePaymentIntent(string priceId, string awsUid);
    }
    
    public class StripePaymentService : IStripePaymentService
    {
        private readonly PaymentIntentService _paymentIntentService;
        private readonly IStripeCustomerService _stripeCustomerService;
        private readonly IStripePriceService _stripePriceService;
        
        public StripePaymentService(IStripeCustomerService stripeCustomerService, IStripePriceService stripePriceService)
        {
            _stripeCustomerService = stripeCustomerService;
            _stripePriceService = stripePriceService;
            _paymentIntentService = new PaymentIntentService();
        }

        public async Task<PaymentIntent> CreatePaymentIntent(string priceId, string awsUid)
        {
            var price = await _stripePriceService.GetAsync(priceId);
            var amount = price.UnitAmount ?? 0;

            if (amount == 0)
                throw new Exception("An error occurred");
            
            var customer = await _stripeCustomerService.GetOrCreateAsync(awsUid);
            
            return await _paymentIntentService.CreateAsync(new PaymentIntentCreateOptions
            {
                Amount = amount,
                Customer = customer.Id,
                Currency = "gbp",
                Metadata = new Dictionary<string, string>
                {
                    { "Tokens", price.TransformQuantity.DivideBy.ToString() }
                }
            });
        } 
    }
}