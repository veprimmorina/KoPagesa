using System.ComponentModel.DataAnnotations.Schema;

namespace FaturatService.Models
{
    public class Deshmia : Fatura
    {
        public Deshmia(int id, string tipi, int lloji, string pershkrimi, string nrPersonal, string data, string koha, string adresa, double denimi, bool ePaguar) : base(id, tipi, lloji, pershkrimi, nrPersonal, data, koha, adresa, denimi, ePaguar)
        {
        }

        public override void setTipi(Fatura fatura,string tipi)
        {
            fatura.Tipi = tipi;
        }
    }
}
