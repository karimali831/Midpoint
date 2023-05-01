using Microsoft.Extensions.Hosting;
using MidPoint.Library.Model.Db;
using MidPoint.Library.Repository;
using Newtonsoft.Json;

namespace MidPoint.Library.Service
{
    public interface ITokenJobService
    {
        Task UpdateAsync();
    }

    public class TokenJobService : ITokenJobService
    {
        private readonly IAwsUserService _awsUserService;
        private readonly IEc2InstanceService _ec2InstanceService;
        private readonly ITokenLogRepository _tokenLogRepository;
        private readonly IHostEnvironment _hostEnvironment;
        private readonly IPaymentService _paymentService;
        
        public TokenJobService(
            IAwsUserService awsUserService,
            IEc2InstanceService ec2InstanceService,
            ITokenLogRepository tokenLogRepository, 
            IHostEnvironment hostEnvironment, 
            IPaymentService paymentService)
        {
            _awsUserService = awsUserService;
            _ec2InstanceService = ec2InstanceService;
            _tokenLogRepository = tokenLogRepository;
            _hostEnvironment = hostEnvironment;
            _paymentService = paymentService;
        }
        
        public async Task UpdateAsync()
        {
            var runningInstances = await _ec2InstanceService.GetAllRunningAsync();
            var terminateInstanceIds = new List<(string InstanceId, string AwsUid)>();

            // Deduct 125 tokens every 15 minutes  
            // works out deducting 8.34 tokens every minute used
            const int leeWayMinutes = 0;
            const int defaultTokens = 500;
            const double deductTokens = (double)defaultTokens / 60;

            static int ConvertToInt(double value) => Convert.ToInt32(Math.Floor(value));

            // local environment otherwise .UtcNow on remote env.
            //var nowDate = _hostEnvironment.EnvironmentName == "Development"
            //    ? DateHelper.ConvertUtcToZone(DateTime.UtcNow, "Europe/London")
            //    : DateTime.UtcNow;


            foreach (var instance in runningInstances)
            {
                var utcNowDate = DateTime.UtcNow;
                var launchDate = instance.LaunchTime.ToUniversalTime();
                var timeUsed = utcNowDate - launchDate;

                if (timeUsed.TotalMinutes < leeWayMinutes)
                    return;

                var awsUid = instance.Tags.First(x => x.Key == "AwsUid").Value;
                var user = await _awsUserService.GetAsync(awsUid);
                var preTokens = user.RemainingTokens ?? 0;
                var purchasedTokens = await _paymentService.GetTotalPurchasedTokens(awsUid);
                var tokensByMinutesUsed = deductTokens * (timeUsed.TotalMinutes - leeWayMinutes);
                var tokens = ConvertToInt(purchasedTokens - tokensByMinutesUsed);
                var secondsUsed = ConvertToInt(timeUsed.TotalSeconds - (leeWayMinutes * 60));
                var deducted = preTokens - tokens;

                if (tokens <= 0)
                    terminateInstanceIds.Add((instance.InstanceId, awsUid));

                // Can occur if topping up tokens
                if (deducted <= 0)
                    return;

                var infoObj = new
                {
                    _hostEnvironment.EnvironmentName,
                    utcNowDate,
                    launchDate,
                    timeUsed,
                    timeUsed.TotalMinutes,
                    leeWayMinutes,
                    purchasedTokens,
                    tokensByMinutesUsed,

                };

                await _tokenLogRepository.AddAsync(new TokenLog
                {
                    Id = Guid.NewGuid(),
                    Ec2InstanceId = instance.InstanceId,
                    AwsUid = awsUid,
                    PreTokens = preTokens,
                    PostTokens = tokens,
                    SecondsUsed = secondsUsed,
                    Deducted = deducted,
                    Info = JsonConvert.SerializeObject(infoObj),
                    Created = utcNowDate
                });

                await _awsUserService.UpdateAsync("remainingTokens", tokens < 0 ? 0 : tokens, awsUid);
            }

            if (terminateInstanceIds.Any())
            {
                await _ec2InstanceService.TerminateAsync(terminateInstanceIds);
            }
        }
    }
}