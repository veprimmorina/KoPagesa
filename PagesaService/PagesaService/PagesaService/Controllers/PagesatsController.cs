using System;
using System.Collections.Generic;
using System.Linq;
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

        private bool PagesatExists(int id)
        {
            return _context.pagesa.Any(e => e.Id == id);
        }
    }
}
