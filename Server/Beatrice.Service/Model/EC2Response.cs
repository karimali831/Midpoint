using System.Net;

namespace Beatrice.Service.Model
{
    public class EC2Response
    {
        public HttpStatusCode Status { get; set; }
        public string Message { get; set; }
    }
}
