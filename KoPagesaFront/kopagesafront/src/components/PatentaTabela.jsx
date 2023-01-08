import axios from 'axios'
import { MDBBadge, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React, { useCallback, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import PatentetTabela from './PatentetTabela'

function PatentaTabela() {
    const [patenta, setPatenta]=useState([])
    const [searchPatenta, setSearchPatenta]=useState(false)
    const [search, setSearch] = useState("")
    useEffect(()=>{
        axios.get("https://localhost:7235/api/Patenta").then(response=>{
            setPatenta(response.data)
            console.log(response.data)
        })    
    },[])
    const searchPatentShoferi = () =>{
      axios.get("https://localhost:7235/api/Patenta/get/"+search).then(response=>{
        setPatenta(response.data)
        console.log(response.data)
    })
    }
  return (
    <>
    <input type="search" onChange={(e)=>setSearch(e.target.value)}/>
    <button className='btn btn-success' onClick={searchPatentShoferi}><i className='bi bi-search'></i></button>
      <Table striped border hover variant='dark'>
        <thead>
          <tr>
            <th>Fotografia</th>
            <th>Emri</th>
            <th>Mbiemri</th>
            <th>Numri personal</th>
            <th>Statusi</th>
            <th>Kontrollo patenten</th>
          </tr>
        </thead>
        <tbody>
        {patenta.map(patenti=>(
            <PatentetTabela key={patenti+patenti.id} patenti={patenti} />
        ))}
        </tbody>
      </Table>
    </>
  )
}

export default PatentaTabela