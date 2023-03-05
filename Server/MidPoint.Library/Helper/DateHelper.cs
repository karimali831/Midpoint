using NodaTime;

namespace MidPoint.Library.Helper
{
    public static class DateHelper
    {
        public static DateTime ConvertUtcToZone(DateTime utc, string zoneId)
        {
            var zone = DateTimeZoneProviders.Tzdb[zoneId];
            var instant = Instant.FromDateTimeUtc(utc);
            var zoned = instant.InZone(zone);
            return zoned.ToDateTimeUnspecified();
        }
    }
}