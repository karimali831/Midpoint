namespace MidPoint.Library.Model.Db
{
    public class BillingCustomer
    {
        public string CustomerId { get; set; }
        public string AwsUid { get; set; }
        public bool Active { get; set; } = true;
    }
}