using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace KoPagesa.Models
{
    public class Klienti : Perdoruesi
    {
        [Column(TypeName = "nvarchar(30)")]
        public string NumriKarteles { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string DataSkadimit { get; set; }
        public int CVC {get; set; }
        [Column(TypeName = "nvarchar(40)")]
        public string MbajtesiKarteles { get; set; }
        [Column(TypeName = "nvarchar(30)")]
        public string KartelaId { get; set; }

        public Klienti(int perdoruesiId, string emri, string mbiemri, string numriPersonal, string emaili, string fjalkalimi, int njoftime, int roli) : base(perdoruesiId, emri, mbiemri, numriPersonal, emaili, fjalkalimi, njoftime, roli)
        {
                
        }
    }
}
