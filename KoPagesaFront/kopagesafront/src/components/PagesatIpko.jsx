import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { InternetContext } from './InternetTabela'
import * as Icon from 'react-bootstrap-icons'

function PagesatIpko() {
    const pagesa = useContext(InternetContext)
  return (
    <>
    {pagesa!=undefined ? 
    pagesa.map(pagese=>( 
        <tr>
        <td>{pagese.nrPersonal}</td>
        <td>{pagese.data}</td>
        <td>{pagese.koha}</td>
        <td>{pagese.denimi+"€"}</td>
        <td><Button><Icon.Receipt size={20}/></Button></td>
    </tr>))
   
    : <tr></tr>}
    </>
  )
}

export default PagesatIpko