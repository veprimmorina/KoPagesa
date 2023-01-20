using FaturatService.Models;
using Microsoft.AspNetCore.Mvc;

namespace FaturatService.Services
{
    public interface IFatura
    {
        public  Task<ActionResult<Fatura>> PostFatura(Fatura fatura);
        public Task<ActionResult<IEnumerable<Fatura>>> GetFatura();
        public Task<ActionResult<Fatura>> GetFatura(int id);



    }
}
