using Blazor.Extensions.WebUSB;
using Microsoft.Extensions.DependencyInjection;

namespace Beatrice.Service
{
    public static class StartupExtensions
    {
        public static IServiceCollection Modules(this IServiceCollection services)
        {
            // Out of the box it's singleton but crashes ???
            services.AddScoped<IUSB, USB>();

            return services;
        }
    }
}
