using KoPagesa.Models;
using Microsoft.EntityFrameworkCore;

namespace KoPagesa
{
    public class PerdoruesitContext : DbContext
    {

        public PerdoruesitContext(DbContextOptions<PerdoruesitContext> options) : base(options)
        {

        }

        public DbSet <Perdoruesi> perdoruesi { get; set; }
        public DbSet<Klienti> klienti { get; set; }
        public DbSet<Sherbyesi> sherbyesi { get; set; }
        public DbSet <Patenta> patenta { get; set;}


    }
}
