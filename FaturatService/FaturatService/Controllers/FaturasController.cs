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
    public class FaturasController : ControllerBase
    {
        private readonly FaturaContext _context;
        private FaturaContextStrategy _faturaContext;
        
        
        public FaturasController(FaturaContext context, FaturaContextStrategy faturaContext)
        {
            _context = context;
            _faturaContext = faturaContext;    
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

            var faturaRe = fatura;
            
            if (fatura.Lloji == 0)
            {
                faturaRe = new Gjoba(fatura.Id, fatura.Tipi, fatura.Lloji, fatura.Pershkrimi, fatura.NrPersonal, fatura.Data, fatura.Koha, fatura.Adresa, fatura.Denimi, fatura.EPaguar);
                faturaRe.setTipi(faturaRe, "Gjobe");
                _context.Fatura.Add(faturaRe);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetFatura", new { id = fatura.Id }, fatura);
            }
            else
            {
                faturaRe = new Deshmia(fatura.Id, fatura.Tipi, fatura.Lloji, fatura.Pershkrimi, fatura.NrPersonal, fatura.Data, fatura.Koha, fatura.Adresa, fatura.Denimi, fatura.EPaguar);
                faturaRe.setTipi(faturaRe,"Deshmi pagese");
                _context.Fatura.Add(faturaRe);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetFatura", new { id = fatura.Id }, fatura);
            }
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

        private bool FaturaExists(int id)
        {
            return _context.Fatura.Any(e => e.Id == id);
        }
    }
}
