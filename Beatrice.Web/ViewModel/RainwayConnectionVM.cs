using Beatrice.Service;

namespace Beatrice.Web.ViewModel
{
    public class RainwayConnectionVM
    {
        public Core Connection { get; set; }
        public IList<string> Log { get; set; } = new List<string>();
    }
}
