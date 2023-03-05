using Microsoft.Extensions.Configuration;

namespace MidPoint.Library.Helper
{
    public interface IConfigHelper
    {
        IConfigurationSection GetConfigurationSection(string key);
        string SqlConnectionString();
        string SentryDsn();
        string SentryEnv();
    }

    public class ConfigHelper : IConfigHelper
    {
        private readonly IConfiguration _configuration;

        public ConfigHelper(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        
        public IConfigurationSection GetConfigurationSection(string key)
        {
            return _configuration.GetSection(key);
        }

        public string SqlConnectionString() => _configuration.GetConnectionString("DefaultConnection");
        public string SentryDsn() => _configuration["Configuration:SentryDsn"];
        public string SentryEnv() => _configuration["Configuration:SentryEnv"];
    }
}