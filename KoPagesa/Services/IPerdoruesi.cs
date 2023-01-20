using Microsoft.AspNetCore.Mvc;

namespace KoPagesa.Services
{
    public interface IPerdoruesi
    {
        public Task<IActionResult> SendEmail(string numripersonal, int shuma, string pershkrimi);
        public Task<Boolean> Ekziston(string numripersonal, string email);
        public  Task<IActionResult> DergoKodin(string email, string kodi);

    }
}
