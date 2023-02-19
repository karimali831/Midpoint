using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.Runtime;
using Beatrice.Service.Model;

namespace Beatrice.Service.Service
{
    public interface IAwsUserService
    {
        Task<AwsUser?> GetUser();
    }
    
    public class AwsUserService : IAwsUserService
    {
        private readonly IDynamoDBContext _context;
        private readonly IAmazonDynamoDB _client;
        
        public AwsUserService(IDynamoDBContext context, IAmazonDynamoDB client)
        {
            _context = context;
            _client = client;

        }

        public async Task<AwsUser?> GetUser()
        {
            try
            {
                var firebaseId = "dDt7QZiV0TYwyGAxOEF0JUOioBQ2";

                var tableResponse = await _client.ListTablesAsync();

                // var user = await _context.QueryAsync<AwsUser>(firebaseId).GetRemainingAsync();

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