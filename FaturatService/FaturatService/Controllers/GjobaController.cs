using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FaturatService;
using FaturatService.Models;

namespace FaturatService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GjobaController : ControllerBase
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
            return await _context.gjoba.Where(x=> x.EPaguar.Equals(false) && x.NrPersonal.Equals(numripersonal)).CountAsync();
        }

        [HttpGet("paguaj/faturen/{numripersonal}/{id}")]
        public async Task<IActionResult> PaguajFaturen(int numripersonal, int id)
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
        private bool GjobaExists(int id)
        {
            return _context.gjoba.Any(e => e.Id == id);
        }
    }
}
