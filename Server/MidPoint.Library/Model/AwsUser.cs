using Amazon.DynamoDBv2.DataModel;

namespace MidPoint.Library.Model
{
    [DynamoDBTable("User-2v6vouo63zfdna2aln3bca6rga-dev")]
    public class AwsUser
    {
        [DynamoDBHashKey]
        public string Id { get; set; }
        public string FullName { get; set; }
        public string ImageUri { get; set; }
        public string FirebaseUid { get; set; }
        public string Email { get; set; }
        public string DisplayName { get; set; }
        public int? PurchasedTokens { get; set; }
        public int? RemainingTokens { get; set; }
        public string? CreatedInstanceId { get; set; }
    }
}