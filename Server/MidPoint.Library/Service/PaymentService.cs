using MidPoint.Library.Helper;
using MidPoint.Library.Model.Db;
using MidPoint.Library.Repository;
using MidPoint.Library.ViewModels;

namespace MidPoint.Library.Service
{
    public interface IPaymentService
    {
        Task<IEnumerable<PaymentViewModel>> GetAlLAsync(string customerId, bool activeOnly);
        Task<bool> AddAsync(Payment model);
        Task<int> GetTotalPurchasedTokens(string customerId);
        Task SetInactiveAsync(string customerId);
    }
    
    public class PaymentService : IPaymentService
    {
        private readonly IPaymentRepository _paymentRepository;
        private readonly ICacheService _cacheService;
        
        public PaymentService(
            IPaymentRepository paymentRepository,
            ICacheService cacheService)
        {
            _paymentRepository = paymentRepository;
            _cacheService = cacheService;
        }

        public async Task<bool> AddAsync(Payment model)
        {
            _cacheService.Remove(CachedKey.CustomerPayments(model.CustomerId));
            return await _paymentRepository.AddAsync(model);
        }

        public async Task<IEnumerable<PaymentViewModel>> GetAlLAsync(string customerId, bool activeOnly)
        {
            return await _cacheService.GetOrCreateAsync(
                CachedKey.CustomerPayments(customerId),
                    async () =>
                    {
                        return (await _paymentRepository.GetAlLAsync(customerId, activeOnly))
                        .Select(x => new PaymentViewModel
                        {
                            Id = x.Id,
                            AmountStr = x.Amount.ToCurrencyGbp(),
                            Status = Utils.UcFirst(x.Status),
                            CardBrand = Utils.UcFirst(x.CardBrand),
                            CardLast4 = x.CardLast4,
                            Tokens = x.PurchasedTokens,
                            Date = x.Created.ToString("D")
                        });
                    });
        }

        public async Task<int> GetTotalPurchasedTokens(string customerId)
        {
            return (await _paymentRepository.GetTotalPurchasedTokens(customerId)) ?? 0;
        }

        public async Task SetInactiveAsync(string customerId)
        {
            await _paymentRepository.SetInactiveAsync(customerId);
        }
    }
}