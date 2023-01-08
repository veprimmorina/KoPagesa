using Microsoft.EntityFrameworkCore;
using PagesaService.Models;

namespace PagesaService
{
    public class PagesaContext : DbContext
    {

        public PagesaContext(DbContextOptions<PagesaContext> options) : base(options)
        {

        }

        public DbSet<Pagesat> pagesa { get; set; }
    }
}
