using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KoPagesa.Models
{
    public class Perdoruesi
    {
        [Key]
        public int PerdoruesiId { get; set; }

        [Column (TypeName = "nvarchar (25)")]
        public string Emri { get; set; }

        [Column(TypeName = "nvarchar (25)")]
        public string Mbiemri { get; set; }

        [Column(TypeName = "nvarchar (25)")]
        public string Emaili { get; set; }

        [Column(TypeName = "nvarchar (30)")]
        public string Fjalkalimi { get; set; }
        [Column]
        public int Roli { get; set; }


    }
}
