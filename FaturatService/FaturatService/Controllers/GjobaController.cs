using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FaturatService;
using FaturatService.Models;
using System.Collections;
using FaturatService.Services;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using System.IO;
using System.Globalization;

namespace FaturatService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GjobaController : ControllerBase,IGjoba
    {
        private readonly FaturaContext _context;

        public GjobaController(FaturaContext context)
        {
            _context = context;
        }

        // GET: api/Gjoba
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Gjoba>>> Getgjoba()
        {
            return await _context.gjoba.ToListAsync();
        }

        // GET: api/Gjoba/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Gjoba>> GetGjoba(int id)
        {
            var gjoba = await _context.gjoba.FindAsync(id);

            if (gjoba == null)
            {
                return NotFound();
            }

            return gjoba;
        }

        // PUT: api/Gjoba/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGjoba(int id, Gjoba gjoba)
        {
            if (id != gjoba.Id)
            {
                return BadRequest();
            }

            _context.Entry(gjoba).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GjobaExists(id))
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

        // POST: api/Gjoba
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Gjoba>> PostGjoba(Gjoba gjoba)
        {
            _context.gjoba.Add(gjoba);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGjoba", new { id = gjoba.Id }, gjoba);
        }

        // DELETE: api/Gjoba/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGjoba(int id)
        {
            var gjoba = await _context.gjoba.FindAsync(id);
            if (gjoba == null)
            {
                return NotFound();
            }

            _context.gjoba.Remove(gjoba);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpGet("gjoba/numri/{nrpersonal}")]
        public async Task<ActionResult<IEnumerable<Gjoba>>> GetGjobaWithNumer(string nrpersonal)
        {
            return await _context.gjoba.Where(x => x.NrPersonal.Equals(nrpersonal) && x.EPaguar.Equals(false)).ToListAsync();

        }
        [HttpGet("numero/gjobat/{numripersonal}")]
        public async Task<int> CountGjoba(string numripersonal)
        {
            return await _context.gjoba.Where(x => x.EPaguar.Equals(false) && x.NrPersonal.Equals(numripersonal)).CountAsync();
        }

        [HttpGet("paguaj/faturen/{numripersonal}/{id}")]
        public async Task<IActionResult> PaguajFaturen(string numripersonal, int id)
        {
            var gjoba = await _context.gjoba.FindAsync(id);

            if (gjoba == null)
            {
                return NotFound();
            }

            gjoba.EPaguar = true;
            _context.gjoba.Update(gjoba);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpGet("get/paid")]
        public async Task<ActionResult<IEnumerable<Gjoba>>> GetPaidFine()
        {
            return await _context.gjoba.Where(x => x.EPaguar.Equals(true)).ToListAsync();
        }
        [HttpGet("get/unpaid")]
        public async Task<ActionResult<IEnumerable<Gjoba>>> GetUnpaidFine()
        {
            return await _context.gjoba.Where(x => x.EPaguar.Equals(false)).ToListAsync();
        }
        [HttpGet("get/unpaid/{search}")]
        public async Task<ActionResult<IEnumerable<Gjoba>>> GetUnpaidSearch(string search)
        {
            return await _context.gjoba.Where(x => x.EPaguar.Equals(false) && x.NrPersonal.Equals(search)).ToListAsync();
        }
        [HttpGet("get/paid/{numripersonal}")]
        public async Task<ActionResult<IEnumerable<Gjoba>>> GetPaidWithNumber(string numripersonal)
        {
            return await _context.gjoba.Where(x => x.NrPersonal.Equals(numripersonal) && x.EPaguar.Equals(true)).ToListAsync();
        }
        [HttpGet("get/by/date/{date}")]
        public async Task<ActionResult<IEnumerable<Gjoba>>> GetByDate(string date)
        {
            return await _context.gjoba.Where(x => x.Data.Equals(date)).ToListAsync();
        }

        [HttpGet("get/stats")]
        public async Task<string> GetStats()
        {
            DateTime now = DateTime.Now;
            now.ToString("yyyy-mm-dd");
            var nrGjobave = await _context.gjoba.CountAsync();
            var nrGjobavePaguar = await _context.gjoba.Where(x => x.EPaguar.Equals(true)).CountAsync();
            var nrGjobavePaPaguar = await _context.gjoba.Where(x => x.EPaguar.Equals(false)).CountAsync();
            var gjobaSot = await _context.gjoba.Where(x=> x.Data.Equals(now)).CountAsync();
            string total = nrGjobave + ";" + nrGjobavePaguar + ";" + nrGjobavePaPaguar+";"+gjobaSot;

            return total;
        }
        [HttpGet("get/older/{id}")]
        public async Task<TimeSpan> isOlderThanTwoWeeks(int id)
        {
            var gjoba = await _context.gjoba.FindAsync(id);
            var data = gjoba.Data;

            var ex = DateTime.ParseExact(data, "yyyy-mm-dd", CultureInfo.InvariantCulture);
            DateTime now = DateTime.Now;
            return now - ex ;
           
        }
        [HttpGet("get/stats/month/{monthnumber}")]
        public async Task<string> getMonthStats(string monthnumber)
        {
            var gjoba = await _context.gjoba.ToListAsync();
            
            int countGjoba = 0;
            int countGjobaPaPaguar = 0;
            int countGjobaTePaguara = 0;
           
            for (int i = 0; i < gjoba.Count; i++)
            {
                string[] muajiGjobes = gjoba[i].Data.Split("-");
               if (muajiGjobes[1].Equals(monthnumber))
                {
                    countGjoba++;
                }
                if (muajiGjobes[1].Equals(monthnumber) && gjoba[i].EPaguar.Equals(false))
                {
                    countGjobaPaPaguar++;
                }
                if (muajiGjobes[1].Equals(monthnumber) && gjoba[i].EPaguar.Equals(true))
                {
                    countGjobaTePaguara++;
                }
            }
            return countGjoba+";"+countGjobaPaPaguar+";"+countGjobaTePaguara;
        }
        private bool GjobaExists(int id)
        {
            return _context.gjoba.Any(e => e.Id == id);
        }
    }
}
