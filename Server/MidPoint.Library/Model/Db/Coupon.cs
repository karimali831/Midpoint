namespace MidPoint.Library.Model.Db
{
    public class Coupon
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? PercentOff { get; set; }
        public double? FixedAmountOff { get; set; }
    }
}