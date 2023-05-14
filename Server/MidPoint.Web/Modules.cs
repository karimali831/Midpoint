using MidPoint.Library.ExceptionHandler;
using MidPoint.Library.ExceptionHandler.Sentry;
using MidPoint.Library.Model;
using MidPoint.Library.Service;
using MidPoint.Library.Helper;
using MidPoint.Library.Repository;

namespace MidPoint.Web
{
    public static class StartupExtensions
    {
        public static IServiceCollection Modules(this IServiceCollection services)
        {
            services.AddSingleton<ICacheService, CacheService>();
            services.AddSingleton<IConfigHelper, ConfigHelper>();
            services.AddSingleton<IExceptionHandlerService, ExceptionHandlerService>();

            // web rtc
            services.AddSingleton<IDictionary<string, UserConnection>>(
                _ => new Dictionary<string, UserConnection>()
            );

            services.AddSingleton<IStripeProductService, StripeProductService>();
            services.AddScoped<IAwsUserService, AwsUserService>();
            services.AddScoped<ITokenJobService, TokenJobService>();
            services.AddScoped<IStripePaymentService, StripePaymentService>();
            services.AddScoped<IStripePriceService, StripePriceService>();
            services.AddScoped<IStripeCustomerService, StripeCustomerService>();
            services.AddScoped<IStripePaymentMethodService, StripePaymentMethodService>();
            
            services.AddScoped<ICouponService, CouponService>();
            services.AddScoped<IBillingCustomerService, BillingCustomerService>();
            services.AddScoped<IPromotionService, PromotionService>();
            services.AddScoped<IPaymentService, PaymentService>();
            services.AddScoped<IInstanceService, InstanceService>();
            
            // repositories
            services.AddScoped<ITokenLogRepository, TokenLogRepository>();
            services.AddScoped<IPaymentRepository, PaymentRepository>();
            services.AddScoped<IInstanceRepository, InstanceRepository>();
            services.AddScoped<IBillingCustomerRepository, BillingCustomerRepository>();
            services.AddScoped<IPromotionRepository, PromotionRepository>();
            services.AddScoped<ICouponRepository, CouponRepository>();

            return services;
        }
    }
}
