using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using KoPagesa;
using KoPagesa.Models;
using KoPagesa.Services;
using KoPagesa.Pattern;

namespace KoPagesa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatentaController : ControllerBase,IPatenta
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

        [HttpGet("get/stats")]

        public async Task<string> GetStats()
        {
            DateTime now = DateTime.Now;
            now.ToString("yyyy-mm-dd");
            var patentat = await _context.patenta.CountAsync();
            var deaktive = await _context.patenta.Where(x => x.EAktivizuar.Equals(false)).CountAsync();
            var sot = await _context.patenta.Where(x => x.DataLeshimit.Equals(now)).CountAsync();
            string total = patentat + ";" + deaktive+";" + sot ;

            return total;
        }
        [HttpGet("get/patenta/numri/{numripersonal}")]
        public async Task<ActionResult<Patenta>> GetPatentaByNumber(string numripersonal)
        {
            return await _context.patenta.Where(x => x.NumriPersonal.Equals(numripersonal)).FirstOrDefaultAsync();
        }
        [HttpGet("get/total")]
        public async Task<string> GetTotal()
        {
            var total = await _context.patenta.CountAsync();
            var deactivated= await _context.patenta.Where(x => x.EAktivizuar.Equals(false)).CountAsync();
            var activated = await _context.patenta.Where(x => x.EAktivizuar.Equals(true)).CountAsync();

            return total + ";" + deactivated + ";" + activated;
        }
        [HttpGet("iterator")]
        public async Task<int> IteratorImplement()
        {
            ConcreteAggregate collection = new ConcreteAggregate();
            ConcreteAggregate a = new ConcreteAggregate();
            var patenta = await _context.patenta.ToListAsync();

            for (int j = 0; j < patenta.Count; j++)
            {
                a[j] = patenta[j].Emri + " ";
            }

            // Krijimi i iteratorit per te numruar patent shoferet
            Iterator i = a.CreateIterator();
            Console.WriteLine("Iterating over collection:");
            object item = i.First();
            while (item != null)
            {
                item = i.Next();
            }
            return i.count();

        }
        private bool PatentaExists(int id)
        {
            return _context.patenta.Any(e => e.Id == id);
        }
    }
}
