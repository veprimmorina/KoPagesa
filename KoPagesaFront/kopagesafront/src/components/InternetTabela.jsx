import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import PagesatIpko from './PagesatIpko'

export const InternetContext = createContext()
function InternetTabela() {

  const [pagesat, setPagesat ] = useState()
  useEffect(()=>{
    axios.get("https://localhost:7000/api/Faturas/merr/pagesat/ipko").then(response=>{
      setPagesat(response.data)
    })
  },[])
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
          <InternetContext.Provider value={pagesat}>
            <PagesatIpko />  
          </InternetContext.Provider>            
        </tbody>
    </Table>
  )
}

export default InternetTabela