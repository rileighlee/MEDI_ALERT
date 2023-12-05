using MediatR;
using MedicineAppApi.Application.UserCases.Medicine.Queries;
using MedicineAppApi.UserCases.User.Commands;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MedicineAppApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineController : ControllerBase
    {
        private readonly IMediator Mediator;
        public MedicineController(IMediator mediator)
        {
            Mediator = mediator;
        }

        [HttpGet("GetMedicineByCategory/{Id}")]
        public async Task<IActionResult> Login(int Id)
        {
            try
            {
                var query = new GetMedicineByCategory.Query(Id);
                var result = await Mediator.Send(query);
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("GetAllMedicine")]
        public async Task<IActionResult> GetAllMedicine()
        {
            try
            {
                var query = new GetAllMedicine.Query();
                var result = await Mediator.Send(query);
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("GetMedicineById/{Id}")]
        public async Task<IActionResult> GetMedicineById(int Id)
        {
            try
            {
                var query = new GetMedicineById.Query(Id);
                var result = await Mediator.Send(query);
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("SearchMedicine/{Name}")]
        public async Task<IActionResult> SearchMedicine(string Name)
        {
            try
            {
                var query = new SearchMedicine.Query(Name);
                var result = await Mediator.Send(query);
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("CheckInteraction")]
        public async Task<IActionResult> CheckInteraction([FromBody] CheckInteraction.Query query)
        {
            try
            {
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
