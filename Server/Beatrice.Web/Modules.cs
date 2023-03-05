using MidPoint.Library.ExceptionHandler;
using MidPoint.Library.ExceptionHandler.Sentry;
using MidPoint.Library.Model;
using MidPoint.Library.Service;
using MidPoint.Library.Helper;
using MidPoint.Library.Repository;

namespace Beatrice.Web
{
    public static class StartupExtensions
    {
        public static IServiceCollection Modules(this IServiceCollection services)
        {
            services.AddSingleton<IConfigHelper, ConfigHelper>();
            services.AddSingleton<ITokenJobService, TokenJobService>();
            services.AddSingleton<IExceptionHandlerService, ExceptionHandlerService>();

            // web rtc
            services.AddSingleton<IDictionary<string, UserConnection>>(
                opts => new Dictionary<string, UserConnection>()
            );

            services.AddSingleton<IStripeProductService, StripeProductService>();
            services.AddSingleton<IAwsUserService, AwsUserService>();
            services.AddScoped<IStripePaymentService, StripePaymentService>();
            services.AddScoped<IStripePriceService, StripePriceService>();
            services.AddScoped<IStripeCustomerService, StripeCustomerService>();
            
            // repositories
            services.AddSingleton<ITokenLogRepository, TokenLogRepository>();

            return services;
        }
    }
}
