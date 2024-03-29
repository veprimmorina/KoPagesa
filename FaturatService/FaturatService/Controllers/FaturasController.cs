﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FaturatService;
using FaturatService.Models;
using FaturatService.Services;
using Newtonsoft.Json;
using System.Text;
using System.Dynamic;

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
        [HttpPost("fatura/paguaj/{id}/{emri}/{mbiemri}")]
        public async Task<IActionResult> PaguajFaturenId(int id, string emri, string mbiemri)
        {
            var fatura = await _context.Fatura.FindAsync(id);
            fatura.EPaguar = true;
            _context.Update(fatura);
            await _context.SaveChangesAsync();
            dynamic pagesa = new ExpandoObject();
            pagesa.Shuma = fatura.Denimi;
            pagesa.NrPersonal = fatura.NrPersonal;
            pagesa.Emri = emri;
            pagesa.Mbiemri = mbiemri;
            pagesa.LlojiPageses = "Internet";
            pagesa.pagesaPer = 1;
            pagesa.pershkrimi = fatura.Pershkrimi;

            
            var json = JsonConvert.SerializeObject(pagesa);
            var data = new StringContent(json, Encoding.UTF8, "application/json");
            string url = "https://localhost:7208/api/Pagesats/internet";
            using var client = new HttpClient();
            var response = await client.PostAsync(url, data);
            var result = await response.Content.ReadAsStringAsync();
            return Ok(result);   
        }
        [HttpGet("add/{n1}/{n2}")]
        public IActionResult Get(int n1,int n2)
        {
            return Content((n1 - n2).ToString());
        }

        [HttpGet("merr/pagesat/ipko")]
        public async Task<ActionResult<IEnumerable<Fatura>>> GetPagesatIpko()
        {
            return await _context.Fatura.Where(x => x.Adresa.Equals("IPKO") && x.EPaguar.Equals(true)).ToListAsync();
        }
        private bool FaturaExists(int id)
        {
            return _context.Fatura.Any(e => e.Id == id);
        }
    }
}
