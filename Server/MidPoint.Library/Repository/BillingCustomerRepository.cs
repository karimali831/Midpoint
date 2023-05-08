using MidPoint.Library.Helper;
using MidPoint.Library.Model.Db;

namespace MidPoint.Library.Repository
{
    public interface IBillingCustomerRepository
    {
        Task<BillingCustomer?> GetByAwsUidAsync(string awsUid);
        Task<BillingCustomer?> GetByCustomerIdAsync(string customerId);
        Task CreateAsync(BillingCustomer model);
        Task SetActiveAsync(string customerId, bool active);
    }

    public class BillingCustomerRepository : DapperBaseRepository, IBillingCustomerRepository
    {
        private const string Table = "[dbo].[BillingCustomers]";
        private static readonly string[] Fields = typeof(BillingCustomer).SqlFields();

        public BillingCustomerRepository(IConfigHelper config) : base(config)
        {
        }

        public async Task<BillingCustomer?> GetByAwsUidAsync(string awsUid)
        {
            return await QueryFirstOrDefaultAsync<BillingCustomer>($"{DapperHelper.SELECT(Table, Fields)} WHERE AwsUid = @awsUid AND Active = 1",
                new { awsUid });
        }
        
        public async Task<BillingCustomer?> GetByCustomerIdAsync(string customerId)
        {
            return await QueryFirstOrDefaultAsync<BillingCustomer>($"{DapperHelper.SELECT(Table, Fields)} WHERE CustomerId = @customerId AND Active = 1",
                new { customerId });
        }

        public async Task CreateAsync(BillingCustomer model)
        {
            await ExecuteAsync(DapperHelper.INSERT(Table, Fields), model);
        }

        public async Task SetActiveAsync(string customerId, bool active)
        {
            await ExecuteAsync($"UPDATE {Table} SET Active = 0 WHERE CustomerId = @customerId AND Active = @active",
                new { customerId, active });
        }
    }
}