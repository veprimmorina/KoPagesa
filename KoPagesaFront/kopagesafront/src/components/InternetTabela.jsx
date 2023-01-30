import React from 'react'
import { Button, Table } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
function InternetTabela() {
  return (
    <Table striped hover >
        <thead>
            <tr>
            <th>Nr. Personal</th>
            <th>Emri dhe mbiemri</th>
            <th>Pagesa</th>  
            <th>Detajet</th>
            </tr>  
        </thead>        
        <tbody>
            <tr>
            <td>a</td>
            <td>ab</td>
            <td>abc</td>
            <td><Button><Icon.Receipt size={20}/></Button></td>
            </tr>
        </tbody>
    </Table>
  )
}

export default InternetTabela