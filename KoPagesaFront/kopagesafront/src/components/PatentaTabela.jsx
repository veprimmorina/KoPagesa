import axios from 'axios'
import { MDBBadge, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import React, { useCallback, useEffect, useState } from 'react'
import { Button, Form, Modal, Table } from 'react-bootstrap'
import PatentetTabela from './PatentetTabela'

function PatentaTabela() {
    const [patenta, setPatenta]=useState([])
    const [searchPatenta, setSearchPatenta]=useState(false)
    const [search, setSearch] = useState("")
    const [shfaqShto, setShfaqShto]=useState(false)
    const [emri, setEmri] = useState()
    const [mbiemri,setMbiemri]=useState()
    const [fotografia, setFotografia] = useState()
    const [nrPersonal, setNrPersonal] = useState()
    const [aktive, setAktive] = useState()
    const [komuna, setKomuna]=useState()
    const [dataLindjes, setDataLindjes] = useState()
    const [dataLeshimit, setDataLeshimit] = useState()
    const [dataSkadences, setDataSkadences] = useState()

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
    const shto = () =>{
      setShfaqShto(true)
    }
    const handleClose = () =>{
      setShfaqShto(false)
    }
    const shtoPatenten = () =>{
      var Patenta = {
        fotografia: fotografia,
        emri: emri,
        mbiemri: mbiemri,
        dataLindjes: dataLindjes,
        numriPersonal : nrPersonal,
        komuna: komuna,
        dataLeshimit: dataLeshimit,
        dataSkadences: dataSkadences,
        eAktivizuar: true 
      }
      axios.post("https://localhost:7235/api/Patenta",Patenta).then(response=>{
        console.log(response.data)
      })
      axios.get("https://localhost:7235/api/Patenta").then(response=>{
        setPatenta(response.data)
      })
    }
  return (
    <>
    <div className='d-flex justify-content-between'>
      <div>
        <input type="search" onChange={(e)=>setSearch(e.target.value)}/>
        <button className='btn btn-success' onClick={searchPatentShoferi}><i className='bi bi-search'></i></button>
      </div>
      <div>
      <Button variant='primary' onClick={()=>shto()}>Shto patenten</Button>
      </div>  
    </div>
      <Table striped border hover variant='dark'>
        <thead>
          <tr>
            <th>Fotografia</th>
            <th>Emri</th>
            <th>Mbiemri</th>
            <th>Numri personal</th>
            <th>Statusi</th>
            <th>Kontrollo patenten</th>
            <th>Aktivizo/Deaktivizo</th>
            <th>Shto denim</th>
          </tr>
        </thead>
        <tbody>
        {patenta.map(patenti=>(
            <PatentetTabela key={patenti+patenti.id} patenti={patenti} />
        ))}
        </tbody>
      </Table>
      <Modal show={shfaqShto} onHide={handleClose} className='text-center mt-5'>              
        
      <Modal.Header closeButton className='policia'>
          <Modal.Title className='text-center'>Gjoba</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-payment">                  
          <Form>
            <Form.Group>
              <Form.Label>Fotografia:</Form.Label>
              <Form.Control type="text" onChange={(e)=> setFotografia(e.target.value)}></Form.Control>
              </Form.Group>
              <Form.Label>Emri:</Form.Label>
              <Form.Control type="text" onChange={(e)=> setEmri(e.target.value)}></Form.Control>
              <Form.Label>Mbiemri:</Form.Label>
              <Form.Control type="text" onChange={(e)=> setMbiemri(e.target.value)}></Form.Control>
              <Form.Label>Numri Personal:</Form.Label>
              <Form.Control type="text" onChange={(e)=> setNrPersonal(e.target.value)}></Form.Control>
              <Form.Label>Aktive</Form.Label>
              <div className='form-group'>
              <select onChange={(e)=> setAktive(e.target.value)} className="form-control"><option>-</option><option value="true">Aktive</option><option value="false">Deaktivizo</option></select>
              </div>
              <Form.Label>Komuna:</Form.Label>
              <Form.Control type="text" onChange={(e)=> setKomuna(e.target.value)}></Form.Control>
              <Form.Label>Data Leshimit:</Form.Label>
              <Form.Control type="date" onChange={(e)=> setDataLeshimit(e.target.value)}></Form.Control>
              <Form.Label >Data Skadences:</Form.Label>
              <Form.Control type="date" onChange={(e)=>  setDataSkadences(e.target.value)}></Form.Control>
              <Form.Label>Data Lindjes:</Form.Label>
              <Form.Control type="date" onChange={(e)=> setDataLindjes(e.target.value)}></Form.Control>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Anulo
            </Button>    
            <Button variant="primary" onClick={()=>shtoPatenten()}>
              Shto
            </Button>
          </Modal.Footer>
          </Modal>
    </>
  )
}

export default PatentaTabela