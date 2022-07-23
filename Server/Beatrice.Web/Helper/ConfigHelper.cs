namespace Beatrice.Web.Helper
{
    public interface IConfigHelper
    {
        string RainwayApiPublicKey { get; }
        string RainwayApiSecretKey { get; }
        string SentryUrl { get; }
        IConfigurationSection GetConfigurationSection(string key);
    }

    public class ConfigHelper : IConfigHelper
    {
        private readonly IConfiguration _configuration;

        public ConfigHelper(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string RainwayApiPublicKey => _configuration["Configuration:RainwayApiPublicKey"];
        public string RainwayApiSecretKey => _configuration["Configuration:RainwayApiSecretKey"];
        public string SentryUrl => _configuration["Configuration:SentryUrl"];

        public IConfigurationSection GetConfigurationSection(string key)
        {
            return _configuration.GetSection(key);
        }
    }
}
