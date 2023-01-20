using KoPagesa.Models;
using Microsoft.AspNetCore.Mvc;

namespace KoPagesa.Services
{
    public interface IPatenta
    {
        public Task<ActionResult<IEnumerable<Patenta>>> GetPatentaSearch(string search);
        public Task<ActionResult<Patenta>> GetPatentaByNumber(string numripersonal);
        public  Task<string> GetStats();


    }
}
