import React from 'react'

function ShfaqDenimet({denimi}) {
  return (
    <tr className='text-white'>
        <td>{denimi.pershkrimi}</td>
        <td>{denimi.data}</td>
        <td>{denimi.koha}</td>
        <td>{denimi.denimi+"€"}</td>
    </tr>
    
  )
}

export default ShfaqDenimet