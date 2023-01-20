using FaturatService.Models;
using Microsoft.AspNetCore.Mvc;

namespace FaturatService.Services
{
    public interface IGjoba
    {
        public  Task<IActionResult> PaguajFaturen(string numripersonal, int id);
        public Task<ActionResult<IEnumerable<Gjoba>>> GetUnpaidSearch(string search);
        public Task<ActionResult<IEnumerable<Gjoba>>> GetPaidWithNumber(string numripersonal);
        public Task<ActionResult<IEnumerable<Gjoba>>> GetByDate(string date);
        public Task<string> GetStats();





    }
}
