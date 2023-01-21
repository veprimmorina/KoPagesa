import axios from 'axios'
import { MDBInput } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import GjobatId from './GjobatId'

function Gjobat({gjobaP,gjobaKI,gjobaE, gjobaEm, gjobaMb}) {
  
  const [showM,setShowM] = useState(false)
  const [firstPage, setFirstPage] = useState(true)
  const [gjobat,setGjobat]=useState([])
  const [gjoba,setGjoba]=useState()

  useEffect(()=>{
    axios.get("https://localhost:7000/api/Gjoba/gjoba/numri/"+gjobaP).then(response=>{
      setGjobat(response.data)
      console.log(response.data)
    })
  },[])

  const handleClose = () => {
    setShowM(false)
  }
  const paguaj = (id) =>{
    setShowM(true)
    setGjoba()
  } 
  const paguajFaturen = () => {
    setFirstPage(false)
  }
  const kryejPagesen = (gjoba)=> {
    setGjoba(gjoba)
    setShowM(true)
  }
  const paguajGjoben = (id,nrPersonal) => {
    axios.get("https://localhost:7000/api/Gjoba/paguaj/faturen/5"+"/"+id).then(response=>{
      console.log(response.data)
    })
    alert("U pagu me sukses")
  }

  return (
    <>
    <div className='fine'>
    <div className='bg-danger text-center text-white mt-3 rounded'>
      { 
      gjobat.map(gjoba=>(<GjobatId key={gjoba+gjoba.id} gjoba={gjoba} gjobaE={gjobaE} gjobaEm={gjobaEm} gjobaKI={gjobaKI} gjobaMb={gjobaMb}/>))
    }
    </div>
    {gjoba!=undefined ? 
      <Modal show={showM} onHide={handleClose} className='text-center mt-5'>              
        { firstPage==true ? 
      <><Modal.Header closeButton className='policia'>
          <Modal.Title className='text-center'>Gjoba</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-payment">                  
          <Form>
            <Form.Group>
              <Form.Label>Gjoba:</Form.Label>
              <Form.Control type="text" disabled value={gjoba.pershkrimi} readOnly></Form.Control>
              </Form.Group>
              <Form.Label>Pagesa:</Form.Label>
              <Form.Control type="text" value={gjoba.denimi+" €"} readOnly disabled></Form.Control>
              
              <Form.Label>Ora dhe data:</Form.Label>
              <Form.Control type="text" value={gjoba.data+" - "+gjoba.koha} disabled readOnly ></Form.Control>
              <Form.Label>Adresa:</Form.Label>
              <Form.Control type="text" value={gjoba.adresa} disabled readOnly ></Form.Control>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                            Anulo
            </Button>    
            <Button variant="primary" onClick={()=>paguajFaturen()}>
              Paguaj
            </Button>
                         
          </Modal.Footer>
          </>
          :
          <>
          <Modal.Header className="stripe">
            <Modal.Title className='text-center invisible'>Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
           <Form>
            <Form.Group>
              <Form.Label>Stripe Id:</Form.Label>
              <MDBInput wrapperClass='mb-4' className='mr-5'  id='formControlLg' type='email' size="sm"/>            </Form.Group>
            
            <MDBInput wrapperClass='mb-4' className='mr-5 mt-4' label='Numri i karteles'  id='formControlLg' type='email' size="sm"/>
            <div className='d-flex'>
              <MDBInput wrapperClass='mb-4' className='mr-5' label='Expiration' placeholder='MM/YY' id='formControlLg' type='email' size="sm"/>
              <MDBInput wrapperClass='mb-4' className='mr-5' label='CVC' id='formControlLg' placeholder='CVC' type='email' size="sm" />
              <MDBInput wrapperClass='mb-4' className='mr-5' label='Pagesa' id='formControlLg' type='email' size="sm" value={gjoba.denimi+" €"} disabled readOnly/>
            </div>
            <p className=" pb-lg-2 " style={{color: '#393f81'}}>Don't have an account? </p>
           </Form>
           <p className="text-danger"></p>
          </Modal.Body>
          <Modal.Footer className="payment">
            <Button variant="secondary" onClick={()=> setFirstPage(true)}>
             Prapa
            </Button>
       
            <Button variant="primary" onClick={()=> paguajGjoben(gjoba.id,gjoba.nrPersonal)}>
              Paguaj
            </Button>
           
          </Modal.Footer>
          </>
          }
        </Modal>
 : <p></p>}
               </div> </>
        
  )
}

export default Gjobat