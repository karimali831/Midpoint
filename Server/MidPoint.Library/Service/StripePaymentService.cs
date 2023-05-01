using MidPoint.Library.DTO;
using MidPoint.Library.Helper;
using Stripe;

namespace MidPoint.Library.Service
{
    public interface IStripePaymentService
    {
        Task<PaymentIntentResponse> CreatePaymentIntent(string priceId, string awsUid, Coupon? coupon = null);
    }

    public class StripePaymentService : IStripePaymentService
    {
        private readonly PaymentIntentService _paymentIntentService;
        private readonly IStripeCustomerService _stripeCustomerService;
        private readonly IStripePriceService _stripePriceService;

        public StripePaymentService(
            IStripeCustomerService stripeCustomerService,
            IStripePriceService stripePriceService)
        {
            _stripeCustomerService = stripeCustomerService;
            _stripePriceService = stripePriceService;
            _paymentIntentService = new PaymentIntentService();
        }

        public async Task<PaymentIntentResponse> CreatePaymentIntent(string priceId, string awsUid,
            Coupon? coupon = null)
        {
            var price = await _stripePriceService.GetAsync(priceId);
            var amount = price.UnitAmount ?? 0;
            long discountedAmount = 0;

            if (amount == 0)
                throw new Exception("An error occurred");

            if (coupon is not null)
            {
                if (coupon.PercentOff > 0)
                {
                    discountedAmount = amount * (long)coupon.PercentOff.Value / 100;
                    amount -= amount * (long)coupon.PercentOff.Value / 100;
                }

                if (coupon.AmountOff is > 0)
                {
                    amount -= coupon.AmountOff.Value;
                }
            }

            var customer = await _stripeCustomerService.GetOrCreateAsync(awsUid);

            try
            {
                var create = await _paymentIntentService.CreateAsync(
                    new PaymentIntentCreateOptions
                    {
                        Amount = amount,
                        Customer = customer.Id,
                        Currency = "gbp",
                        Metadata = new Dictionary<string, string>
                        {
                            { "Tokens", price.TransformQuantity.DivideBy.ToString() }
                        }
                    });

                return new PaymentIntentResponse
                {
                    ClientSecret = create.ClientSecret,
                    Coupon = coupon?.Name,
                    DiscountedAmount = discountedAmount.ToCurrencyGbp(),
                    Amount = amount.ToCurrencyGbp()
                };
            }
            catch (Exception exp)
            {
                return new PaymentIntentResponse { ErrorMsg = exp.Message };
            }
        }
    }
}