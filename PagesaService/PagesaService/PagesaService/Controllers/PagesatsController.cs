using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PagesaService;
using PagesaService.Models;

namespace PagesaService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PagesatsController : ControllerBase
    {
        private readonly PagesaContext _context;

        public PagesatsController(PagesaContext context)
        {
            _context = context;
        }

        // GET: api/Pagesats
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pagesat>>> Getpagesa()
        {
            return await _context.pagesa.ToListAsync();
        }

        // GET: api/Pagesats/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pagesat>> GetPagesat(int id)
        {
            var pagesat = await _context.pagesa.FindAsync(id);

            if (pagesat == null)
            {
                return NotFound();
            }

            return pagesat;
        }

        // PUT: api/Pagesats/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPagesat(int id, Pagesat pagesat)
        {
            if (id != pagesat.Id)
            {
                return BadRequest();
            }

            _context.Entry(pagesat).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PagesatExists(id))
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

        // POST: api/Pagesats
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Pagesat>> PostPagesat(Pagesat pagesat)
        {

            if (pagesat.LlojiPageses.Equals("gjoba"))
            {
                pagesat.PagesaPer = (int)FaturaEnum.gjoba;
            }
            else if (pagesat.LlojiPageses.Equals("internet"))
            {
                pagesat.PagesaPer = (int)FaturaEnum.interneti;
            }
            else
            {
                pagesat.PagesaPer = (int)FaturaEnum.mbeturinat;
            }
            _context.pagesa.Add(pagesat);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPagesat", new { id = pagesat.Id }, pagesat);
        }

        // DELETE: api/Pagesats/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePagesat(int id)
        {
            var pagesat = await _context.pagesa.FindAsync(id);
            if (pagesat == null)
            {
                return NotFound();
            }

            _context.pagesa.Remove(pagesat);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpPost("konfirmo/pagesen/{emri}/{mbiemri}/{shuma}/{pershkrimi}/{email}")]
        public async Task<IActionResult> KonfirmoPagesen(string emri, string mbiemri, string shuma, string pershkrimi, string email)
        {
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("kopagesa@gmail.com");
            mailMessage.To.Add(email);
            mailMessage.Subject = "Njoftim i ri";
            mailMessage.Body = "I/E Nderuar <b>"+emri+" "+mbiemri+"</b><br><br> Me ane te ketij emaili ne konfirmojme pagesen tuaj nepermjet aplikacionit KOPagesa. <br><br>Detajet e Pageses: " +
                "<table><tr><td>Emri: "+emri+" "+mbiemri+"</td></tr><tr><td>Pershkrimi: "+pershkrimi+"</td></tr><tr><td>Shuma: +"+shuma+ "€</td></tr></table>" +
                "<br><br>Ju faleminderit qe i besoni platformes KOPagesa per te kryer sherbimet tuaja!";
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
        private bool PagesatExists(int id)
        {
            return _context.pagesa.Any(e => e.Id == id);
        }
        enum FaturaEnum
        {
            gjoba = 0,
            interneti = 1,
            mbeturinat = 2
        }
    }
}
