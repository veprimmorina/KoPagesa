using System.ComponentModel.DataAnnotations.Schema;

namespace KoPagesa.Models
{
    public class KompaniaMbeturinave : Biznesi
    {
        [Column]
        public int NumriKamioneve { get; set; }
        public KompaniaMbeturinave(int perdoruesiId, string emri, string mbiemri, string numriPersonal, string emaili, string fjalkalimi, int njoftime, int roli, int numriKamioneve) : base(perdoruesiId, emri, mbiemri, numriPersonal, emaili, fjalkalimi, njoftime, roli)
        {
            NumriKamioneve = numriKamioneve;
        }

        public override string sherbimi()
        {
            return "Menjanimi i mbeturinave";
        }
    }
}
