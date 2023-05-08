using MidPoint.Library.Helper;

namespace MidPoint.Library.ViewModels
{
    public class PromotionViewModel
    {
        public string CouponName { get; set; }
        public string CreatorCustomerId { get; set; }
        public string? ReceiverCustomerId { get; set; }
        public string Code { get; set; }
        public DateTime Expires { get; set; }
        public DateTime? ReceiverClaimedDate { get; set; }
        public DateTime? CreatorClaimedDate { get; set; }
        public bool Active { get; set; }
        [DbIgnore]
        public string ExpiresStr { get; set; }
        [DbIgnore]
        public string? ReceiverClaimedDateStr { get; set; }
        [DbIgnore]
        public string? CreatorClaimedDateStr { get; set; }
    }
}

