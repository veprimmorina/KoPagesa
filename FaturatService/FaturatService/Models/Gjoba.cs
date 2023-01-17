using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FaturatService.Models
{
    public class Gjoba: Fatura
    {
        public Gjoba(int id, string tipi, int lloji, string pershkrimi, string nrPersonal, string data, string koha, string adresa, double denimi, bool ePaguar) : base(id, tipi, lloji, pershkrimi, nrPersonal, data, koha, adresa, denimi, ePaguar)
        {
        }

        public void setTipi(string tipi) 
        {
             
        }


        /*
        public Gjoba(string pershkrimi, string numriPersonal, string data, string koha, string adresa, double denimi)
        {
            Pershkrimi = pershkrimi;
            NrPersonal = numriPersonal;
            Data = data;
            Koha = koha;
            Adresa = adresa;
            Denimi = denimi;
            EPaguar = false;
        }
        */

    }
}
