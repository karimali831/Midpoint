using MidPoint.Library.Helper;
using MidPoint.Library.Model.Db;

namespace MidPoint.Library.Repository
{
    public interface ITokenLogRepository
    {
        Task<bool> AddAsync(TokenLog model);
        Task<IEnumerable<TokenLog>> GetAllByInstanceId(string instanceId);
    }

    public class TokenLogRepository : DapperBaseRepository, ITokenLogRepository
    {
        private const string TABLE = "[dbo].[TokensLog]";
        private static readonly string[] FIELDS = typeof(TokenLog).SqlFields();
        
        public TokenLogRepository(IConfigHelper config) : base(config)
        {
        }
        
        public async Task<bool> AddAsync(TokenLog model)
        {
            return await ExecuteAsync(DapperHelper.INSERT(TABLE, FIELDS), model);
        }

        public async Task<IEnumerable<TokenLog>> GetAllByInstanceId(string instanceId)
        {
            return await QueryAsync<TokenLog>($"{DapperHelper.SELECT(TABLE, FIELDS)} WHERE Ec2InstanceId = @instanceId", new
            {
                instanceId
            });
        }
    }
}