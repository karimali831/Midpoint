using Microsoft.Extensions.Hosting;
using Stripe;

namespace Beatrice.Service.Service
{
    public interface IStripeCustomerService
    {
        Task<Customer> GetAsync(string customerId);
        Task<Customer> GetOrCreateAsync(string awsUid);
        Task<Customer?> GetByEmailAsync(string email);
    }
    
    public class StripeCustomerService : IStripeCustomerService
    {
        private readonly CustomerService _customerService;
        private readonly IHostEnvironment _hostEnvironment;
        private readonly IAwsUserService _awsUserService;
        
        public StripeCustomerService(IHostEnvironment hostEnvironment, IAwsUserService awsUserService)
        {
            _hostEnvironment = hostEnvironment;
            _awsUserService = awsUserService;
            _customerService = new CustomerService();
        }

        public async Task<Customer> GetAsync(string customerId)
        {
            return await _customerService.GetAsync(customerId);
        }

        public async Task<Customer> GetOrCreateAsync(string awsUid)
        {
            var user = await _awsUserService.GetAsync(awsUid);
            
            // Create new customer in Stripe if doesn't exist
            var customer = await GetByEmailAsync(user.Email);

            if (customer != null) 
                return customer;
            
            var options = new CustomerCreateOptions
            {
                Name = user.FullName,
                Email = user.Email,
                Metadata = new Dictionary<string, string>
                {
                    { "AwsUid", user.Id },
                    { "Environment", _hostEnvironment.EnvironmentName }
                }
            };
            
            return await _customerService.CreateAsync(options);
        }
        
        public async Task<Customer?> GetByEmailAsync(string email)
        {
            return (await _customerService.SearchAsync(new CustomerSearchOptions
                {
                    Query = $"email:'{email}'",
                }))
                .FirstOrDefault();
        }
    }
}