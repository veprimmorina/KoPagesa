using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using KoPagesa;
using KoPagesa.Models;
using static System.Net.Mime.MediaTypeNames;
using System.Net.Mail;
using System.Net;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using System.Text;
using System.Reflection.PortableExecutable;
using Newtonsoft.Json.Linq;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Reflection.Metadata;
using KoPagesa.Pattern;
using KoPagesa.Exception;
using KoPagesa.Services;
using System.Drawing.Printing;
using System.Drawing;
using System.Xml.Linq;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using System.IO;
using PointF = Syncfusion.Drawing.PointF;
using RectangleF = Syncfusion.Drawing.RectangleF;
using Microsoft.IdentityModel.Tokens;
using static Org.BouncyCastle.Math.EC.ECCurve;
using System.IdentityModel.Tokens.Jwt;

namespace KoPagesa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PerdoruesiController : ControllerBase,IPerdoruesi
    {
        private readonly PerdoruesitContext _context;
        private PerdoruesiFactory _perdoruesiFactory;
        private readonly IConfiguration _config;

        public PerdoruesiController(PerdoruesitContext context, PerdoruesiFactory perdoruesiFactory, IConfiguration config)
        {
            _context = context;
            _perdoruesiFactory = perdoruesiFactory;
            _config = config;
        }

        // GET: api/Perdoruesi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Perdoruesi>>> Getperdoruesi()
        {
            
            return await _context.perdoruesi.ToListAsync();
        }

        // GET: api/Perdoruesi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Perdoruesi>> GetPerdoruesi(int id)
        {
            var perdoruesi = await _context.perdoruesi.FindAsync(id);

            if (perdoruesi == null)
            {
                return NotFound();
            }

            return perdoruesi;
        }

        // PUT: api/Perdoruesi/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPerdoruesi(int id, Perdoruesi perdoruesi)
        {
            if (id != perdoruesi.PerdoruesiId)
            {
                return BadRequest();
            }

            _context.Entry(perdoruesi).
                State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PerdoruesiExists(id))
                {
                    return NotFound();
                }
                else
                {
                
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Perdoruesi
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Perdoruesi>> PostPerdoruesi(Perdoruesi perdoruesi)
        {
            var p=await _perdoruesiFactory.createPerdorues(perdoruesi);
            _context.perdoruesi.Add(p);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPerdoruesi", new { id = perdoruesi.PerdoruesiId }, perdoruesi);
        }

        // DELETE: api/Perdoruesi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePerdoruesi(int id)
        {
            var perdoruesi = await _context.perdoruesi.FindAsync(id);
            if (perdoruesi == null)
            {
                return NotFound();
            }

            _context.perdoruesi.Remove(perdoruesi);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("polici/{email}")]
        public async Task<ActionResult<Perdoruesi>> GjejPolicin(string email)
        {
            return await _context.perdoruesi.Where(x=>x.Emaili.Equals(email)).FirstOrDefaultAsync();
        }
        [HttpGet("confirm/{numripersonal}/{shuma}/{pershkrimi}")]
        public async Task<IActionResult> SendEmail(string numripersonal, int shuma, string pershkrimi)
        {
                            
            var perdoruesi = await _context.perdoruesi.Where(x => x.NumriPersonal.Equals(numripersonal)).FirstOrDefaultAsync();
            if (perdoruesi == null)
            {
                throw new KoPagesaException("Nuk u gjet asnje perdorues me numrin personal " + numripersonal);
            }
            else
            {
                perdoruesi.Njoftime += 1;
                MailMessage mailMessage = new MailMessage();
                mailMessage.From = new MailAddress("veprimm1@gmail.com");
                mailMessage.To.Add(perdoruesi.Emaili);
                mailMessage.Subject = "Njoftim i ri";
                mailMessage.Body = "I nderuar <b>" + perdoruesi.Emri + " " + perdoruesi.Mbiemri + "</b>.<br><br>" +
                    " Keni pranuar një gjobë të re për shumën " + shuma + "€ me pershkrimin <b>" + pershkrimi + "</b>.<br> Paguani menjëherë përmes aplikacionit" +
                    " KOPagesa.<br><br><br>*Kujdes: Vini rripin e sigurisë! Respekto shpejtësinë maksimale! Shpëto jetë! ";
                mailMessage.IsBodyHtml = true;

                var smtpClient = new SmtpClient("smtp.gmail.com")
                {
                    Port = 587,
                    Credentials = new NetworkCredential("veprimm1@gmail.com", "wppdhyddblkwswte"),
                    EnableSsl = true,

                };
                smtpClient.Send(mailMessage);
                return Ok();
            }
            
        }
        [HttpGet("ekziston/{numripersonal}/{email}")]
        public async Task<Boolean> Ekziston(string numripersonal, string email)
        {
            var perdoruesi = await _context.perdoruesi.Where(x => x.NumriPersonal.Equals(numripersonal) || x.Emaili.Equals(email)).FirstOrDefaultAsync();

            if (perdoruesi != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        [HttpGet("dergo/kodin/{email}/{kodi}")]
        public async Task<IActionResult> DergoKodin(string email, string kodi)
        {
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("veprimm1@gmail.com");
            mailMessage.To.Add(email);
            mailMessage.Subject = "Njoftim i ri";
            mailMessage.Body = "Kodi juaj konfirmues për pergjistrim në platformën KOPagesa: <b>" + kodi + "</b>";
            mailMessage.IsBodyHtml = true;

            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential("veprimm1@gmail.com", "wppdhyddblkwswte"),
                EnableSsl = true,

            };
            smtpClient.Send(mailMessage);
            return Ok();
        }
        [HttpPost("login/{username}/{password}")]
        public async Task<string> Login(string username, string password)
        {

            var perdoruesit = await _context.perdoruesi.Where(x => x.Emaili.Equals(username) && x.Fjalkalimi.Equals(password)).FirstOrDefaultAsync();
            
            if(perdoruesit!=null)
            {
                var claim = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, username),
                };
                var identity = new ClaimsIdentity(claim,CookieAuthenticationDefaults.AuthenticationScheme);
                var principal = new ClaimsPrincipal(identity);
                var props = new AuthenticationProperties();
                HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal, props).Wait();
                byte[] b = System.Text.ASCIIEncoding.ASCII.GetBytes(username);
                string encrypted = Convert.ToBase64String(b);
                
                return encrypted;

            }
            else
            {
                return "0";
            }
        }
        [HttpGet("decrypt/{username}")]
        public async Task<ActionResult<Perdoruesi>> Decrypted(string username)
        {
            byte[] b;
            b = Convert.FromBase64String(username);
            string decrypted = System.Text.ASCIIEncoding.ASCII.GetString(b);
            return await _context.perdoruesi.Where(x => x.Emaili.Equals(decrypted)).FirstOrDefaultAsync();
        }
       
        [HttpPost("logout")]
        public async Task<IActionResult> LogOut()
        {
            await HttpContext.SignOutAsync();
            return Ok();
        }
        [HttpGet("polymorphism/interneti")]
        public async Task<string> getSherbimiInternetit()
        {
            Biznesi b = new KompaniaInternetit(100,"","","","","",5,5,20.0);
            return b.sherbimi();
           
        }
        [HttpGet("polymorphism/uji")]
        public async Task<string> getSherbimiUjit()
        {
            
            Biznesi b = new KompaniaUjit(100,"","","","","",5,2,20.4);
            return  b.sherbimi();
            
        }
        [HttpGet("polymorphism/mbeturinat")]
        public async Task<string> getSherbimiMbeturinave()
        {
            Biznesi b = new KompaniaMbeturinave(100, "", "", "", "", "", 5, 5, 20);
            return b.sherbimi();
        }
        [HttpGet("download/manual")]
        public async Task<IActionResult> GetManual()
        {
            var path = "C:\\Users\\TECHCOM\\Downloads\\Manuali.pdf";
            var memory = new MemoryStream();
            using (var stream = new FileStream(path, FileMode.Open))
            {
                await stream.CopyToAsync(memory);
            }
            memory.Position = 0;
            var ext = Path.GetExtension(path).ToLowerInvariant();
            return File(memory, GetMimeType()[ext], Path.GetFileName(path));
        }
        [HttpPost("login")]
        public async Task<ActionResult<string>> LogIn(User req)
        {
            var perdoruesi = await _context.perdoruesi.Where(x => x.Emaili.Equals(req.UserName) && x.Fjalkalimi.Equals(req.Password)).FirstOrDefaultAsync();
            if (perdoruesi == null)
            {
                return BadRequest("not found");
            }
            string token = createToken(req);
            return perdoruesi.Roli.Equals(2) ? Ok(token) : BadRequest("Not Authorized");
        }
        [HttpGet("add/{n1}/{n2}")]
        public IActionResult Add(int n1, int n2)
        {
            HttpClient client = new HttpClient();
            string url = string.Format("https://localhost:7000/api/Faturas/add/"+n1+"/"+n2);
            HttpResponseMessage message = client.GetAsync(url).Result;
            if (message.IsSuccessStatusCode)
            {
                return new JsonResult("Result is "+message.Content.ReadAsStringAsync().Result);
            }
            throw new KoPagesaException("Komunikimi nuk eshte i mundshem");
        }

        private bool PerdoruesiExists(int id)
        {
            return _context.perdoruesi.Any(e => e.PerdoruesiId == id);
        }
        private Dictionary<string,string> GetMimeType()
        {
            return new Dictionary<string, string>
            {
                {".png","image/png" },
                {".pdf","application/pdf" }
            };
        }
        private string createToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
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
