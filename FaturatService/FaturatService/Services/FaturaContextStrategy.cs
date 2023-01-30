using FaturatService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FaturatService.Services
{
    public class FaturaContextStrategy
    {
        private Fatura faturaRe;

        public async Task<Fatura> setTipi(Fatura fatura) 
        {
            if (fatura.Lloji == 0)
            {
                faturaRe = new Gjoba(fatura.Id, fatura.Tipi, fatura.Lloji, fatura.Pershkrimi, fatura.NrPersonal, fatura.Data, fatura.Koha, fatura.Adresa, fatura.Denimi, fatura.EPaguar);
                faturaRe.setTipi(faturaRe, "Gjobe");
                return faturaRe;
            }
            else if(fatura.Lloji== 1)
            {
                faturaRe = new Deshmia(fatura.Id, fatura.Tipi, fatura.Lloji, fatura.Pershkrimi, fatura.NrPersonal, fatura.Data, fatura.Koha, fatura.Adresa, fatura.Denimi, fatura.EPaguar);
                faturaRe.setTipi(faturaRe, "Deshmi pagese");
                return faturaRe;
            }
            else
            {
                faturaRe = new Fatura(fatura.Id, fatura.Tipi, fatura.Lloji, fatura.Pershkrimi, fatura.NrPersonal, fatura.Data, fatura.Koha, fatura.Adresa, fatura.Denimi, fatura.EPaguar);
                faturaRe.setTipi(faturaRe, "Fature e re");
                return faturaRe;
            }
        }
    }
}
