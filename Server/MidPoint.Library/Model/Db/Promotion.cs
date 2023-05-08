namespace MidPoint.Library.Model.Db
{
    public class Promotion
    {
        public Guid Id { get; set; }
        public string CreatorCustomerId { get; set; }
        public string? ReceiverCustomerId { get; set; }
        public int CouponId { get; set; }
        public string Code { get; set; }
        public DateTime Expires { get; set; }
        public DateTime? ReceiverClaimedDate { get; set; }
        public DateTime? CreatorClaimedDate { get; set; }
        public bool Active { get; set; }
    }
}
