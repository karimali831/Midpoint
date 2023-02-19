using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.DynamoDBv2.Model;
using Amazon.Runtime;
using Beatrice.Service.Model;

namespace Beatrice.Service.Service
{
    public interface IAwsUserService
    {
        Task<AwsUser?> GetUser();
        Task UpdateTokens(int tokens, string awsUid);
        Task<AwsUser> GetAsync(string awsUid);
    }
    
    public class AwsUserService : IAwsUserService
    {
        private readonly IDynamoDBContext _context;
        private readonly IAmazonDynamoDB _client;
        private const string TblName = "User-7mgehs52gbeipcctppznxmdqgm-dev";

        public AwsUserService(IDynamoDBContext context, IAmazonDynamoDB client)
        {
            _context = context;
            _client = client;

        }

        public async Task UpdateTokens(int tokens, string awsUid)
        {
            try{
                
                var request = new UpdateItemRequest
                {
                    TableName = TblName,
                    Key = new Dictionary<string,AttributeValue>() { { "id", new AttributeValue { S = awsUid } } },
                    ExpressionAttributeNames = new Dictionary<string,string>()
                    {
                        {"#T", "imageUri"}
                    },
                    ExpressionAttributeValues = new Dictionary<string, AttributeValue>()
                    {
                        {":imageUri", new AttributeValue {N = tokens.ToString() }},
                    },
                    UpdateExpression = "SET #T = #T - :imageUri"
                };
                var response = await _client.UpdateItemAsync(request);
                
            }
            catch (AmazonDynamoDBException e)
            {
                Console.WriteLine(e.Message);
            }
            catch (AmazonServiceException e)
            {
                Console.WriteLine(e.Message);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            
        }

        public async Task<AwsUser> GetAsync(string awsUid)
        {
           
            
            var result = await _client.ScanAsync(new ScanRequest
            {
                TableName = TblName,
                ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                {
                    {":id", new AttributeValue { S = awsUid }},
                },
                FilterExpression = "id = :id"
            });

            var user = result.Items.FirstOrDefault();

            if (user == null)
                throw new Exception("No email");

            var id = user.First(x => x.Key == "id").Value;
            var fullName = user.First(x => x.Key == "fullName").Value;
            var firebaseUid = user.First(x => x.Key == "firebaseUid").Value;
            var email = user.First(x => x.Key == "email").Value;

            var awsUser = new AwsUser
            {
                Id = id.S,
                FullName = fullName.S,
                FirebaseUid = firebaseUid.S,
                Email = email.S
                
            };

            return awsUser;

        }

        public async Task<AwsUser?> GetUser()
        {
            try
            {
                var firebaseId = "dDt7QZiV0TYwyGAxOEF0JUOioBQ2";


                var tableResponse = await _client.ListTablesAsync();

                // var user = await _context.QueryAsync<AwsUser>(firebaseId).GetRemainingAsync();

                // string tableName = _serviceConfiguration.AWS.DynamoDB.TableName;

                
                
                
                var test = _context.LoadAsync<AwsUser>("firebaseUid", firebaseId);


                var conditions = new List<ScanCondition>
                    { new ScanCondition("FirebaseUid", ScanOperator.Equal, firebaseId) };
                var allDocs = await _context.ScanAsync<AwsUser>(conditions).GetRemainingAsync();
                var savedState = allDocs.FirstOrDefault();

                return savedState;

            }
            catch (AmazonDynamoDBException e)
            {
                Console.WriteLine(e.Message);
            }
            catch (AmazonServiceException e)
            {
                Console.WriteLine(e.Message);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            return null;
        }
    }
}