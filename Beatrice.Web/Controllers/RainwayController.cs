using Beatrice.Service;
using Beatrice.Web.Helper;
using Microsoft.AspNetCore.Mvc;

namespace Beatrice.Web.Controllers
{
    public class RainwayController : Controller
    {
        private readonly Core connection;
        private readonly IConfigHelper config;
        private readonly Action<string> logCallback;

        public RainwayController(IConfigHelper config, Core connection, Action<string> logCallback)
        {
            this.config = config;
            this.connection = connection;
            this.logCallback = logCallback;
        }

        public IActionResult Index()
        {
            return View(connection);
        }

        public async Task<IActionResult> Start()
        {
            await connection.Start(config.RainwayApiPublicKey);
            return RedirectToAction("Index");
        }

        public IActionResult Stop()
        {
            connection.Stop();
            return RedirectToAction("Index");
        }
    }
}