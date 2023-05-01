using MidPoint.Library.Model.Db;
using MidPoint.Library.Repository;

namespace MidPoint.Library.Service
{
    public interface IPaymentService
    {
        Task<bool> AddAsync(Payment model);
        Task<int> GetTotalPurchasedTokens(string awsUid);
        Task SetInactiveAsync(string awsUid);
    }
    
    public class PaymentService : IPaymentService
    {
        private readonly IPaymentRepository _paymentRepository;
        
        public PaymentService(IPaymentRepository paymentRepository)
        {
            _paymentRepository = paymentRepository;
        }

        public async Task<bool> AddAsync(Payment model)
        {
            return await _paymentRepository.AddAsync(model);
        }

        public async Task<int> GetTotalPurchasedTokens(string awsUid)
        {
            return (await _paymentRepository.GetTotalPurchasedTokens(awsUid)) ?? 0;
        }

        public async Task<int> GetTotalDeductions(string awsUid)
        {
            return (await _paymentRepository.GetTotalPurchasedTokens(awsUid)) ?? 0;
        }

        public async Task SetInactiveAsync(string awsUid)
        {
            await _paymentRepository.SetInactiveAsync(awsUid);
        }
    }
}