import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Table } from 'react-bootstrap'
import DenimetTable from './DenimetTable'
import * as Icon from 'react-bootstrap-icons';

function DenimeTable() {
    const [denimet, setDenimet]=useState([])
    const [search, setSearch] = useState("")
    const [numriPersonal,setNumriPersonal] = useState()
    const [adresa,setAdresa] = useState()
    const [data,setData] = useState()
    const [emri,setEmri] = useState()
    const [pershkrimi,setPershkrimi] = useState()
    const [mbiemri,setMbiemri] = useState()
    const [pagesa, setPagesa] = useState()
    const [ora, setOra]= useState()
    const [kerkoData, setKerkoData] = useState()
    
    const [showM, setShowM] = useState(false)
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear()
    const time = newDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const handleClose = () => {
        setShowM(false)
    }
    const denimiForm = (patenti)=> {
      setEmri(patenti.emri)
      setNumriPersonal(patenti.numriPersonal)
      setMbiemri(patenti.mbiemri)
      setShowM(true)
    }
    const shtoDenimin = () => {
      var Fatura = {
        pershkrimi: pershkrimi,
        nrPersonal: numriPersonal,
        data: date+"/"+month+"/"+year,
        koha: time,
        adresa: adresa,
        denimi: pagesa,
        ePaguar: false
    }
    axios.post("https://localhost:7000/api/Gjoba",Fatura).then(response=>{
        axios.get("https://localhost:7235/api/Perdoruesi/confirm/"+Fatura.nrPersonal+"/"+Fatura.denimi+"/"+Fatura.pershkrimi).then(response=>{
          console.log(response.data)
        })
    })
    alert("U Shtua me sukses")
    setShowM(false)
    }
    const dataSearch = () =>{
        axios.get("https://localhost:7000/api/Gjoba/get/by/date/"+kerkoData).then(response=>{
          setDenimet(response.data)
        })
    }
    useEffect(()=>{
        axios.get("https://localhost:7000/api/Gjoba").then(response=>{
            setDenimet(response.data)
            console.log(response.data)
        })    
    },[])
    const searchDenimet = () =>{
      axios.get("https://localhost:7000/api/Gjoba/get/"+search).then(response=>{
        setDenimet(response.data)
        console.log(response.data)
    })
    }
  return (
    <>
    <div className='d-flex justify-content-between mt-3 mb-3'>
      <div>
      <input type="search" onChange={(e)=>setSearch(e.target.value)}/>
      <button className='btn btn-success' onClick={searchDenimet}><Icon.Search color='white' /></button>
    </div>
    <div>
      <input type="date" onChange={(e)=> setKerkoData(e.target.value)}/>
      <Button variant="success" onClick={()=>dataSearch()}><Icon.Search color='white' /></Button>
    </div>
    <div>
    <Button variant='primary' onClick={()=>setShowM(true)}>Shto denimin</Button>
    </div>
    </div>
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
            <DenimetTable key={denimi+denimi.id} denimet={denimi} />
        ))}
        </tbody>
      </Table>
      <Modal show={showM} onHide={handleClose} className='text-center mt-5'>              
     <Modal.Header closeButton className='policia'>
      <Modal.Title className='text-center'>Gjoba</Modal.Title>
     </Modal.Header>
    <Modal.Body className="modal-payment">                  
      <Form>
        <Form.Group>
          <Form.Label>Numri Personal:</Form.Label>
          <Form.Control type="text" onChange={(e)=>setNumriPersonal(e.target.value)}></Form.Control>
          <Form.Label>Emri:</Form.Label>
          <Form.Control type="text" onChange={(e)=>setEmri(e.target.value)}></Form.Control>
          <Form.Label>Mbiemri:</Form.Label>
          <Form.Control type="text" onChange={(e)=>setMbiemri(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Label>Përshkrimi:</Form.Label>
          <textarea className='form-control' onChange={(e)=> setPershkrimi(e.target.value)} ></textarea>
          <Form.Label>Pagesa:</Form.Label>
          <Form.Control type="text" onChange={(e)=> setPagesa(e.target.value)}></Form.Control>
          <Form.Label>Data:</Form.Label>
          <Form.Control type="text" value={year+"-"+"0"+month+"-"+date} disabled readOnly></Form.Control>
          <Form.Label>Ora:</Form.Label>
          <Form.Control type="text" value={time} disabled readOnly></Form.Control>
          <Form.Label>Adresa:</Form.Label>
          <Form.Control type="text" onChange={(e)=> setAdresa(e.target.value)}></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
                        Anulo
        </Button>    
        <Button variant="primary" onClick={()=>shtoDenimin()}>
          Shto denimin
        </Button>
                     
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default DenimeTable