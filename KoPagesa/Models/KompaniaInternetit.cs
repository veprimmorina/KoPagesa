using System.ComponentModel.DataAnnotations.Schema;

namespace KoPagesa.Models
{
    public class KompaniaInternetit : Biznesi
    {
        [Column]
        public double ShpejtesiaInternetit { get; set; }
        public KompaniaInternetit(int perdoruesiId, string emri, string mbiemri, string numriPersonal, string emaili, string fjalkalimi, int njoftime, int roli, double shpejtesiaInternetit) : base(perdoruesiId, emri, mbiemri, numriPersonal, emaili, fjalkalimi, njoftime, roli)
        {
            ShpejtesiaInternetit = shpejtesiaInternetit;
        }

        public override string sherbimi() 
        {
           return "Internet provider";
        }
    }
}
