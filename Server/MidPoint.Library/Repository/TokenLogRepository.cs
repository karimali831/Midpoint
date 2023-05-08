using MidPoint.Library.Helper;
using MidPoint.Library.Model.Db;

namespace MidPoint.Library.Repository
{
    public interface ITokenLogRepository
    {
        Task<bool> AddAsync(TokenLog model);
        Task<int> GetTotalDeductions(string instanceId);
        Task SetInactiveAsync(string instanceId);
    }

    public class TokenLogRepository : DapperBaseRepository, ITokenLogRepository
    {
        private const string Table = "[dbo].[TokensLog]";
        private static readonly string[] Fields = typeof(TokenLog).SqlFields();

        public TokenLogRepository(IConfigHelper config) : base(config)
        {
        }
        
        public async Task<bool> AddAsync(TokenLog model)
        {
            return await ExecuteAsync(DapperHelper.INSERT(Table, Fields), model);
        }

        public async Task<IEnumerable<TokenLog>> GetAllByInstanceId(string instanceId)
        {
            return await QueryAsync<TokenLog>($"{DapperHelper.SELECT(Table, Fields)} WHERE Ec2InstanceId = @instanceId", new
            {
                instanceId
            });
        }
        
        public async Task<int> GetTotalDeductions(string instanceId)
        {
            return await ExecuteScalarAsync<int>($"{DapperHelper.SUM(Table, "Deducted")} WHERE Ec2InstanceId = @instanceId AND Active = 1", 
                new { instanceId });
        }

        public async Task SetInactiveAsync1(string awsUid)
        {
            await ExecuteAsync($"UPDATE {Table} SET Active = 0 WHERE AwsUid = @awsUid AND Created < GETDATE() AND Active = 1", new { awsUid });
        }

        public async Task SetInactiveAsync(string instanceId)
        {
            await ExecuteAsync($"UPDATE {Table} SET Active = 0 WHERE Ec2InstanceId = @instanceId AND Active = 1", new { instanceId });
        }
    }
}