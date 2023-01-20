using KoPagesa.Models;
using Microsoft.AspNetCore.Mvc;

namespace KoPagesa.Pattern
{
    public class PerdoruesiFactory
    {

        public async Task<Perdoruesi> createPerdorues(Perdoruesi perdoruesi,int roli)
        {
            if (roli == 0) 
            {
               return new Klienti(perdoruesi.PerdoruesiId, perdoruesi.Emri, perdoruesi.Mbiemri, perdoruesi.NumriPersonal, perdoruesi.Emaili, perdoruesi.Fjalkalimi, perdoruesi.Njoftime, perdoruesi.Roli);
            }
            else
            {
                return new Sherbyesi(perdoruesi.PerdoruesiId, perdoruesi.Emri, perdoruesi.Mbiemri, perdoruesi.NumriPersonal, perdoruesi.Emaili, perdoruesi.Fjalkalimi, perdoruesi.Njoftime, perdoruesi.Roli);
            }
        }
    }
}
