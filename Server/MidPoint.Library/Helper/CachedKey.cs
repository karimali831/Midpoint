using MidPoint.Library.Service;

namespace MidPoint.Library.Helper
{
    public static class CachedKey
    {
        public static string CachePrefix<T>() => typeof(T).Name;
        private static string CacheKey<T>(string key) => $"{CachePrefix<T>()}.{key}";

        // Keys
        public static string StripePricingModel =>
            CacheKey<StripePriceService>(nameof(StripePricingModel));

        public static readonly string StripeProduct =
            CacheKey<StripeProductService>(nameof(StripeProduct));
    }
}