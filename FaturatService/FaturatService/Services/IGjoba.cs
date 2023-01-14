using Microsoft.AspNetCore.Mvc;

namespace FaturatService.Services
{
    public interface IGjoba
    {
        public  Task<IActionResult> PaguajFaturen(int numripersonal, int id);
       
    }
}
