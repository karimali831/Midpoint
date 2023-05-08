using Microsoft.AspNetCore.Mvc;
using MidPoint.Library.DTO;
using MidPoint.Library.Model.Db;
using MidPoint.Library.Service;
using MidPoint.Library.ViewModels;

namespace MidPoint.Web.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromotionController : ControllerBase
    {
        private readonly IPromotionService _promotionService;
        
        public PromotionController(IPromotionService promotionService)
        {
            _promotionService = promotionService;
        }

        [HttpGet("Get/{awsUid}")]
        public async Task<IEnumerable<PromotionViewModel>> GetPromotions(string awsUid)
        {
            return await _promotionService.GetPromotionsAsync(awsUid);
        }
    }
}
