using MidPoint.Library.Enum;

namespace MidPoint.Library.Model.Db
{
    public class Instance
    {
        public string Id { get; set; }
        public string AwsUid { get; set; }
        public Ec2InstanceStatus Status { get; set; }
        public DateTime LaunchedDate { get; set; }
        public DateTime? TerminatedDate { get; set; }
    }

    public class InstanceLog
    {
        public DateTime LaunchedDate { get; set; }
        public DateTime? TerminatedDate { get; set; }
        public Ec2InstanceStatus Status { get; set; }
        public int SecondsUsed { get; set; }
        public int MinutesUsed { get; set; }
    }
}