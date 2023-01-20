using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KoPagesa.Models
{
    public class Perdoruesi
    {
        [Key]
        public int PerdoruesiId { get; set; }
        [Column (TypeName =("nvarchar(20)"))]
        public string Emri { get; set; }
        [Column(TypeName = ("nvarchar(20)"))]
        public string Mbiemri { get; set; }
        [Column(TypeName = ("nvarchar(20)"))]
        public string NumriPersonal { get; set; }
        [Column(TypeName = ("nvarchar(55)"))]
        public string Emaili { get; set; }
        [Column(TypeName = ("nvarchar(20)"))]
        public string Fjalkalimi { get; set; }
        [Column]
        public int Njoftime { get; set; }
        [Column]
        public int Roli { get; set; }

        public Perdoruesi(int perdoruesiId, string emri, string mbiemri, string numriPersonal, string emaili, string fjalkalimi, int njoftime, int roli)
        {
            PerdoruesiId = perdoruesiId;
            Emri = emri;
            Mbiemri = mbiemri;
            NumriPersonal = numriPersonal;
            Emaili = emaili;
            Fjalkalimi = fjalkalimi;
            Njoftime = njoftime;
            Roli = roli;
        }   
    }
}
