using Hangfire.Dashboard;

namespace MidPoint.Web.Authorization
{
    public class AuthorizationFilter : IDashboardAuthorizationFilter
    {
        public bool Authorize(DashboardContext context)
        {
            var httpContext = context.GetHttpContext();

            // Allow all authenticated users to see the Dashboard (potentially dangerous).
            // return httpContext.User.Identity?.IsAuthenticated ?? false;
            return true;
        }
    }
}