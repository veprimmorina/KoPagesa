using FaturatService.Migrations;
using FaturatService.Models;
using Microsoft.EntityFrameworkCore;
using Gjoba = FaturatService.Models.Gjoba;

namespace FaturatService
{
    public class FaturaContext : DbContext
    {

        public FaturaContext(DbContextOptions<FaturaContext> options) : base(options)
        {

        }

        public DbSet<Gjoba> gjoba { get; set; }
    }
}
