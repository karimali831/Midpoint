using Beatrice.Service.Model;
using Beatrice.Service.Service;

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

            services.AddScoped<IEC2InstanceService, EC2InstanceService>();

            return services;
        }
    }
}
