namespace MidPoint.Library.ExceptionHandler.Sentry
{
    public class ExceptionHandlerService : IExceptionHandlerService
    {
        public ExceptionHandlerService()
        {
        }

        public IErrorBuilder ReportException(Exception exception)
        {
            return new SentryErrorBuilder(exception);
        }
    }
}