using System.Runtime.InteropServices;
using System.Runtime.Serialization;

namespace KoPagesa.Exception
{
    [SerializableAttribute]
    [ComVisibleAttribute(true)]
    public class KoPagesaException : SystemException
    {
        
        protected KoPagesaException(SerializationInfo serializationInfo, StreamingContext streamingContext)
        {
            throw new NotImplementedException();
        }
        
        public KoPagesaException(string message) : base(message)
        {

        }

    }
}
