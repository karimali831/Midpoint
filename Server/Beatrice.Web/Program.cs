using MidPoint.Library.Helper;

namespace Beatrice.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    // var app = webBuilder.Build();
                    // var environment = app.Services.GetRequiredService<IWebHostEnvironment>();
                    // var config = app.Services.GetRequiredService<IConfigHelper>();
                 
                    webBuilder.UseStartup<Startup>();
                    webBuilder.UseSentry();
                });
    }
}
