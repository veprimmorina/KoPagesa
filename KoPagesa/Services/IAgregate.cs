using KoPagesa.Models;
using KoPagesa.Pattern;

namespace KoPagesa.Services
{
    public  interface IAggregate
    {
        public Iterator CreateIterator();
    }
}
