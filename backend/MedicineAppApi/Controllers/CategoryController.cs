using MediatR;
using MedicineAppApi.Application.UserCases.Category.Queries;
using MedicineAppApi.Application.UserCases.Medicine.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MedicineAppApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IMediator Mediator;
        public CategoryController(IMediator mediator)
        {
            Mediator = mediator;
        }

        [HttpGet("GetAllCategoriesWithMedicines")]
        public async Task<IActionResult> GetAllCategoriesWithMedicines()
        {
            try
            {
                var query = new GetAllCategoriesWithMedicines.Query();
                var result = await Mediator.Send(query);
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
