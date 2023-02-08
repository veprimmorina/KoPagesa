using KoPagesa.Exception;
using KoPagesa.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace KoPagesa.Controllers
{
    public class AuthController : Controller
    {
        public static User user = new User();
        private readonly IConfiguration _config;
        private readonly PerdoruesitContext _context;

        public AuthController(IConfiguration configuration, PerdoruesitContext context)
        {
            _config = configuration;
            _context = context;
        }
        [HttpPost("login/police/{username}/{password}")]
        public async Task<ActionResult<string>> LogIn(string username,string password)
        {
            var perdoruesi = await _context.perdoruesi.Where(x => x.Roli.Equals(2)).FirstOrDefaultAsync();

            if(username!=perdoruesi.Emaili || password!=perdoruesi.Fjalkalimi)
            {
                return BadRequest("not dound");
            }
            string token = createToken(username);
            return Ok(token);
        }
        [HttpPost("login/ipko/{username}/{password}")]
        public async Task<ActionResult<string>> LogInKompania(string username, string password)
        {

            var perdoruesi = await _context.perdoruesi.Where(x => x.Roli.Equals(1)).FirstOrDefaultAsync();

            if (username.Equals(perdoruesi.Emaili) && password.Equals(perdoruesi.Fjalkalimi))
            {
                string token = createToken(username);
                return Ok(token);
            }
            else
            {
                throw new KoPagesaException("Kredencialet gabim!");
            }
            
        }
        [HttpGet("/decode/{jwt}")]
        public async Task<string> DecodeToken(string jwt)
        {
            var tokenString = "Bearer "+jwt;
            var jwtEncodedString = tokenString.Substring(7);
            var token = new JwtSecurityToken(jwtEncodedString: jwtEncodedString);
            return  "" + token.Claims.First(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name").Value;
        }
        [HttpGet("set/{jwt}/{name}")]
        public async Task<ActionResult<Perdoruesi>> SetUser(string jwt)
        {
            var tokenString = "Bearer " + jwt;
            var jwtEncodedString = tokenString.Substring(7);
            var token = new JwtSecurityToken(jwtEncodedString: jwtEncodedString);
            string tok=token.Claims.First(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name").Value;
            var perdoruesi = await _context.perdoruesi.Where(x => x.Emaili.Equals(tok)).FirstOrDefaultAsync();
            perdoruesi.Fjalkalimi = "";
            //if(perdoruesi.roli==2){ return perdoruesi ; } else {return NotFound()}
            return perdoruesi;
        }
        private string createToken(string username)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, username),
            };
            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }
    }
}
