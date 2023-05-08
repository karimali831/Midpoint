namespace MidPoint.Library.Model.Db
{
    public class Payment
    {
        public string Id { get; set; }
        public string CustomerId { get; set; }
        public int PurchasedTokens { get; set; }
        public int RemainingTokens { get; set; }
        public long Amount { get; set; }
        public string Status { get; set; }
        public string CardBrand { get; set; }
        public string CardLast4 { get; set; }
        public DateTime Created { get; set; }
    }
}