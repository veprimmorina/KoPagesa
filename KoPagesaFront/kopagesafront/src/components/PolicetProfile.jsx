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
    const showModal = () => {
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
    useEffect(()=>{
        axios.get("https://localhost:7235/api/Perdoruesi/polici/morinaveprim1@gmail.com").then(response=>{
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
                <MDBCardImage src="data:image/jpeg;base64,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"
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
          <Form.Control type="text" value={date+"/"+month+"/"+year} disabled></Form.Control>
          <Form.Label>Ora:</Form.Label>
          <Form.Control type="text" value={time} disabled></Form.Control>
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