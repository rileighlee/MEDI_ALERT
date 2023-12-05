
using MediatR;
using MedicineAppApi.Application.UserCases.User.Commands;
using MedicineAppApi.Application.UserCases.User.Queries;
using MedicineAppApi.UserCases.User.Commands;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static MedicineAppApi.UserCases.User.Commands.Login;

namespace MedicineAppApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMediator Mediator;
        public UserController(IMediator mediator)
        {
            Mediator = mediator;
        }
        /// <summary>
        /// Logs in a user.
        /// </summary>
        /// <param name="command">The details to log in a user.</param>
        /// <returns>The result of the login operation.</returns>
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] Login.Command command)
        {
            try
            {
                var result = await Mediator.Send(command);
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("Registration")]
        public async Task<IActionResult> Registration([FromBody] Registration.Command command)
        {
            try
            {
                var result = await Mediator.Send(command);
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Authorize]
        [HttpGet("GetUserDetail")]
        public async Task<IActionResult> GetUserDetail()
        {
            try
            {
                var query = new GetUserDetail.Query();
                var result = await Mediator.Send(query);
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("ForgotPasswordWithRecoveryPhrase")]
        public async Task<IActionResult> ForgotPasswordWithRecoveryPhrase([FromBody] ForgotPasswordWithRecoveryPhrase.Command command)
        {
            try
            {
                var result = await Mediator.Send(command);
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
