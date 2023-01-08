using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PagesaService.Models
{
    public class Pagesat
    {

        [Key]
        public int Id { get; set; }
        [Column]
        public double Shuma { get; set; }
        [Column(TypeName = "nvarchar (20)")]
        public string NrPersonal { get; set; }
        [Column(TypeName = "nvarchar (25)")]
        public string Emri { get; set; }
        [Column(TypeName = "nvarchar (25)")]
        public string Mbiemri { get; set; }
        [Column(TypeName = "nvarchar (25)")]
        public string LlojiPageses { get; set; }
    }
}
