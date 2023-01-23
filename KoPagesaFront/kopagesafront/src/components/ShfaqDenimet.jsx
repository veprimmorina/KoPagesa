import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'
function ShfaqDenimet({denimi}) {
  
  return (
    <tr className='text-white'>
        <td>{denimi.pershkrimi}</td>
        <td>{denimi.data}</td>
        <td>{denimi.koha}</td>
        <td>{denimi.denimi+"€"}</td>
        <td><Link to={'/gjoba/'+denimi.id}><Button variant="danger"><Icon.Receipt size={20} color='black'/></Button></Link></td>
    </tr>
    
  )
}

export default ShfaqDenimet