using Amazon;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.EC2;
using Amazon.Runtime;
using MidPoint.Library.Configuration;
using MidPoint.Library.Service;
using Beatrice.Web.Controllers.Api;
using Beatrice.Web.Middleware;
using Hangfire;
using Hangfire.SqlServer;
using Microsoft.AspNet.SignalR;
using Stripe;

namespace Beatrice.Web
{
    public class Startup
    {
        private IConfigurationRoot Configuration { get; set; }

        public Startup(IWebHostEnvironment env)
        {
            GlobalHost.Configuration.ConnectionTimeout = TimeSpan.FromSeconds(20);
            GlobalHost.Configuration.DisconnectTimeout = TimeSpan.FromSeconds(30);
            GlobalHost.Configuration.KeepAlive = null;

            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile($"appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.Development.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.Production.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IConfiguration>(Configuration);
            
            // Dependency injection
            services.Modules();
            
            // Stripe
            var stripeConfig = Configuration.GetSection("Stripe");
            StripeConfiguration.ApiKey = stripeConfig["SecretKey"];
            services.Configure<StripeConfig>(stripeConfig);
            
            // Aws
            var awsConfig = Configuration.GetSection("Aws");
            services.Configure<AwsConfig>(awsConfig);
            var credentials = new BasicAWSCredentials(awsConfig["AccessKey"], awsConfig["SecretAccessKey"]);
            var config = new AmazonDynamoDBConfig()
            {
                RegionEndpoint = RegionEndpoint.EUWest2
            };
            
            var client = new AmazonDynamoDBClient(credentials, config);
            services.AddSingleton<IAmazonDynamoDB>(client);
            services.AddSingleton<IDynamoDBContext, DynamoDBContext>();
            
            // Hangfire
            services.AddHangfire(configuration => configuration
                .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
                .UseSimpleAssemblyNameTypeSerializer()
                .UseRecommendedSerializerSettings()
                .UseSqlServerStorage(Configuration.GetConnectionString("DefaultConnection"), new SqlServerStorageOptions
                {
                    CommandBatchMaxTimeout = TimeSpan.FromMinutes(5),
                    SlidingInvisibilityTimeout = TimeSpan.FromMinutes(5),
                    QueuePollInterval = TimeSpan.Zero,
                    UseRecommendedIsolationLevel = true,
                    DisableGlobalLocks = true
                }));
            services.AddHangfireServer();

            // Mini profiler
            //services.AddMiniProfiler();

            // 
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddSignalR(o =>
            {
                o.EnableDetailedErrors = true;
            });

            // Blazor
            services.AddServerSideBlazor();

            services.AddControllersWithViews();

            services.AddRazorPages();

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.WithOrigins(
                        "*",
                        "http://localhost:3000",
                        "https://localhost:3000",
                        "https://karimali-001-site5.itempurl.com",
                        "https://beattrice.netlify.app"
                    )
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
                });
            });

            // Add functionality to inject IOptions<T>
            services.AddOptions();
            services.AddMvc();
            services.AddSingleton<IEC2InstanceService, EC2InstanceService>();

            var other = this.Configuration.GetAWSOptions("other");

            services.AddAWSService<IAmazonEC2>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IBackgroundJobClient backgroundJobs, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            
            app.ConfigureExceptionHandler(env);

            //app.UseMiniProfiler();
            
            // Hangfire
            app.UseHangfireDashboard("/hangfire");
            
            backgroundJobs.Enqueue(() => Console.WriteLine("Hello world from Hangfire!"));
            
            RecurringJob.AddOrUpdate(
                
                () => app.ApplicationServices.GetRequiredService<ITokenJobService>().UpdateAsync(),
                "*/30 * * * *"
            );


            app.UseHttpsRedirection();

            app.UseStaticFiles();

            app.UseRouting();

            app.UseSentryTracing();

            app.UseCors();

            app.UseAuthorization();
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<WebRTCHub>("/webrtchub");
                endpoints.MapRazorPages();

                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=index}/{id?}"
                );

                endpoints.MapBlazorHub();
                endpoints.MapHangfireDashboard();
            });

        }
    }
}
