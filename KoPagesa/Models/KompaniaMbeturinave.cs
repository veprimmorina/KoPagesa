namespace KoPagesa.Models
{
    public class KompaniaMbeturinave : Biznesi
    {
        public KompaniaMbeturinave(int perdoruesiId, string emri, string mbiemri, string numriPersonal, string emaili, string fjalkalimi, int njoftime, int roli) : base(perdoruesiId, emri, mbiemri, numriPersonal, emaili, fjalkalimi, njoftime, roli)
        {
        }

        public override string sherbimi()
        {
            return "Menjanimi i mbeturinave";
        }
    }
}
