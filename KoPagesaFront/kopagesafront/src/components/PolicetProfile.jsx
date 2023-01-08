import React, { useEffect, useState } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Button, Form, Modal } from 'react-bootstrap';

function PolicetProfile() {
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
    const handleClose = () => {
        setShowM(false)
    }
    const showModal = () => {
        setShowM(true)
    }
    const shtoDenimin = () => {
        var Fatura = {
            pershkrimi: pershkrimi,
            nrPersonal: numriPersonal,
            data: data,
            koha: ora,
            adresa: adresa,
            denimi: pagesa,
            ePaguar: false
        }
        axios.post("https://localhost:7000/api/Gjoba",Fatura).then(response=>{
            console.log(response.data)
        })
        alert("U Shtua me sukses")
        setShowM(false)
       
    } 
    useEffect(()=>{
        axios.get("https://localhost:7235/api/Perdoruesi/polici/morinaveprim@gmail.com").then(response=>{
        setPolici(response.data)
        })
    },[])
  return (
    <>
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
        { polici!=undefined ?
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="6" className="mb-4 mb-lg-0">
          <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
            <MDBRow className="g-0">
              <MDBCol md="4" className="gradient-custom text-center text-white bg-primary"
                style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                <MDBTypography tag="h5">{polici.emri+" "+polici.mbiemri}</MDBTypography>
                <MDBCardText>Polic</MDBCardText>
                <MDBIcon far icon="edit mb-5" />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody className="p-4">
                  <MDBTypography tag="h6">Information</MDBTypography>
                  <hr className="mt-0 mb-4" />
                  <MDBRow className="pt-1">
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6">Email</MDBTypography>
                      <MDBCardText className="text-muted">{polici.emaili}</MDBCardText>
                    </MDBCol>
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6">Phone</MDBTypography>
                      <MDBCardText className="text-muted">123 456 789</MDBCardText>
                    </MDBCol>
                  </MDBRow>

                  <MDBTypography tag="h6">Information</MDBTypography>
                  <hr className="mt-0 mb-4" />
                  <MDBRow className="pt-1">
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6">Email</MDBTypography>
                      <MDBCardText className="text-muted">info@example.com</MDBCardText>
                    </MDBCol>
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6">Phone</MDBTypography>
                      <MDBCardText className="text-muted">123 456 789</MDBCardText>
                    </MDBCol>
                  </MDBRow>

                  <div className="d-flex justify-content-start">
                    <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                    <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                    <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                  </div>
                  <Button variant="danger" className='text-center' onClick={()=> showModal()}>Shto denim</Button>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
     : <div></div>}
  </section>
   
    
    <Modal show={showM} onHide={handleClose} className='text-center mt-5'>              
     <Modal.Header closeButton className='policia'>
      <Modal.Title className='text-center'>Gjoba</Modal.Title>
     </Modal.Header>
    <Modal.Body className="modal-payment">                  
      <Form>
        <Form.Group>
          <Form.Label>Numri Personal:</Form.Label>
          <Form.Control type="text" onChange={(e)=> setNumriPersonal(e.target.value)}></Form.Control>
          <Form.Label>Emri:</Form.Label>
          <Form.Control type="text" onChange={(e)=> setEmri(e.target.value)}></Form.Control>
          <Form.Label>Mbiemri:</Form.Label>
          <Form.Control type="text" onChange={(e)=> setMbiemri(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Label>Përshkrimi:</Form.Label>
          <Form.Control type="text" onChange={(e)=> setPershkrimi(e.target.value)}></Form.Control>
          <Form.Label>Pagesa:</Form.Label>
          <Form.Control type="text" onChange={(e)=> setPagesa(e.target.value)}></Form.Control>
          <Form.Label>Data:</Form.Label>
          <Form.Control type="text" onChange={(e)=> setData(e.target.value)}></Form.Control>
          <Form.Label>Ora:</Form.Label>
          <Form.Control type="text" onChange={(e)=> setOra(e.target.value)}></Form.Control>
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

export default PolicetProfile