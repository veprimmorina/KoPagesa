using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace FaturatService.Models

{
    public class Fatura
    {
        [Key]
        public int Id { get; set; }
        [Column]
        public string Tipi { get; set; }
        [Column]
        public int Lloji { get; set; }
        [Column]
        public string Pershkrimi { get; set; }

        [Column]
        public string NrPersonal { get; set; }

        [Column(TypeName = "nvarchar (25)")]
        public string Data { get; set; }

        [Column(TypeName = "nvarchar (15)")]

        public string Koha { get; set; }

        [Column(TypeName = "nvarchar (60)")]
        public string Adresa { get; set; }

        [Column]
        public double Denimi { get; set; }
        [Column]
        public Boolean EPaguar { get; set; }

       public Fatura(int id, string tipi, int lloji, string pershkrimi, string nrPersonal, string data, string koha, string adresa, double denimi, bool ePaguar)
        {
            Id = id;
            Tipi = tipi;
            Lloji = lloji;
            Pershkrimi = pershkrimi;
            NrPersonal = nrPersonal;
            Data = data;
            Koha = koha;
            Adresa = adresa;
            Denimi = denimi;
            EPaguar = ePaguar;
        }

        public void setTipi(Fatura fatura,string tipi)
        {
            fatura.Tipi = tipi;
        }
    }
}
