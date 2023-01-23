using KoPagesa.Models;
using KoPagesa.Services;

namespace KoPagesa.Pattern
{
    public class ConcreteAggregate : IAggregate
    {
        List<object> items = new List<object>();
        public Iterator CreateIterator()
        {
            return new ConcreteIterator(this);
        }
        // Get item count
        public int Count
        {
            get { return items.Count; }
        }
        // Indexer
        public object this[int index]
        {
            get { return items[index]; }
            set { items.Insert(index, value); }
        }
    }

}

