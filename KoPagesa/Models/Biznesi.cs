using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace KoPagesa.Models
{
    public class Biznesi : Sherbyesi
    {
        [Column (TypeName ="nvarchar(20)")]
        public string nrBiznesit { get; set; }
        public Biznesi(int perdoruesiId, string emri, string mbiemri, string numriPersonal, string emaili, string fjalkalimi, int njoftime, int roli) : base(perdoruesiId, emri, mbiemri, numriPersonal, emaili, fjalkalimi, njoftime, roli)
        {
        }

        public virtual string sherbimi()
        {
            return "";
        }
    }

}
