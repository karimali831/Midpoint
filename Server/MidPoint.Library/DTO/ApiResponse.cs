namespace MidPoint.Library.DTO
{
    
    public class ApiResponse<T>
    {
        public bool Success { get; set; }
        public T Data { get; set; }
        public string ErrorMsg { get; set; }
    }
}