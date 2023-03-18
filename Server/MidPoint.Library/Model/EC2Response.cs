using System.Net;

namespace MidPoint.Library.Model
{
    public class EC2Response
    {
        public HttpStatusCode Status { get; set; }
        public string Message { get; set; }
        public string HostRoomId { get; set; }
        public  DateTime LaunchTime { get; set; }
    }
}
