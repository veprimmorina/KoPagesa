import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import DenimetPaPaguar from './DenimetPaPaguar'
import * as Icon from 'react-bootstrap-icons'
function DenimePaPaguar() {
    const [denimet, setDenimet]=useState([])
    const [search, setSearch] = useState("")
    useEffect(()=>{
        axios.get("https://localhost:7000/api/Gjoba/get/unpaid").then(response=>{
            setDenimet(response.data)
            console.log(response.data)
        })    
    },[])
    const searchDenimet = () =>{
      axios.get("https://localhost:7000/api/Gjoba/get/unpaid/"+search).then(response=>{
        setDenimet(response.data)
        console.log(response.data)
    })
    }
  return (
    <>
    <input type="search" onChange={(e)=>setSearch(e.target.value)}/>
    <button className='btn btn-success' onClick={searchDenimet}><Icon.Search color='white' /></button>
      <Table striped border hover variant='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>Pershkrimi</th>
            <th>Nr Personal</th>
            <th>Data</th>
            <th>Koha</th>
            <th>Adresa</th>
            <th>Pagesa</th>
            <th>E Paguar</th>
          </tr>
        </thead>
        <tbody>
        {denimet.map(denimi=>(
            <DenimetPaPaguar key={denimi+denimi.id} denimet={denimi} />
        ))}
        </tbody>
      </Table>
    </>
  )
}

export default DenimePaPaguar