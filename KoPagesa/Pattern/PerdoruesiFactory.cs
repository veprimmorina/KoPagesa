using KoPagesa.Models;
using Microsoft.AspNetCore.Mvc;

namespace KoPagesa.Pattern
{
    public class PerdoruesiFactory
    {

        public async Task<Perdoruesi> createPerdorues(Perdoruesi perdoruesi)
        {
            if (perdoruesi.Roli == 0)
            {
                return new Klienti(perdoruesi.PerdoruesiId, perdoruesi.Emri, perdoruesi.Mbiemri, perdoruesi.NumriPersonal, perdoruesi.Emaili, perdoruesi.Fjalkalimi, perdoruesi.Njoftime, perdoruesi.Roli);
            }
            else if (perdoruesi.Roli == 1)
            {
                return new KompaniaInternetit(perdoruesi.PerdoruesiId, perdoruesi.Emri, perdoruesi.Mbiemri, perdoruesi.NumriPersonal, perdoruesi.Emaili, perdoruesi.Fjalkalimi, perdoruesi.Njoftime, perdoruesi.Roli, 25.0);
            }
            else if (perdoruesi.Roli == 2)
            {
                return new Policia(perdoruesi.PerdoruesiId, perdoruesi.Emri, perdoruesi.Mbiemri, perdoruesi.NumriPersonal, perdoruesi.Emaili, perdoruesi.Fjalkalimi, perdoruesi.Njoftime, perdoruesi.Roli);
            }
            else if (perdoruesi.Roli == 3)
            {
                return new KompaniaUjit(perdoruesi.PerdoruesiId, perdoruesi.Emri, perdoruesi.Mbiemri, perdoruesi.NumriPersonal, perdoruesi.Emaili, perdoruesi.Fjalkalimi, perdoruesi.Njoftime, perdoruesi.Roli, 5.5);
            }
            else if (perdoruesi.Roli == 4)
            {
                return new KompaniaMbeturinave(perdoruesi.PerdoruesiId, perdoruesi.Emri, perdoruesi.Mbiemri, perdoruesi.NumriPersonal, perdoruesi.Emaili, perdoruesi.Fjalkalimi, perdoruesi.Njoftime, perdoruesi.Roli, 0);
            }
            else
            {
                return new Sherbyesi(perdoruesi.PerdoruesiId, perdoruesi.Emri, perdoruesi.Mbiemri, perdoruesi.NumriPersonal, perdoruesi.Emaili, perdoruesi.Fjalkalimi, perdoruesi.Njoftime, perdoruesi.Roli);
            }
        }
    }
}
