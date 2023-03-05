namespace MidPoint.Library.ExceptionHandler
{
    public interface IExceptionHandlerService
    {
        IErrorBuilder ReportException(Exception exception);
    }
}