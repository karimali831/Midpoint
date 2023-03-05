using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using MidPoint.Library.ExceptionHandler;
using Newtonsoft.Json;

namespace Beatrice.Web.Middleware
{
public static class ExceptionMiddleware
    {
        public static void ConfigureExceptionHandler(this IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseStatusCodePages(async statusCodeContext =>
            {
                var code = statusCodeContext.HttpContext.Response.StatusCode;

                // handle internal server error below
                if (code != 500)
                {
                    statusCodeContext.HttpContext.Response.Redirect($"/error/{code}");
                }

                await Task.CompletedTask;
            });
            
            app.UseExceptionHandler(errorHandler =>
            {
                errorHandler.Run(async context =>
                {
                    var exception = context.Features.Get<IExceptionHandlerFeature>();

                    if (exception != null)
                    {
                        var exceptionHandlerService = app.ApplicationServices.GetService<IExceptionHandlerService>(); 
                        exceptionHandlerService?.ReportException(exception.Error).Send();

                        if (env.IsDevelopment())
                        {
                            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                            context.Response.ContentType = "application/json";
                            
                            var errorMessage = new
                            {
                                error = exception.Error.Message,
                                innerMessage = exception.Error.InnerException?.Message,
                                stack = exception.Error.StackTrace
                            };
                            
                            await context.Response.WriteAsync(JsonConvert.SerializeObject(errorMessage));
                            return;
                        }

                        context.Response.Redirect("/Error");
                    }
                });
            });
        }
    }
}