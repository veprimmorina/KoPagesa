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
    public class SherbyesiController : ControllerBase
    {
        private readonly PerdoruesitContext _context;

        public SherbyesiController(PerdoruesitContext context)
        {
            _context = context;
        }

        // GET: api/Sherbyesi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sherbyesi>>> Getsherbyesi()
        {
            return await _context.sherbyesi.ToListAsync();
        }

        // GET: api/Sherbyesi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Sherbyesi>> GetSherbyesi(int id)
        {
            var sherbyesi = await _context.sherbyesi.FindAsync(id);

            if (sherbyesi == null)
            {
                return NotFound();
            }

            return sherbyesi;
        }

        // PUT: api/Sherbyesi/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSherbyesi(int id, Sherbyesi sherbyesi)
        {
            if (id != sherbyesi.PerdoruesiId)
            {
                return BadRequest();
            }

            _context.Entry(sherbyesi).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SherbyesiExists(id))
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

        // POST: api/Sherbyesi
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Sherbyesi>> PostSherbyesi(Sherbyesi sherbyesi)
        {
            _context.sherbyesi.Add(sherbyesi);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSherbyesi", new { id = sherbyesi.PerdoruesiId }, sherbyesi);
        }

        // DELETE: api/Sherbyesi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSherbyesi(int id)
        {
            var sherbyesi = await _context.sherbyesi.FindAsync(id);
            if (sherbyesi == null)
            {
                return NotFound();
            }

            _context.sherbyesi.Remove(sherbyesi);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SherbyesiExists(int id)
        {
            return _context.sherbyesi.Any(e => e.PerdoruesiId == id);
        }
    }
}
