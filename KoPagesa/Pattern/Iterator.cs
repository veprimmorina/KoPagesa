using KoPagesa.Models;
using KoPagesa.Services;

namespace KoPagesa.Pattern
{
    public abstract class Iterator
    {
        public abstract object First();
        public abstract object Next();
        public abstract bool IsDone();
        public abstract object CurrentItem();
        public abstract int count();
    }
} 

