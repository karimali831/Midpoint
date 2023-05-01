using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.DynamoDBv2.Model;
using Amazon.Runtime;
using MidPoint.Library.ExceptionHandler;
using MidPoint.Library.Model;

namespace MidPoint.Library.Service
{
    public interface IAwsUserService
    {
        Task<AwsUser?> GetUser();
        Task UpdateAsync<T>(string? field, T? value, string? awsUid);
        Task<AwsUser> GetAsync(string awsUid);
    }

    public class AwsUserService : IAwsUserService
    {
        private readonly IDynamoDBContext _context;
        private readonly IAmazonDynamoDB _client;
        private readonly IExceptionHandlerService _exceptionHandlerService;
        private const string TblName = "User-2v6vouo63zfdna2aln3bca6rga-dev";

        public AwsUserService(
            IDynamoDBContext context,
            IAmazonDynamoDB client,
            IExceptionHandlerService exceptionHandlerService)
        {
            _context = context;
            _client = client;
            _exceptionHandlerService = exceptionHandlerService;
        }

        public async Task UpdateAsync<T>(string? field, T? value, string? awsUid)
        {
            try
            {
                var attributeValue = new AttributeValue();

                if (value is null)
                {
                    attributeValue.NULL = true;
                }
                else if (typeof(T) == typeof(int))
                {
                    attributeValue.N = value.ToString();
                }
                else
                {
                    attributeValue.S = value.ToString();
                }

                var request = new UpdateItemRequest
                {
                    TableName = TblName,
                    Key = new Dictionary<string, AttributeValue>() { { "id", new AttributeValue { S = awsUid } } },
                    ExpressionAttributeNames = new Dictionary<string, string?>()
                    {
                        { "#T", field }
                    },
                    ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                    {
                        { $":{field}", attributeValue },
                    },
                    UpdateExpression = $"SET #T = :{field}",
                    // ReturnValues = ReturnValue.ALL_NEW
                };

                await _client.UpdateItemAsync(request);
            }
            catch (AmazonDynamoDBException e)
            {
                _exceptionHandlerService.ReportException(e).AddTags(new Dictionary<string, string?>
                {
                    { nameof(AmazonDynamoDBException), nameof(UpdateAsync) },
                    { "Field", field },
                    { "Value", value is null ? string.Empty : value.ToString()  },
                    { "AwsUid", awsUid }
                }).Send();
            }
            catch (AmazonServiceException e)
            {
                _exceptionHandlerService.ReportException(e).AddTags(new Dictionary<string, string?>
                {
                    { nameof(AmazonServiceException), nameof(UpdateAsync) },
                    { "Field", field },
                    { "Value", value is null ? string.Empty : value.ToString()  },
                    { "AwsUid", awsUid }
                }).Send();
            }
            catch (Exception e)
            {
                _exceptionHandlerService.ReportException(e).AddTags(new Dictionary<string, string?>
                {
                    { nameof(Exception), nameof(UpdateAsync) },
                    { "Field", field },
                    { "Value", value is null ? string.Empty : value.ToString() },
                    { "AwsUid", awsUid }
                }).Send();
            }
        }

        public async Task<AwsUser> GetAsync(string awsUid)
        {
            var result = await _client.ScanAsync(new ScanRequest
            {
                TableName = TblName,
                ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                {
                    { ":id", new AttributeValue { S = awsUid } },
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
            var purchasedTokens = user.FirstOrDefault(x => x.Key == "purchasedTokens").Value;
            var remainingTokens = user.FirstOrDefault(x => x.Key == "remainingTokens").Value;


            var awsUser = new AwsUser
            {
                Id = id.S,
                FullName = fullName.S,
                FirebaseUid = firebaseUid.S,
                Email = email.S,
                PurchasedTokens = purchasedTokens.N != null ? int.Parse(purchasedTokens.N) : 0,
                RemainingTokens = remainingTokens.N != null ? int.Parse(remainingTokens.N) : 0
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