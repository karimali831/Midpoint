using Beatrice.Service.Model;

namespace Beatrice.Web
{
    public static class StartupExtensions
    {
        public static IServiceCollection Modules(this IServiceCollection services)
        {


            // web rtc
            services.AddSingleton<IDictionary<string, UserConnection>>(
                opts => new Dictionary<string, UserConnection>()
            );

            return services;
        }
    }
}
