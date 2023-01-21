import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit'
import { Link } from "react-router-dom";
import Switch from "react-switch";
import React, { useState } from 'react'
import { Button, Form, FormControl, Modal } from 'react-bootstrap';
import axios from 'axios';

function PatentetTabela({patenti}) {
  const [polici, setPolici] = useState()
    const [numriPersonal,setNumriPersonal] = useState()
    const [adresa,setAdresa] = useState()
    const [data,setData] = useState()
    const [emri,setEmri] = useState()
    const [pershkrimi,setPershkrimi] = useState()
    const [mbiemri,setMbiemri] = useState()
    const [pagesa, setPagesa] = useState()
    const [ora, setOra]= useState()
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
      var Gjoba = {
        tipi: "gjobe",
        lloji: 0,
        pershkrimi: pershkrimi,
        nrPersonal: numriPersonal,
        data: year+"-0"+month+"-"+date,
        koha: time,
        adresa: adresa,
        denimi: pagesa,
        ePaguar: false
    }
    alert(Gjoba.denimi)
    axios.post("https://localhost:7000/api/Gjoba",Gjoba).then(response=>{
        axios.get("https://localhost:7235/api/Klienti/confirm/"+Gjoba.nrPersonal+"/"+Gjoba.denimi+"/"+Gjoba.pershkrimi).then(response=>{
          console.log(response.data)
        })
    })
    alert("U Shtua me sukses")
    setShowM(false)
    }
  const deaktivizo = (id) => {
    axios.get("https://localhost:7235/api/Patenta/deaktivizo/"+id).then(response=>{
      console.log(response.data)
    })
  }
  const aktivizo = (id) => {
    axios.get("https://localhost:7235/api/Patenta/aktivizo/"+id).then(response=>{
      console.log(response.data)
    })
  }
  return (
    <>
    <tr>
          <td>
              <img
                src={patenti.fotografia}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
          </td>
          <td>{patenti.emri}</td>
          <td>{patenti.mbiemri}</td>
          <td>{patenti.numriPersonal}</td>
          <td>
            {patenti.eAktivizuar==true ?
              <MDBBadge color='success' pill>
              Aktive
              </MDBBadge> :
              <MDBBadge color='danger' pill>
              E deaktivizuar
            </MDBBadge>
            }
            
          </td>
         
          <td>
                <Link to={'patenta/'+patenti.id} target="_blank">
                <MDBBtn color='link' rounded size='sm'>
                      Shiko patent shoferin
                </MDBBtn>
              </Link>
          </td>
          <td>{patenti.eAktivizuar==true ? 
             <Button variant="danger" onClick={()=>deaktivizo(patenti.id)}>Deaktivizo</Button>
             : <Button variant="success" onClick={()=>aktivizo(patenti.id)}>Aktivizo</Button>
          }</td>
          <td><Button variant="warning" onClick={()=>denimiForm(patenti)}>Shto Denim</Button></td>
        </tr>
        <Modal show={showM} onHide={handleClose} className='text-center mt-5'>              
     <Modal.Header closeButton className='policia'>
      <Modal.Title className='text-center'>Gjoba</Modal.Title>
     </Modal.Header>
    <Modal.Body className="modal-payment">                  
      <Form>
        <Form.Group>
          <Form.Label>Numri Personal:</Form.Label>
          <Form.Control type="text" value={numriPersonal}  disabled readOnly></Form.Control>
          <Form.Label>Emri:</Form.Label>
          <Form.Control type="text" value={emri}  disabled readOnly></Form.Control>
          <Form.Label>Mbiemri:</Form.Label>
          <Form.Control type="text" value={mbiemri}  disabled readOnly></Form.Control>
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

export default PatentetTabela