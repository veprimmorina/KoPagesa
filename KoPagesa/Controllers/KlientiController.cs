using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using KoPagesa;
using KoPagesa.Models;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using System.Net.Mail;
using System.Net;
using System.Security.Claims;

namespace KoPagesa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KlientiController : ControllerBase
    {
        private readonly PerdoruesitContext _context;

        public KlientiController(PerdoruesitContext context)
        {
            _context = context;
        }

        // GET: api/Klienti
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Klienti>>> Getklienti()
        {
            return await _context.klienti.ToListAsync();
        }

        // GET: api/Klienti/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Klienti>> GetKlienti(int id)
        {
            var klienti = await _context.klienti.FindAsync(id);

            if (klienti == null)
            {
                return NotFound();
            }

            return klienti;
        }

        // PUT: api/Klienti/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKlienti(int id, Klienti klienti)
        {
            if (id != klienti.PerdoruesiId)
            {
                return BadRequest();
            }

            _context.Entry(klienti).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KlientiExists(id))
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

        // POST: api/Klienti
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Klienti>> PostKlienti(Klienti klienti)
        {
            klienti.Roli = 1;
            _context.klienti.Add(klienti);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKlienti", new { id = klienti.PerdoruesiId }, klienti);
        }

        // DELETE: api/Klienti/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKlienti(int id)
        {
            var klienti = await _context.klienti.FindAsync(id);
            if (klienti == null)
            {
                return NotFound();
            }

            _context.klienti.Remove(klienti);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool KlientiExists(int id)
        {
            return _context.klienti.Any(e => e.PerdoruesiId == id);
        }
        [HttpGet("confirm/{numripersonal}/{shuma}/{pershkrimi}")]
        public async Task<IActionResult> SendEmail(string numripersonal, int shuma, string pershkrimi)
        {
            var perdoruesi = await _context.perdoruesi.Where(x => x.NumriPersonal.Equals(numripersonal)).FirstOrDefaultAsync();
            perdoruesi.Njoftime += 1;
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("kopagesa@gmail.com");
            mailMessage.To.Add(perdoruesi.Emaili);
            mailMessage.Subject = "Njoftim i ri";
            mailMessage.Body = "I nderuar <b>" + perdoruesi.Emri + " " + perdoruesi.Mbiemri + "</b>.<br><br>" +
                " Keni pranuar një gjobë të re për shumën " + shuma + "€ me pershkrimin <b>" + pershkrimi + "</b>.<br> Paguani menjëherë përmes aplikacionit" +
                " KOPagesa.<br><br><br>*Kujdes: Vini rripin e sigurisë! Respekto shpejtësinë maksimale! Shpëto jetë! ";
            mailMessage.IsBodyHtml = true;

            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential("kopagesa@gmail.com", "tzmuegmvzjksrjnt"),
                EnableSsl = true,

            };
            smtpClient.Send(mailMessage);
            return Ok();
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
            mailMessage.From = new MailAddress("kopagesa@gmail.com");
            mailMessage.To.Add(email);
            mailMessage.Subject = "Njoftim i ri";
            mailMessage.Body = "Kodi juaj konfirmues për pergjistrim në platformën KOPagesa: <b>" + kodi + "</b>";
            mailMessage.IsBodyHtml = true;

            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential("kopagesa@gmail.com", "tzmuegmvzjksrjnt"),
                EnableSsl = true,

            };
            smtpClient.Send(mailMessage);
            return Ok();
        }
        [HttpPost("login/{username}/{password}")]
        public async Task<string> Login(string username, string password)
        {

            var perdoruesit = await _context.perdoruesi.Where(x => x.Emaili.Equals(username) && x.Fjalkalimi.Equals(password)).FirstOrDefaultAsync();

            if (perdoruesit != null)
            {
                var claim = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, username),
                };
                var identity = new ClaimsIdentity(claim, CookieAuthenticationDefaults.AuthenticationScheme);
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
    }
}
