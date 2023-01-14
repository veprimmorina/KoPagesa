namespace FaturatService.Models
{
    public abstract class Invoice
    {   
        public int Id { get; set; }
        public string Pershkrimi { get; set; }
        public double Pagesa { get; set; }

    }
}
