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

namespace KoPagesa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PerdoruesiController : ControllerBase
    {
        private readonly PerdoruesitContext _context;

        public PerdoruesiController(PerdoruesitContext context)
        {
            _context = context;
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

            _context.Entry(perdoruesi).State = EntityState.Modified;

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
            _context.perdoruesi.Add(perdoruesi);
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
            var perdoruesi = await _context.perdoruesi.Where(x=> x.NumriPersonal.Equals(numripersonal)).FirstOrDefaultAsync();
            perdoruesi.Njoftime += 1;   
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("veprimm1@gmail.com");
            mailMessage.To.Add(perdoruesi.Emaili);
            mailMessage.Subject = "Njoftim i ri";
            mailMessage.Body = "I nderuar <b>"+perdoruesi.Emri+" "+perdoruesi.Mbiemri+"</b>.<br><br>" +
                " Keni pranuar një gjobë të re për shumën "+shuma+ "€ me pershkrimin <b>"+pershkrimi+"</b>.<br> Paguani menjëherë përmes aplikacionit" +
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
        private bool PerdoruesiExists(int id)
        {
            return _context.perdoruesi.Any(e => e.PerdoruesiId == id);
        }
    }
}
