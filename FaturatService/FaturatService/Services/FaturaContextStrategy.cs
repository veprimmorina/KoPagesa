using FaturatService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FaturatService.Services
{
    public class FaturaContextStrategy
    {
        private Fatura faturaRe;

       
        
        public async Task<ActionResult<Fatura>> setTipi(Fatura fatura) 
        {
            if (fatura.Lloji == 0)
            {

                faturaRe = new Gjoba(fatura.Id, fatura.Tipi, fatura.Lloji, fatura.Pershkrimi, fatura.NrPersonal, fatura.Data, fatura.Koha, fatura.Adresa, fatura.Denimi, fatura.EPaguar);
                faturaRe.setTipi(faturaRe, "Gjobe");
                return faturaRe;
            }
            else
            {
                faturaRe = new Deshmia(fatura.Id, fatura.Tipi, fatura.Lloji, fatura.Pershkrimi, fatura.NrPersonal, fatura.Data, fatura.Koha, fatura.Adresa, fatura.Denimi, fatura.EPaguar);
                faturaRe.setTipi(faturaRe, "Deshmi pagese");
                return faturaRe;
            }
        }
    }
}
