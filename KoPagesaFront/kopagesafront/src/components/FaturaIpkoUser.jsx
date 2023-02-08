import axios from 'axios'
import { MDBInput } from 'mdb-react-ui-kit'
import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Context } from './Profili'

export const ModalContext = createContext()
function FaturaIpkoUser({user,email}) {
    const value = useContext(Context)
    const [showM, setShowM] = useState()
    const [numriKarteles, setNumriKarteles] = useState()
    const [expiration, setExpiration] = useState()
    const [CVC, setCVC] = useState()
    const [pagesa, setPagesa] = useState()
    const [errorMessage, setErrorMessage]= useState()
    const [fId, setFaturaId] = useState()
    const [pershkrimi, setPershkrimi] = useState()
    const showModal = (fatura) =>{
        setPagesa(fatura.denimi)
        setFaturaId(fatura.id)
        setPershkrimi(fatura.pershkrimi)
        setShowM(true)
    }
    const paguaj = () =>{
        var Customer = {
            customerId: user.kartelaId,
            receiptEmail: user.emaili,
            description: pershkrimi,
            currency: "EUR",
            amount: pagesa*100
          }
          var Pagesa = {
            shuma: pagesa,
            nrPersonal: user.nrPersonal,
            emri: user.emri,
            mbiemri: user.mbiemri,
            llojiPageses: "",
            pagesaPer: 1,
            pershkrimi: pershkrimi
          }
          axios.post("https://localhost:7208/api/Stripe/payment/add",Customer).then(response=>{
            console.log(response.data)
            axios.post('https://localhost:7000/api/Faturas/fatura/paguaj/'+fId+"/"+user.emri+"/"+user.mbiemri).then(response=>{
                axios.post("https://localhost:7208/api/Pagesats/konfirmo/pagesen/"+user.emri+"/"+user.mbiemri+"/"+Customer.amount+"/"+Customer.description+"/"+user.emaili).then(response=>{
                setErrorMessage("")
                console.log(response.data)
                setShowM(false)
                window.location.href="http://localhost:3000/success"
            })
            })            
          })
    }

  return (
     <>
     
    <div class="col-md-12">   
 <div class="row justify-content-center">
		{value.map(fatura=>(
        <div class="receipt-main col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
            <div class="row">
    			<div class="receipt-header">
					<div class="col-xs-6 col-sm-6 col-md-6">
						<div class="receipt-left">
							<img class="img-responsive" alt="iamgurdeeposahan" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/64/IPKO_logo.svg/1200px-IPKO_logo.svg.png" style={{width: "71px", borderRadius: "43px" }}/>
						</div>
					</div>
					<div class="col-xs-6 col-sm-6 col-md-6 text-right">
						<div class="receipt-right">
							<h5>IPKO</h5>
							<p>+389 49 700 700 <i class="fa fa-phone"></i></p>
							<p>ipko@gmail.com <i class="fa fa-envelope-o"></i></p>
							<p>Prishtinë, Kosovë <i class="fa fa-location-arrow"></i></p>
						</div>
					</div>
				</div>
            </div>
			
			<div class="row">
				<div class="receipt-header receipt-header-mid">
					<div class="col-xs-8 col-sm-8 col-md-8 text-left">
						<div class="receipt-right">
							<h5>Emri dhe mbiemri:  </h5><b>{user.emri+" "+user.mbiemri}</b>
							<p><b>Numri Personal :</b> {fatura.nrPersonal}</p>
							<p><b>Email :</b> {email}</p>
							
						</div>
					</div>
					
				</div>
            </div>
			
            <div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Pershkrimi</th>
                            <th>Cmimi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="col-md-9">{fatura.pershkrimi}</td>
                            <td class="col-md-3"><i class="fa fa-inr"></i> {fatura.denimi+" €"}</td>
                        </tr>
                        
                        <tr>
                            <td class="text-right">
                            <p>
                                <strong>Per pagese: </strong>
                            </p>
                            <p>
                                <strong>Pa TVSH: </strong>
                            </p>
							<p>
                                <strong>TVSH: </strong>
                            </p>
							<p>
                                <strong>Pagesa me TVSH: </strong>
                            </p>
							</td>
                            <td>
                            <p>
                                <strong><i class="fa fa-inr"></i> {fatura.denimi+" €"}</strong>
                            </p>
                            <p>
                                <strong><i class="fa fa-inr"></i> {fatura.denimi-5+" €"}</strong>
                            </p>
							<p>
                                <strong><i class="fa fa-inr"></i>{"5 €"}</strong>
                            </p>
							<p>
                                <strong><i class="fa fa-inr"></i>{fatura.denimi+" €"}</strong>
                            </p>
							</td>
                        </tr>
                        <tr>
                           
                            <td class="text-right"><h2><strong>Total: </strong></h2></td>
                            <td class="text-left text-danger"><h2><strong><i class="fa fa-inr"></i> {fatura.denimi+" €"}</strong></h2></td>
                        </tr>
                    </tbody>
                </table>
            </div>
			
			<div class="row">
				<div class="receipt-header receipt-header-mid receipt-footer">
					<div class="col-xs-8 col-sm-8 col-md-8 text-left">
						<div class="receipt-right">
							<p><b>Data :</b> {fatura.data}</p>
							<h5 style={{color: "rgb(140, 140, 140)"}}>IPKO. RRETHI YT</h5>
						</div>
					</div>
					<div class="col-xs-4 col-sm-4 col-md-4">
						
					</div>
                    <div class="text-center">
							<Button onClick={()=>showModal(fatura)}>Paguaj</Button>
						</div>
				</div>
            </div>
            
        </div>    
        ))}
	</div>
</div> 
<Modal show={showM} onHide={()=>setShowM(false)} className='text-center mt-5'>                          
          <>
          <Modal.Header className="stripe">
            <Modal.Title className='text-center invisible'>Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-payment-body'>
           <Form>
            <MDBInput wrapperClass='mb-4' className='mr-5 mt-4' label='Numri i karteles'  id='formControlLg' type='email' size="sm" onChange={(e)=>setNumriKarteles(e.target.value)}/>
            <div className='d-flex'>
              <MDBInput wrapperClass='mb-4' className='mr-5' label='Expiration' placeholder='MM/YY' id='formControlLg' type='email' size="sm" onChange={(e)=>setExpiration(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' className='mr-5' label='CVC' id='formControlLg' placeholder='CVC' type='password' size="sm" onChange={(e)=>setCVC(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' className='mr-5' label='Pagesa' id='formControlLg' type='email' size="sm" value={pagesa+"€"} disabled />
            </div>
            <p className=" pb-lg-2 " style={{color: '#393f81'}}>Don't have an account? </p>
           </Form>
           <p className="text-danger">{errorMessage}</p>
          </Modal.Body>
          <Modal.Footer className="payment-modal modal-payment-body">
            <Button variant="secondary" onClick={()=>setShowM(false)}>
             Prapa
            </Button>
            <Button variant="primary" onClick={()=> paguaj()}>
              Paguaj
            </Button>
          </Modal.Footer>
          </> 
    </Modal>
</>
  )
}

export default FaturaIpkoUser