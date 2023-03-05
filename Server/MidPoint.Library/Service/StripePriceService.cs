using Microsoft.Extensions.Options;
using MidPoint.Library.Configuration;
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
        private readonly PriceService _priceService;
        private readonly string _productId;
        
        public StripePriceService(IOptions<StripeConfig> stripeConfig)
        {
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
            return (await GetAllAsync())
                .Select(x =>
                {
                    var unitAmount = x.UnitAmountDecimal.HasValue ? (x.UnitAmountDecimal.Value / 100) : 0;
                    var tokens = (int)x.TransformQuantity.DivideBy;

                    var defaultTokens = 500;
                    var defaultPrice = 5;
        
                    
                    var percentageSaving = 0;
                    if (tokens != defaultTokens)
                    {
                        var priceFromDefaultPackage = defaultPrice * ((decimal)tokens / defaultTokens);
                        var diff = (priceFromDefaultPackage - unitAmount) / priceFromDefaultPackage;
                        percentageSaving = (int)Math.Floor(diff * 100);
                    }
                    
                    var beforeDiscount = unitAmount + unitAmount * percentageSaving / 100;
                    var amountOff = percentageSaving != 0 ? unitAmount * percentageSaving / 100 : 0;
                    
                    return new StripePricePlan
                    {
                        Id = x.Id,
                        Tokens = tokens,
                        Desc = x.Nickname,
                        // Desc = $"{(double)tokens / defaultTokens} hours of usage",
                        PercentageSaving = percentageSaving,
                        UnitAmount = unitAmount,
                        UnitAmountStr = $"{unitAmount:C}",
                        UnitAmountBeforeDiscountStr = $"{beforeDiscount:C}",
                        AmountOffStr = $"-{amountOff:C}"
                    };
                }).OrderBy(x => x.Tokens);
        }
    }
}