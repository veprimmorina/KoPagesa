import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function ShfaqDenimet({denimi}) {
  const shikoGjoben = (id) =>{
    alert(id)
  }
  return (
    <tr className='text-white'>
        <td>{denimi.pershkrimi}</td>
        <td>{denimi.data}</td>
        <td>{denimi.koha}</td>
        <td>{denimi.denimi+"€"}</td>
        <td><Link to={'/gjoba/'+denimi.id}><Button onClick={()=>shikoGjoben(denimi.id)} variant="danger">Shiko gjoben</Button></Link></td>
    </tr>
    
  )
}

export default ShfaqDenimet