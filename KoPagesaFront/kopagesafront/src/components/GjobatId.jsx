import axios from 'axios'
import { MDBInput } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { format, setDate } from 'date-fns'
import { useEffect } from 'react'


function GjobatId({gjoba,gjobaKI,gjobaE,gjobaEm,gjobaMb}) {
    const [showM,setShowM] = useState(false)
    const [firstPage, setFirstPage] = useState(true)
    const [dataCheck,setDat] = useState()
    const [perPagese, setPerPagese] = useState()
    const handleClose = () => {
        setShowM(false)
      }
    const kryejPagesen = () => {
        setShowM(true)
        console.log(dataCheck[0])
    }
    const paguajFaturen = () => {
        setFirstPage(false)
      }
    var dat = Date.parse(gjoba.data);
    var date = format(dat, 'dd/mm/yyyy');
   useEffect(()=>{
    axios.get("https://localhost:7000/api/Gjoba/get/older/"+gjoba.id).then(response=>{
    console.log(response.data)  
    response.data.length<19 ? setDat([1],[3]) :
      setDat(response.data.split("."))
      console.log(response.data.split("."))
    })
   },[])
      
      const paguajGjoben = (gjobaPerPagese) => {
        axios.get("https://localhost:7000/api/Gjoba/paguaj/faturen/"+gjobaPerPagese.nrPersonal+"/"+gjobaPerPagese.id).then(response=>{
          console.log(response.data)
          var Customer = {
            customerId: gjobaKI,
            receiptEmail: gjobaE,
            description: " Pagese per gjobe",
            currency: "EUR",
            amount:  dataCheck[0]>=0 && dataCheck[0]<=14 ? ((gjobaPerPagese.denimi/2)*100) : gjobaPerPagese.denimi*100
          }
          axios.post("https://localhost:7208/api/Stripe/payment/add",Customer).then(response=>{
            console.log(response.data)
            axios.post("https://localhost:7208/api/Pagesats/konfirmo/pagesen/"+gjobaEm+"/"+gjobaMb+"/"+Customer.amount+"/"+Customer.description+"/"+gjobaE).then(response=>{
              console.log(response.data)
              var Fatura = {
                shuma: dataCheck[0]>=0 && dataCheck[0]<=14 ? ((gjobaPerPagese.denimi/2)) : gjobaPerPagese.denimi,
                nrPersonal: gjobaPerPagese.nrPersonal,
                emri: gjobaEm,
                mbiemri: gjobaMb,
                llojiPageses: "gjoba",
                pagesaPer: 0,
                pershkrimi: gjobaPerPagese.pershkrimi
              }
              axios.post("https://localhost:7208/api/Pagesats/gjoba",Fatura).then(response=>{
                console.log(response.data)
                window.location.href='http://localhost:3000/success'
            })
            setShowM(false)
            })
          })
          
        })
       
      }
  return (
        <>
         <div className="card mt-3 shadow bg-success">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between bg-danger text-white align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>{gjoba.pershkrimi}</h6>
                
                    <span className="text-white">{gjoba.denimi+" €"}</span>
                    <Button variant='dark' onClick={()=>kryejPagesen(gjoba)}>Paguaj</Button>

                  </li>
                  </ul>
              </div>
       
         
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
              {dataCheck!=undefined ? <Form.Control type="text" value={dataCheck[0]>=0 && dataCheck[0]<=14 ? gjoba.denimi /2 +" €": gjoba.denimi+" €"} readOnly disabled></Form.Control>: <p></p>}
              <Form.Label>Ora dhe data:</Form.Label>
              
              <Form.Control type="text" value={gjoba.data+" - "+gjoba.koha} disabled readOnly ></Form.Control>
              <Form.Label>Adresa:</Form.Label>
              <Form.Control type="text" value={gjoba.adresa} disabled readOnly ></Form.Control>
             {dataCheck!=undefined ? <b className={dataCheck[0]>=0 && dataCheck[0]<=14 ? "text-success" : "text-danger"}>{dataCheck[0]>=0 && dataCheck[0]<=14 ? "Gjoba ende nuk ka kaluar periudhen 2 javore andaj ju paguani vetëm gjysmën e shumës së sajë": "Gjoba ka kaluar periudhen 2 javore andaj duhet të paguhet shuma e plotë "}</b>: <p></p>}
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
            
            <MDBInput wrapperClass='mb-4' className='mr-5 mt-4' label='Numri i karteles'  id='formControlLg' type='email' size="sm"/>
            <div className='d-flex'>
              <MDBInput wrapperClass='mb-4' className='mr-5' label='Expiration' placeholder='MM/YY' id='formControlLg' type='email' size="sm"/>
              <MDBInput wrapperClass='mb-4' className='mr-5' label='CVC' id='formControlLg' placeholder='CVC' type='email' size="sm" />
              <MDBInput wrapperClass='mb-4' className='mr-5' label='Pagesa' id='formControlLg' type='email' size="sm" value={dataCheck[0]>=0 && dataCheck[0]<=14 ? gjoba.denimi /2 +" €": gjoba.denimi+" €"} disabled readOnly/>
            </div>
            <p className=" pb-lg-2 " style={{color: '#393f81'}}>Mundesuar nga KOPagesa</p>
           </Form>
           <p className="text-danger"></p>
          </Modal.Body>
          <Modal.Footer className="payment-modal">
            <Button variant="secondary" onClick={()=> setFirstPage(true)}>
             Prapa
            </Button>
            <Button variant="primary" onClick={()=> paguajGjoben(gjoba)}>
              Paguaj
            </Button>
          </Modal.Footer>
          </>
          }
        </Modal>
         </>
         
       )
  
}

export default GjobatId