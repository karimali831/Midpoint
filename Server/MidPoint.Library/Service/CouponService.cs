using MidPoint.Library.Model.Db;
using MidPoint.Library.Repository;

namespace MidPoint.Library.Service
{
    public interface ICouponService
    {
        Task<Coupon> GetAsync(int id);
        Task<IEnumerable<Coupon>> GetAllAsync();
    }

    public class CouponService : ICouponService
    {
        private readonly ICouponRepository _couponRepository;
        
        public CouponService(ICouponRepository couponRepository)
        {
            _couponRepository = couponRepository;
        }
        
        public async Task<Coupon> GetAsync(int id)
        {
            return await _couponRepository.GetAsync(id);
        }

        public async Task<IEnumerable<Coupon>> GetAllAsync()
        {
            return await _couponRepository.GetAllAsync();
        }
    }
}