using System.ComponentModel.DataAnnotations.Schema;

namespace KoPagesa.Models
{
    public class KompaniaUjit : Biznesi
    {
        [Column]
        public double FaktoriPH { get; set; }
        public KompaniaUjit(int perdoruesiId, string emri, string mbiemri, string numriPersonal, string emaili, string fjalkalimi, int njoftime, int roli, double faktoriPH) : base(perdoruesiId, emri, mbiemri, numriPersonal, emaili, fjalkalimi, njoftime, roli)
        {
            FaktoriPH = faktoriPH;
        }

        public override string sherbimi()
        {
            return "Furnizim me ujë";
        }
    }
}
