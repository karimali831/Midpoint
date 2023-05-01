namespace MidPoint.Library.Model.Db
{
    public class Payment
    {
        public string Id { get; set; }
        public string CustomerId { get; set; }
        public string AwsUid { get; set; }
        public int Tokens { get; set; }
        public long Amount { get; set; }
        public string Status { get; set; }
        public bool Active { get; set; } = true;
    }
}