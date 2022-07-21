using Rainway.Api.Api;
using Rainway.Api.Client;
using Microsoft.AspNetCore.Mvc;
using Beatrice.Web.Helper;
using Beatrice.Service;

namespace Beatrice.Web.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class RainwayApiController : ControllerBase
    {
        private readonly IConfigHelper config;
        private readonly Core connection;
        private readonly PeersApi client;

        private readonly Action<string> logCallback;

        public RainwayApiController(IConfigHelper config, Core connection, Action<string> logCallback)
        {
            client = new PeersApi(new Configuration()
            {
                Username = config.RainwayApiPublicKey,
                Password = config.RainwayApiSecretKey
            });

            this.config = config;
            this.connection = connection;
        }

        [HttpGet("start")]
        public async Task<IActionResult> Start()
        {
            await connection.Start(config.RainwayApiPublicKey);
            return RedirectToAction("Index");
        }
    }
}
