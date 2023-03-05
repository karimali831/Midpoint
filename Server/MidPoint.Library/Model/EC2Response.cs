using System.Net;

namespace MidPoint.Library.Model
{
    public class EC2Response
    {
        public HttpStatusCode Status { get; set; }
        public string Message { get; set; }
    }
}
