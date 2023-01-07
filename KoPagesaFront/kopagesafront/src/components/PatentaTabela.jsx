import axios from 'axios'
import { MDBBadge, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import PatentetTabela from './PatentetTabela'

function PatentaTabela() {
    const [patenta, setPatenta]=useState([])

    useEffect(()=>{
        axios.get("https://localhost:7235/api/Patenta").then(response=>{
            setPatenta(response.data)
            console.log(response.data)
        })
    },[])
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
          <th scope='col'>Position</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {patenta.map(patenti=>(
            <PatentetTabela key={patenti+patenti.id} patenti={patenti} />
        ))}
      </MDBTableBody>
    </MDBTable>
  )
}

export default PatentaTabela