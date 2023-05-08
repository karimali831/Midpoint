using MidPoint.Library.Model.Db;
using MidPoint.Library.Repository;

namespace MidPoint.Library.Service
{
    public interface IBillingCustomerService
    {
        Task<BillingCustomer> CreateAsync(string awsUid, string customerId);
        Task<BillingCustomer?> GetByAwsUidAsync(string awsUid);
        Task<BillingCustomer> GetByCustomerIdAsync(string customerId);
        Task SetInactiveAsync(string awsUid);
    }

    public class BillingCustomerService : IBillingCustomerService
    {
        private readonly IBillingCustomerRepository _billingCustomerRepository;

        public BillingCustomerService(IBillingCustomerRepository billingCustomerRepository)
        {
            _billingCustomerRepository = billingCustomerRepository;
        }

        public async Task<BillingCustomer> CreateAsync(string awsUid, string customerId)
        {
            // if already exists
            var exists = await _billingCustomerRepository.GetByAwsUidAsync(awsUid);

            if (exists is not null)
            {
                if (exists.CustomerId != customerId)
                    exists.CustomerId = customerId;

                if (!exists.Active)
                {
                    await _billingCustomerRepository.SetActiveAsync(customerId, active: true);
                }

                return exists;
            }

            var model = new BillingCustomer
            {
                CustomerId = customerId,
                AwsUid = awsUid
            };

            await _billingCustomerRepository.CreateAsync(model);
            return model;
        }

        public async Task<BillingCustomer?> GetByAwsUidAsync(string awsUid)
        {
            return await _billingCustomerRepository.GetByAwsUidAsync(awsUid);
        }

        public async Task<BillingCustomer> GetByCustomerIdAsync(string customerId)
        {
            return await _billingCustomerRepository.GetByCustomerIdAsync(customerId) ??
                throw new NullReferenceException($"Billing customer is null: customerId: {customerId}");
        }

        public async Task SetInactiveAsync(string customerId)
        {
            await _billingCustomerRepository.SetActiveAsync(customerId, active: false);
        }
    }
}