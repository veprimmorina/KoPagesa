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
    public class PatentaController : ControllerBase
    {
        private readonly PerdoruesitContext _context;

        public PatentaController(PerdoruesitContext context)
        {
            _context = context;
        }

        // GET: api/Patenta
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Patenta>>> Getpatenta()
        {
            return await _context.patenta.ToListAsync();
        }

        // GET: api/Patenta/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Patenta>> GetPatenta(int id)
        {
            var patenta = await _context.patenta.FindAsync(id);

            if (patenta == null)
            {
                return NotFound();
            }

            return patenta;
        }

        // PUT: api/Patenta/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPatenta(int id, Patenta patenta)
        {
            if (id != patenta.Id)
            {
                return BadRequest();
            }

            _context.Entry(patenta).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatentaExists(id))
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

        // POST: api/Patenta
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Patenta>> PostPatenta(Patenta patenta)
        {
            _context.patenta.Add(patenta);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPatenta", new { id = patenta.Id }, patenta);
        }

        // DELETE: api/Patenta/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatenta(int id)
        {
            var patenta = await _context.patenta.FindAsync(id);
            if (patenta == null)
            {
                return NotFound();
            }

            _context.patenta.Remove(patenta);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpGet("get/{search}")]
        public async Task<ActionResult<IEnumerable<Patenta>>> GetPatentaSearch(string search)
        {
            return await _context.patenta.Where(x => x.NumriPersonal.Equals(search) || x.Emri.Equals(search)).ToListAsync();
        }
        [HttpGet("deaktivizo/{id}")]
        public async Task<IActionResult> Deactivate(int id)
        {
            var patenta = await _context.patenta.FindAsync(id);
            patenta.EAktivizuar = false;
            _context.patenta.Update(patenta);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet("aktivizo/{id}")]
        public async Task<IActionResult> Activate(int id)
        {
            var patenta = await _context.patenta.FindAsync(id);
            patenta.EAktivizuar = true;
            _context.patenta.Update(patenta);
            await _context.SaveChangesAsync();
            return Ok();
        }
        private bool PatentaExists(int id)
        {
            return _context.patenta.Any(e => e.Id == id);
        }
    }
}
