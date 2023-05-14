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
        public int PurchasedTokens { get; set; }
        public int RemainingTokens { get; set; }
        public int TotalStreams { get; set; }
        public int TotalSeconds { get; set; }
        public string? CreatedInstanceId { get; set; }
        public string? LastStream { get; set; }

    }
}

// N : all number types
// S : all string types
// B : binary type MemoryStream, byte[]
// N : bool (0 false, 1 true)
// BS : binary set)
// SS : string set type
// NS : number set type
// S : DateTime (ISO-8601 formatted strings)

// supported datetypes
//bool

//byte

//char

//DateTime

//decimal

//double

//float

//Int16

//Int32

//Int64

//SByte

//string

//UInt16

//UInt32

//UInt64