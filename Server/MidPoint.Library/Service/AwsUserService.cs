﻿using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.Model;
using Amazon.Runtime;
using MidPoint.Library.ExceptionHandler;
using MidPoint.Library.Model;

namespace MidPoint.Library.Service
{
    public interface IAwsUserService
    {
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
            catch (Exception exp)
            {
                _exceptionHandlerService.ReportException(exp).AddTags(new Dictionary<string, string?>
                {
                    { nameof(AmazonServiceException), nameof(UpdateAsync) },
                    { "Field", field },
                    { "Value", value is null ? string.Empty : value.ToString()  },
                    { "AwsUid", awsUid }
                }).Send();
            }
        }

        public async Task<AwsUser> GetAsync(string awsUid)
        {
            try
            {
                var request = new GetItemRequest
                {
                    TableName = TblName,
                    Key = new Dictionary<string, AttributeValue>() { 
                        { "id", new AttributeValue { S = awsUid } 
                    } },
                };

                var response = await _client.GetItemAsync(request);

                var user = response.Item;
 

                var id = user.First(x => x.Key == "id").Value;
                var fullName = user.First(x => x.Key == "fullName").Value;
                var firebaseUid = user.First(x => x.Key == "firebaseUid").Value;
                var email = user.First(x => x.Key == "email").Value;
                var purchasedTokens = user.First(x => x.Key == "purchasedTokens").Value;
                var remainingTokens = user.First(x => x.Key == "remainingTokens").Value;
                var totalStreams = user.First(x => x.Key == "totalStreams").Value;
                var totalSeconds = user.First(x => x.Key == "totalSeconds").Value;
                var lastStream = user.FirstOrDefault(x => x.Key == "lastStream").Value;
                var createdInstanceId = user.FirstOrDefault(x => x.Key == "createdInstanceId").Value;

                return new AwsUser
                {
                    Id = id.S,
                    FullName = fullName.S,
                    FirebaseUid = firebaseUid.S,
                    Email = email.S,
                    PurchasedTokens = int.Parse(purchasedTokens.N ?? purchasedTokens.S),
                    RemainingTokens = int.Parse(remainingTokens.N ?? remainingTokens.S),
                    TotalStreams = int.Parse(totalStreams.N ?? totalStreams.S),
                    TotalSeconds = int.Parse(totalSeconds.N ?? totalSeconds.S),
                    CreatedInstanceId = createdInstanceId?.S,
                    LastStream = lastStream?.S
                };
            }
            catch (Exception exp)
            {
                _exceptionHandlerService.ReportException(exp).AddTags(new Dictionary<string, string?>
                {
                    { nameof(Exception), nameof(GetAsync) },
                    { "AwsUid", awsUid }
                }).Send();

                throw;
            }
            
        }
    }
}