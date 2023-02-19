namespace Beatrice.Service.Configuration
{
    public class StripeConfig
    {
        public string PublishableKey { get; set; }
        public string SecretKey { get; set; }
        public string WebhookSecret { get; set; }
        public string ProductId { get; set; }
        public string Vat20TaxRateId { get; set; }
    }
}