using Stripe;

namespace Beatrice.Service.Service
{
    public interface IStripeCustomerService
    {
        
    }
    
    public class StripeCustomerService : IStripeCustomerService
    {
        private readonly CustomerService _customerService;
        
        public StripeCustomerService()
        {
            _customerService = new CustomerService();
        }
        
        
    }
}