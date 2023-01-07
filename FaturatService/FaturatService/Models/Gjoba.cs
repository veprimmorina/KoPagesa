using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FaturatService.Models
{
    public class Gjoba
    {

        [Key]
        public int Id { get; set; }

        [Column]
        public string Pershkrimi { get; set; }

        [Column]
        public string NrPersonal { get; set; }

        [Column(TypeName = "nvarchar (25)")]
        public string Data { get; set; }

        [Column(TypeName = "nvarchar (15)")]

        public string Koha { get; set; }

        [Column(TypeName = "nvarchar (60)")]
        public string Adresa { get; set; }

        [Column]
        public double Denimi { get; set; }
        [Column]
        public Boolean EPaguar { get; set; }

    }
}
