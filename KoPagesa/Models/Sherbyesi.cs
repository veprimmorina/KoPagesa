using System.ComponentModel.DataAnnotations.Schema;

namespace KoPagesa.Models
{
    public class Sherbyesi : Perdoruesi
    {
        [Column (TypeName=("nvarchar(20)"))]
        public string NumriFiskal { get; set; }
        public Sherbyesi(int perdoruesiId, string emri, string mbiemri, string numriPersonal, string emaili, string fjalkalimi, int njoftime, int roli) : base(perdoruesiId, emri, mbiemri, numriPersonal, emaili, fjalkalimi, njoftime, roli)
        {
        }
    }
}
