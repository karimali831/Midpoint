using Microsoft.Extensions.Hosting;
using Stripe;

namespace MidPoint.Library.Service
{
    public interface IStripeCustomerService
    {
        Task<Customer> GetAsync(string customerId);
        Task<Customer> CreateAsync(string awsUid);
        Task<Customer?> GetByEmailAsync(string email);
        Task<PaymentMethod?> GetLatestPaymentMethodAsync(string customerId);
    }
    
    public class StripeCustomerService : IStripeCustomerService
    {
        private readonly CustomerService _customerService;
        private readonly IHostEnvironment _hostEnvironment;
        private readonly IAwsUserService _awsUserService;
        
        public StripeCustomerService(
            IHostEnvironment hostEnvironment, 
            IAwsUserService awsUserService)
        {
            _hostEnvironment = hostEnvironment;
            _awsUserService = awsUserService;
            _customerService = new CustomerService();
        }

        public async Task<Customer> GetAsync(string customerId)
        {
            return await _customerService.GetAsync(customerId);
        }

        public async Task<PaymentMethod?> GetLatestPaymentMethodAsync(string customerId)
        {
            return (await _customerService.ListPaymentMethodsAsync(customerId))
                .MaxBy(x => x.Created);
        }

        public async Task<Customer> CreateAsync(string awsUid)
        {
            var user = await _awsUserService.GetAsync(awsUid);
            
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