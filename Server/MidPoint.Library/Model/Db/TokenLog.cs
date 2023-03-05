namespace MidPoint.Library.Model.Db
{
    public class TokenLog
    {
        public Guid Id { get; set; }
        public string Ec2InstanceId { get; set; }
        public string AwsUid { get; set; }
        public int PreTokens { get; set; }
        public int PostTokens { get; set; }
    }
}