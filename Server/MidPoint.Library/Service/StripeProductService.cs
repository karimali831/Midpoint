using Microsoft.Extensions.Options;
using MidPoint.Library.Configuration;
using MidPoint.Library.Helper;
using Stripe;

namespace MidPoint.Library.Service
{
    public interface IStripeProductService
    {
        Task<Product> GetAsync();
    }

    public class StripeProductService : IStripeProductService
    {
        private readonly string _productId;
        private readonly ProductService _productService;
        private readonly ICacheService _cacheService;

        public StripeProductService(
            IOptions<StripeConfig> stripeConfig,
            ICacheService cacheService)
        {
            _cacheService = cacheService;
            _productId = stripeConfig.Value.ProductId;
            _productService = new ProductService();
        }

        public async Task<Product> GetAsync()
        {
            return await _cacheService.GetOrCreateAsync(CachedKey.StripeProduct,
                async () => await _productService.GetAsync(_productId));
        }
    }
}