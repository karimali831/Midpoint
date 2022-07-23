using Sentry;
using System.Net;
using System.Text.Json;

namespace Beatrice.Web.ErrorHandler
{
    public class ErrorHandlerMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IHub sentryHub;

        public ErrorHandlerMiddleware(RequestDelegate next, IHub sentryHub)
        {
            _next = next;
            this.sentryHub = sentryHub;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception error)
            {
                var response = context.Response;
                response.ContentType = "application/json";
                response.StatusCode = error switch
                {
                    AppException => (int)HttpStatusCode.BadRequest,// custom application error
                    KeyNotFoundException => (int)HttpStatusCode.NotFound,// not found error
                    _ => (int)HttpStatusCode.InternalServerError,// unhandled error
                };
                var result = JsonSerializer.Serialize(new { message = error.Message });
                await response.WriteAsync(result);

                // Report to Sentry
                sentryHub.CaptureException(error);
            }
        }
    }
}
