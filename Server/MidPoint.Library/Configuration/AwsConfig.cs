using Amazon;

namespace MidPoint.Library.Configuration
{
    public class AwsConfig
    {
        public string AccessKey { get; set; }
        public string SecretAccessKey { get; set; }
        public string Region { get; set; }
        public string Profile { get; set; }
    }
}