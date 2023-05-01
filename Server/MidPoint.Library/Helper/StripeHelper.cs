using System.Globalization;

namespace MidPoint.Library.Helper
{

    public static class StripeHelper
    {
        public static decimal ConvertAmount(this long? value)
            => value?.ConvertAmount() ?? 0;

        public static decimal ConvertAmount(this long value)
            => (decimal) value / 100;
        
        public static string ToCurrencyGbp(this long value)
            => value.ConvertAmount().ToCurrencyGbp();
        
        public static string ToCurrencyGbp(this decimal value, string format = "C")
            => value.ToString(format, CultureInfo.CreateSpecificCulture("en-GB"));
    }
}