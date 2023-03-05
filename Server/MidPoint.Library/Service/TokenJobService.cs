using Hangfire;
using MidPoint.Library.Helper;
using MidPoint.Library.Model.Db;
using MidPoint.Library.Repository;

namespace MidPoint.Library.Service
{
    public interface ITokenJobService
    {
        Task UpdateAsync();
    }

    public class TokenJobService : ITokenJobService
    {
        private readonly IAwsUserService _awsUserService;
        private readonly IEC2InstanceService _ec2InstanceService;
        private readonly ITokenLogRepository _tokenLogRepository;
        
        public TokenJobService(
            IAwsUserService awsUserService, 
            IEC2InstanceService ec2InstanceService, 
            ITokenLogRepository tokenLogRepository)
        {
            _awsUserService = awsUserService;
            _ec2InstanceService = ec2InstanceService;
            _tokenLogRepository = tokenLogRepository;
        }
        
        [JobDisplayName("Deduct tokens every 30 minutes job")]
        public async Task UpdateAsync()
        {
            var runningInstances = await _ec2InstanceService.GetRunningAsync();
            var terminateInstanceIds = new List<(string InstanceId, string AwsUid)>();

            const int deductInterval = 30;
            const int deductTokens = 250;

            foreach (var instance in runningInstances)
            {
                var awsUid = instance.Tags.First(x => x.Key == "AwsUid").Value;
                var user = await _awsUserService.GetAsync(awsUid);
                var purchasedTokens = user.PurchasedToken ?? 0;
                var dateNow = DateHelper.ConvertUtcToZone(DateTime.UtcNow, "Europe/London");
                var minutesUsed = (dateNow - instance.LaunchTime).TotalMinutes;
                var calc = purchasedTokens - minutesUsed / deductInterval * deductTokens;
                var tokens = Convert.ToInt32(Math.Floor(calc));

                if (tokens <= 0)
                    terminateInstanceIds.Add((instance.InstanceId, awsUid));
                
                await _tokenLogRepository.AddAsync(new TokenLog
                {
                    Id = Guid.NewGuid(),
                    Ec2InstanceId = instance.InstanceId,
                    AwsUid = awsUid,
                    PreTokens = purchasedTokens,
                    PostTokens = tokens
                });
                
                // await _awsUserService.UpdateAsync("purchasedTokens", tokens, awsUid);
            }

            if (terminateInstanceIds.Any())
            {
                await _ec2InstanceService.TerminateAsync(terminateInstanceIds);
            }
        } 
    }
}