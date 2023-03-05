namespace MidPoint.Library.ViewModels
{
    public class StripePricePlan
    {
        public string Id { get; set; }
        public int Tokens { get; set; }
        public string Desc { get; set; }
        public int PercentageSaving { get; set; }
        public decimal UnitAmount { get; set; }
        public string UnitAmountStr { get; set; }
        public string UnitAmountBeforeDiscountStr { get; set; }
        public string AmountOffStr { get; set; }
    }
}