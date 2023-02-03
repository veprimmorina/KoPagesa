namespace KoPagesa.Models
{
    public class KompaniaInternetit : Biznesi
    {
        public KompaniaInternetit(int perdoruesiId, string emri, string mbiemri, string numriPersonal, string emaili, string fjalkalimi, int njoftime, int roli) : base(perdoruesiId, emri, mbiemri, numriPersonal, emaili, fjalkalimi, njoftime, roli)
        {
        }

        public override string sherbimi() 
        {
           return "Internet provider";
        }
    }
}
