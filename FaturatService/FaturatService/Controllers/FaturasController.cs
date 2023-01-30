using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FaturatService;
using FaturatService.Models;
using FaturatService.Services;

namespace FaturatService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaturasController : ControllerBase, IFatura
    {
        private readonly FaturaContext _context;
        private FaturaContextStrategy _faturaContextStrategy;
        
        
        public FaturasController(FaturaContext context, FaturaContextStrategy faturaContext)
        {
            _context = context;
            _faturaContextStrategy = faturaContext;    
        }

        // GET: api/Faturas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Fatura>>> GetFatura()
        {
            return await _context.Fatura.ToListAsync();
        }

        // GET: api/Faturas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Fatura>> GetFatura(int id)
        {
            var fatura = await _context.Fatura.FindAsync(id);

            if (fatura == null)
            {
                return NotFound();
            }

            return fatura;
        }

        // PUT: api/Faturas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFatura(int id, Fatura fatura)
        {
            if (id != fatura.Id)
            {
                return BadRequest();
            }

            _context.Entry(fatura).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FaturaExists(id))
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

        // POST: api/Faturas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Fatura>> PostFatura(Fatura fatura)
        {
                var faturaRe = await _faturaContextStrategy.setTipi(fatura);
                _context.Fatura.Add(faturaRe);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetFatura", new { id = fatura.Id }, fatura);
        }

        // DELETE: api/Faturas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFatura(int id)
        {
            var fatura = await _context.Fatura.FindAsync(id);
            if (fatura == null)
            {
                return NotFound();
            }

            _context.Fatura.Remove(fatura);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpGet("fatura/perdoruesit/{numripersonal}")]
        public async Task<ActionResult<IEnumerable<Fatura>>> GetFaturaByNumber(string numripersonal)
        {
            var fatura = await _context.Fatura.Where(x => x.NrPersonal.Equals(numripersonal) && x.Adresa.Equals("IPKO") && x.EPaguar.Equals(false)).ToListAsync();
            return fatura;
        }
        [HttpGet("paguaj/faturen/{id}")]
        public async Task<IActionResult> PaguajFaturen(int id)
        {
            var fatura = await _context.Fatura.FindAsync(id);
            fatura.EPaguar = true;
            _context.Update(fatura);
            await _context.SaveChangesAsync();
            return Ok();
        } 
        private bool FaturaExists(int id)
        {
            return _context.Fatura.Any(e => e.Id == id);
        }
    }
}
