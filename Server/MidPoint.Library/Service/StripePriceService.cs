using Microsoft.Extensions.Options;
using MidPoint.Library.Configuration;
using MidPoint.Library.Helper;
using MidPoint.Library.ViewModels;
using Stripe;

namespace MidPoint.Library.Service
{
    public interface IStripePriceService
    {
        Task<Price> GetAsync(string priceId);
        Task<IEnumerable<StripePricePlan>> GetPricingModel();
    }

    public class StripePriceService : IStripePriceService
    {
        private readonly ICacheService _cacheService;
        private readonly PriceService _priceService;
        private readonly string _productId;

        public StripePriceService(
            IOptions<StripeConfig> stripeConfig,
            ICacheService cacheService)
        {
            _cacheService = cacheService;
            _priceService = new PriceService();
            _productId = stripeConfig.Value.ProductId;
        }

        private async Task<IEnumerable<Price>> GetAllAsync()
        {
            return (await _priceService.ListAsync())
                .Where(x => x.Active && x.ProductId == _productId)
                .ToList();
        }

        public async Task<Price> GetAsync(string priceId)
        {
            return await _priceService.GetAsync(priceId);
        }

        public async Task<IEnumerable<StripePricePlan>> GetPricingModel()
        {
            return await _cacheService.GetOrCreateAsync(
                CachedKey.StripePricingModel,
                async () =>
                {

                    const int defaultTokens = 500;
                    const int defaultPrice = 5;
                    
                    return (await GetAllAsync())
                        .Select(x =>
                        {
                            var unitAmount = x.UnitAmountDecimal.HasValue ? (x.UnitAmountDecimal.Value / 100) : 0;
                            var tokens = (int)x.TransformQuantity.DivideBy;
                            var percentageSaving = 0;

                            if (tokens != defaultTokens)
                            {
                                var priceFromDefaultPackage = defaultPrice * ((decimal)tokens / defaultTokens);
                                var diff = (priceFromDefaultPackage - unitAmount) / priceFromDefaultPackage;
                                percentageSaving = (int)Math.Floor(diff * 100);
                            }

                            var beforeDiscount = percentageSaving > 0 ? unitAmount + (unitAmount * percentageSaving / 100) : unitAmount;
                            var amountOff = percentageSaving > 0 ? unitAmount * percentageSaving / 100 : 0;
                            var hours = (double)tokens / defaultTokens;

                            return new StripePricePlan
                            {
                                Id = x.Id,
                                Tokens = tokens,
                                Desc = (hours < 1 ? $"{hours * 60} minutes" : $"{hours} hour{(hours == 1 ? "" : "s")}") + " of usage",
                                PercentageSaving = percentageSaving,
                                UnitAmount = unitAmount,
                                UnitAmountStr = unitAmount.ToCurrencyGbp(),
                                UnitAmountBeforeDiscountStr = beforeDiscount.ToCurrencyGbp(),
                                AmountOffStr = amountOff.ToCurrencyGbp()
                            };
                        })
                        .OrderBy(x => x.Tokens);
                });
        }
    }
}