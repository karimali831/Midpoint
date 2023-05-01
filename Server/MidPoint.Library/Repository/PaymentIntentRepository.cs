using MidPoint.Library.Helper;
using MidPoint.Library.Model.Db;

namespace MidPoint.Library.Repository
{
    public interface IPaymentRepository
    {
        Task<bool> AddAsync(Payment model);
        Task<int?> GetTotalPurchasedTokens(string awsUid);
        Task SetInactiveAsync(string awsUid);
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


        public async Task<int?> GetTotalPurchasedTokens(string awsUid)
        {
            return await ExecuteScalarAsync<int?>(
                $"{DapperHelper.SUM(Table, "Tokens")} WHERE AwsUid = @awsUid AND Active = 1",
                new
                {
                    awsUid
                });
        }

        public async Task SetInactiveAsync(string awsUid)
        {
            await ExecuteAsync(
                $"UPDATE {Table} SET Active = 0 WHERE AwsUid = @awsUid AND Created < GETDATE() AND Active = 1",
                new { awsUid });

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