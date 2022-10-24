using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Beatrice.Service.Helper
{
    public static class Utils
    {
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
    }
}
