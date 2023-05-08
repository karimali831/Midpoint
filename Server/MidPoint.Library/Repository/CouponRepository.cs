using MidPoint.Library.Helper;
using MidPoint.Library.Model.Db;

namespace MidPoint.Library.Repository
{
    public interface ICouponRepository
    {
        Task<Coupon> GetAsync(int id);
        Task<IEnumerable<Coupon>> GetAllAsync();
    }

    public class CouponRepository : DapperBaseRepository, ICouponRepository
    {
        private const string Table = "[dbo].[Coupons]";
        private static readonly string[] Fields = typeof(Coupon).SqlFields();

        public CouponRepository(IConfigHelper config) : base(config)
        {
        }

        public async Task<Coupon> GetAsync(int id)
        {
            return await QuerySingleAsync<Coupon>($"{DapperHelper.SELECT(Table, Fields)} WHERE Id = @id AND Active = 1",
                new { id });
        }

        public async Task<IEnumerable<Coupon>> GetAllAsync()
        {
            return await QueryAsync<Coupon>($"{DapperHelper.SELECT(Table, Fields)} WHERE Active = 1");
        }
        
    }
}