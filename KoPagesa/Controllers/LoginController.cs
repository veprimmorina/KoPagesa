using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KoPagesa.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class LoginController : ControllerBase
    {
        private readonly JWTAuthenticationManager jwtAuthenticationManager;
        public LoginController(JWTAuthenticationManager jwtAuthenticationManager)
        {
            this.jwtAuthenticationManager = jwtAuthenticationManager;
        }
      

        [HttpGet]
        public IActionResult TestRoute()
        {
            return Ok("Authorized");
        }
    }
}
