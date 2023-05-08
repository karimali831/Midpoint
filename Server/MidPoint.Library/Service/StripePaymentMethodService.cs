using MidPoint.Library.ExceptionHandler;
using Stripe;


namespace MidPoint.Library.Service
{
    public interface IStripePaymentMethodService
    {
        Task<PaymentMethod> GetAsync(string paymentMethodId);
        Task<PaymentMethod> GetDefaultAsync(string customerId, string defaultPaymentMethodId);
    }

    public class StripePaymentMethodService : IStripePaymentMethodService
    {
        private readonly PaymentMethodService _paymentMethodService;
        private readonly IStripeCustomerService _stripeCustomerService;
        private readonly IExceptionHandlerService _exceptionHandlerService;

        public StripePaymentMethodService(
            IExceptionHandlerService exceptionHandlerService,
            IStripeCustomerService stripeCustomerService)
        {
            _stripeCustomerService = stripeCustomerService;
            _exceptionHandlerService = exceptionHandlerService;
            _paymentMethodService = new PaymentMethodService();
        }


        public async Task<PaymentMethod> GetAsync(string paymentMethodId)
        {
            return await _paymentMethodService.GetAsync(paymentMethodId);
        }

        public async Task<PaymentMethod> GetDefaultAsync(string customerId, string defaultPaymentMethodId)
        {
            if (customerId == null)
            {
                var exp = new NullReferenceException("Customer Id supplied is null");
                _exceptionHandlerService.ReportException(exp).Send();
                throw exp;
            }

            if (defaultPaymentMethodId == null)
            {
                return await _stripeCustomerService.GetLatestPaymentMethodAsync(customerId);
            }

            return await _paymentMethodService.GetAsync(defaultPaymentMethodId);
        }
    }
}
