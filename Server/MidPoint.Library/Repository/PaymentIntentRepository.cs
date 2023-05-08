using MidPoint.Library.Helper;
using MidPoint.Library.Model.Db;

namespace MidPoint.Library.Repository
{
    public interface IPaymentRepository
    {
        Task<bool> AddAsync(Payment model);
        Task<IEnumerable<Payment>> GetAlLAsync(string customerId, bool activeOnly);
        Task<int?> GetTotalPurchasedTokens(string customerId);
        Task SetInactiveAsync(string customerId);
    }

    public class PaymentRepository : DapperBaseRepository, IPaymentRepository
    {
        private const string Table = "[dbo].[Payments]";
        private static readonly string[] Fields = typeof(Payment).SqlFields();

        public PaymentRepository(IConfigHelper config) : base(config)
        {
        }

        public async Task<bool> AddAsync(Payment model)
        {
            return await ExecuteAsync(DapperHelper.INSERT(Table, Fields), model);
        }

        public async Task<IEnumerable<Payment>> GetAlLAsync(string customerId, bool activeOnly)
        {
            return await QueryAsync<Payment>($"{DapperHelper.SELECT(Table, Fields)} WHERE CustomerId = @customerId {(activeOnly ? "AND Active = 1" : "")}",
                new { customerId });
        }

        public async Task<int?> GetTotalPurchasedTokens(string customerId)
        {
            return await ExecuteScalarAsync<int?>(
                $"{DapperHelper.SUM(Table, "PurchasedTokens")} WHERE CustomerId = @customerId AND Active = 1",
                new
                {
                    customerId
                });
        }

        public async Task SetInactiveAsync(string customerId)
        {
            await ExecuteAsync(
                $"UPDATE {Table} SET Active = 0 WHERE CustomerId = @customerId AND Created < GETDATE() AND Active = 1",
                new { customerId });

            // var last = await GetLastAsync(awsUid);
            //
            // if (last is not null)
            // {
            //     await ExecuteAsync($"UPDATE {Table} SET Active = 0 WHERE AwsUid = @awsUid AND Created < GETDATE()", new { awsUid, last.Created });
            // }
        }

        // private async Task<PaymentIntent?> GetLastAsync(string awsUid)
        // {
        //     var sqlTxt = $"{DapperHelper.SELECT(Table, Fields)} WHERE AwsUid = @awsUid ORDER BY Created DESC";
        //     return await QueryFirstOrDefaultAsync<PaymentIntent>(sqlTxt, new { awsUid });
        // }
    }
}