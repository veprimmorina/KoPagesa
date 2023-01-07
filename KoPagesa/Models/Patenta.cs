using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KoPagesa.Models
{
    public class Patenta
    {

        [Key]
        public int Id { get; set; }

        [Column]
        public string Fotografia { get; set; }

        [Column (TypeName ="nvarchar (25)")]
        public string Emri { get; set; }

        [Column (TypeName ="nvarchar (25)")]
        public string Mbiemri { get; set; }

        [Column]
        public string DataLindjes { get; set; }

        [Column (TypeName = "nvarchar (45)")]
        public string NumriPersonal { get; set; }

        [Column (TypeName = "nvarchar (25)")]
        public string Komuna { get; set; }

        [Column (TypeName = "nvarchar (25)")]
        public string DataLeshimit { get; set; }

        [Column (TypeName ="nvarchar (25)")]
        public string DataSkadences { get; set; }

        [Column]
        public Boolean EAktivizuar { get; set;}


    }
}
