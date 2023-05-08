using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MidPoint.Library.Helper
{
    public static class Utils
    {
        private static Random random = new Random();

        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public static string IndexedName<T>(string currentName, IDictionary<string, IList<T>> existingNames)
        {


            int iteration = 1;
            string name = currentName;

            while (existingNames.Any(x => x.Key.Contains(name)))
            {
                name = currentName + $"({iteration})";
            }

            return name;
        }

        public static string UcFirst(string str)
        {
            if (string.IsNullOrEmpty(str))
                return string.Empty;

            return char.ToUpper(str[0]) + str[1..].ToLower();
        }
    }
}
