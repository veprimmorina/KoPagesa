using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using KoPagesa;
using KoPagesa.Models;

namespace KoPagesa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PerdoruesiTESTController : ControllerBase
    {
        private readonly PerdoruesitContext _context;

        public PerdoruesiTESTController(PerdoruesitContext context)
        {
            _context = context;
        }

        // GET: api/PerdoruesiTEST
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Perdoruesi>>> Getperdoruesi()
        {
            return await _context.perdoruesi.ToListAsync();
        }

        // GET: api/PerdoruesiTEST/5
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

        // PUT: api/PerdoruesiTEST/5
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

        // POST: api/PerdoruesiTEST
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Perdoruesi>> PostPerdoruesi(Perdoruesi perdoruesi)
        {
            _context.perdoruesi.Add(perdoruesi);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPerdoruesi", new { id = perdoruesi.PerdoruesiId }, perdoruesi);
        }

        // DELETE: api/PerdoruesiTEST/5
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

        private bool PerdoruesiExists(int id)
        {
            return _context.perdoruesi.Any(e => e.PerdoruesiId == id);
        }
    }
}
