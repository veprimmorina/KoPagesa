import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
from 'mdb-react-ui-kit';
import axios from 'axios';

function Regjistrohu() {
    const [emri, setEmri] = useState()
    const [mbiemri, setMbiemri] = useState()
    const [numriPersonal, setNumriPersonal ]= useState()
    const [emailAdresa, setEmailAdresa] = useState()
    const [fjalkalimin, setFjalkalimi] = useState()
    const [konfirmoFjalkalimin, setKonfirmoFjalkalimin] = useState()
    const [firstPage, setFirstPage] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    const [kodi, setKodi] = useState()
    const [kodiKonfirmues, setKodiKonfirmues] = useState()
    const next = () => {
        let kodiK=(111111+Math.random()*(999999-111111)).toFixed(0)
        setKodi(kodiK)
        axios.get("https://localhost:7235/api/Perdoruesi/ekziston/"+numriPersonal+"/"+emailAdresa).then(response=>{
           if(response.data==true){
            setErrorMessage("Ekzison nje perdorues me keto kredenciale!")
        
           }else{
            setFirstPage(!firstPage)
            setErrorMessage("")
            axios.get("https://localhost:7235/api/Perdoruesi/dergo/kodin/"+emailAdresa+"/"+kodiK)
           } 
        })
        
    }
    const regjistrohu = () => {
        if(kodiKonfirmues==kodi){
        var Perdoruesi ={
            emri: emri,
            mbiemri: mbiemri,
            numriPersonal: numriPersonal,
            emaili: emailAdresa,
            fjalkalimi: fjalkalimin,
        }
        axios.post("https://localhost:7235/api/Perdoruesi",Perdoruesi).then(response=>{
            console.log(response.data)
            setErrorMessage("")
        })
    }else{
        setErrorMessage("Kodi i dhënë gabim")
    }
    }
  return (

    <MDBContainer fluid>
       
    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
      <MDBCardBody>
        <MDBRow>
        
          <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
          {firstPage && <>
            <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Regjistrohu</p>

            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='Emri' id='form1' type='text' className='w-100' onChange={(e)=> setEmri(e.target.value)}/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='Mbiemri' id='form1' type='text' className='w-100' onChange={(e)=> setMbiemri(e.target.value)}/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='Numri Personal' id='form1' type='text' className='w-100' onChange={(e)=> setNumriPersonal(e.target.value)}/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput label='Email Adresa' id='form2' type='email' onChange={(e)=> setEmailAdresa(e.target.value)}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput label='Fjalkalimi' id='form3' type='password' onChange={(e)=> setFjalkalimi(e.target.value)}/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="key me-3" size='lg'/>
              <MDBInput label='Rishkruaj fjalkalimin' id='form4' type='password' onChange={(e)=> setKonfirmoFjalkalimin(e.target.value)}/>
            </div>

            <div className='mb-4'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
            </div>
            <b className='text-danger'>{errorMessage}</b>
            <MDBBtn className='mb-4' size='lg' onClick={()=>next()}>Regjistrohu</MDBBtn>
            </> } 
            {!firstPage && <>
            <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sheno kodin konfirmues te derguar ne email {emailAdresa} </p>

            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label={'Sheno kodin konfirmues'} id='form1' type='text' className='w-100' onChange={(e)=>setKodiKonfirmues(e.target.value)}/>
            </div>
            <b className='text-danger'>{errorMessage}</b>
            <MDBBtn className='mb-4' size='lg' onClick={()=>regjistrohu()}>Konfrimo</MDBBtn>
            </>}   
          </MDBCol>
          <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src='https://static.vecteezy.com/system/resources/previews/004/999/815/original/digital-wallet-logo-design-template-with-pixel-effect-logo-concept-of-credit-card-crypto-wallet-fast-online-payment-free-vector.jpg' fluid/>
          </MDBCol>  
        </MDBRow>
      </MDBCardBody>
    
    </MDBCard>
      
  </MDBContainer>
  )
}

export default Regjistrohu