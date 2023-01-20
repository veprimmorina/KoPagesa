using KoPagesa.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using JwtRegisteredClaimNames = Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames;

namespace KoPagesa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class New : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly AuthController authController;
        public New(IConfiguration configuration, AuthController auth)
        {
            _configuration = configuration;
            authController = auth;
        }
       

        [HttpPost("login")]
        public async Task<IActionResult> Login(User user)
        {

            return Ok();
        }
    }
}
