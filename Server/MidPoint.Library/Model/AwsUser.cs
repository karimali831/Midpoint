using Amazon.DynamoDBv2.DataModel;

namespace MidPoint.Library.Model
{
    [DynamoDBTable("User-7mgehs52gbeipcctppznxmdqgm-dev")]
    public class AwsUser
    {
        [DynamoDBHashKey]
        public string Id { get; set; }
        public string FullName { get; set; }
        public string ImageUri { get; set; }
        public string FirebaseUid { get; set; }
        public string Email { get; set; }
        public string DisplayName { get; set; }
        public int? PurchasedToken { get; set; }
    }
}