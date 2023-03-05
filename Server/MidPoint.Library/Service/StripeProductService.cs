using Microsoft.Extensions.Options;
using MidPoint.Library.Configuration;
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
        
        public StripeProductService(IOptions<StripeConfig> stripeConfig)
        {
            _productId = stripeConfig.Value.ProductId;
            _productService = new ProductService();
        }

        public async Task<Product> GetAsync()
        {
            return await _productService.GetAsync(_productId);
        }
    }
}