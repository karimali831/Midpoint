using MidPoint.Library.Helper;
using MidPoint.Library.Model.Db;
using MidPoint.Library.ViewModels;

namespace MidPoint.Library.Repository
{
    public interface IPromotionRepository
    {
        Task<IEnumerable<PromotionViewModel>> GetAllAsync(string creatorCustomerId);
        Task<Promotion> GetByCouponIdAsync(int couponId, string creatorCustomerId);
        Task<Promotion?> GetByPromoCodeAsync(string code, bool activeOnly);
        Task<bool> AddAsync(Promotion model);
        Task ReceiverClaimPromoCode(string code, string receiver);
        Task CreatorClaimPromoCode(string code);
    }

    public class PromotionRepository : DapperBaseRepository, IPromotionRepository
    {
        private const string Table = "[dbo].[Promotions]";
        private static readonly string[] Fields = typeof(Promotion).SqlFields();

        public PromotionRepository(IConfigHelper config) : base(config)
        {
        }

        public async Task<IEnumerable<PromotionViewModel>> GetAllAsync(string creatorCustomerId)
        {
            const string sqlTxt = $@"
                SELECT c.Name AS CouponName, p.CreatorCustomerId, p.ReceiverCustomerId, p.Code, p.Expires, p.ReceiverClaimedDate, p.CreatorClaimedDate
                FROM {Table} AS p
                INNER JOIN Coupons AS c
                ON p.CouponId = c.Id
                WHERE p.CreatorCustomerId = @creatorCustomerId
                AND p.Expires > GETDATE()
                AND p.Active = 1
                AND c.Active = 1
            ";

            return await QueryAsync<PromotionViewModel>(sqlTxt,
                new { creatorCustomerId });
        }
        
        public async Task<Promotion> GetByCouponIdAsync(int couponId, string creatorCustomerId)
        {
            var sqlTxt = $@"
                {DapperHelper.SELECT(Table, Fields)} 
                WHERE CouponId = @couponId 
                AND CreatorCustomerId = @creatorCustomerId
                AND Expires > GETDATE()
                AND Active = 1";

            return await QueryFirstOrDefaultAsync<Promotion>(sqlTxt,
                new
                {
                    couponId,
                    creatorCustomerId
                });
        }

        public async Task<Promotion?> GetByPromoCodeAsync(string code, bool activeOnly)
        {
            var sqlTxt = $@"
                {DapperHelper.SELECT(Table, Fields)} 
                WHERE Code = @code 
                AND Expires > GETDATE()
                {(activeOnly ? "AND Active = 1" : "")}";

            return await QuerySingleOrDefaultAsync<Promotion>(sqlTxt,
                new { code });
        }

        public async Task<bool> AddAsync(Promotion model)
        {
            return await ExecuteAsync(DapperHelper.INSERT(Table, Fields), model);
        }

        public async Task ReceiverClaimPromoCode(string code, string receiver)
        {
            await ExecuteAsync($"UPDATE {Table} SET ReceiverCustomerId = @receiver, ReceiverClaimedDate = @date WHERE Code = @code",
                new
                {
                    code, 
                    receiver,
                    date = DateTime.UtcNow
                });
        }
        
        public async Task CreatorClaimPromoCode(string code)
        {
            await ExecuteAsync($"UPDATE {Table} SET CreatorClaimedDate = @date, Active = 0 WHERE Code = @code",
                new
                {
                    code,
                    date = DateTime.UtcNow
                });
        }
    }
}