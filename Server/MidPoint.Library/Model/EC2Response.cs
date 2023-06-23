using MidPoint.Library.Enum;
using System.Net;

namespace MidPoint.Library.Model
{
    public class EC2Response
    {
        public HttpStatusCode StatusCode { get; set; }
        public Ec2InstanceStatus State { get;  set; }
        public string? Message { get; set; }
        public string HostRoomId { get; set; }
        public DateTime LaunchTime { get; set; }
    }
}
