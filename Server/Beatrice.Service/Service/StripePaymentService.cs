using Stripe;

namespace Beatrice.Service.Service
{
    public interface IStripePaymentService
    {
        Task<PaymentIntent> CreatePaymentIntent(long amount);
    }
    
    public class StripePaymentService : IStripePaymentService
    {
        private readonly PaymentIntentService _paymentIntentService;
        private readonly IAwsUserService _awsUserService;
        
        public StripePaymentService(IAwsUserService awsUserService)
        {
            _awsUserService = awsUserService;
            _paymentIntentService = new PaymentIntentService();
        }

        public async Task<PaymentIntent> CreatePaymentIntent(long amount)
        {
            var user = await _awsUserService.GetUser();
            
            return await _paymentIntentService.CreateAsync(new PaymentIntentCreateOptions
            {
                Amount = amount,
                Currency = "gbp"
            });
        } 
    }
}