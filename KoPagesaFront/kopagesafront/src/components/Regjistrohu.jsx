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
    const [shtoKartel,setShtoKartel] = useState("")
    const [kartela,setKartela] = useState(false)
    const [teDhenat, setTeDhenat]=useState("d-none")
    const [cardNumber, setCardNumber] = useState("")
    const [cardHolderName, setCardHolderName] = useState("")
    const [expiration, setExpiration]=useState("")
    const [CVC, setCVC] = useState("")
    const date=new Date();
    var month=date.getMonth()+1;
    var year=date.getFullYear();
    const next = () => {
      if(kartela==true){
      if(cardNumber!="4242424242424242"){
        setErrorMessage('Invalid Card Number!')
      }else if(cardHolderName==""){
        setErrorMessage('Card holder name can not be blank!')
      }else if(expiration==""||parseInt(expiration.substring(3,7))<parseInt(year)||parseInt(expiration.substring(0,2))<parseInt(month)||parseInt(expiration.substring(0,2))>12){
        setErrorMessage('Expiration card!')
      }else if(CVC.length<3){
        setErrorMessage('Your CVC should be exactly 3 digits!')
      }else{
        setErrorMessage('')
        setTeDhenat("d-none")
        setShtoKartel("")
        let kodiK=(111111+Math.random()*(999999-111111)).toFixed(0)
        setKodi(kodiK)
        axios.get("https://localhost:7235/api/Klienti/ekziston/"+numriPersonal+"/"+emailAdresa).then(response=>{
           if(response.data==true){
            setErrorMessage("Ekzison nje perdorues me keto kredenciale!")
           }else{
            setFirstPage(!firstPage)
            setErrorMessage("")
            axios.get("https://localhost:7235/api/Klienti/dergo/kodin/"+emailAdresa+"/"+kodiK)
           } 
        })
      }
    }else{
      let kodiK=(111111+Math.random()*(999999-111111)).toFixed(0)
        setKodi(kodiK)
        axios.get("https://localhost:7235/api/Klienti/ekziston/"+numriPersonal+"/"+emailAdresa).then(response=>{
           if(response.data==true){
            setErrorMessage("Ekzison nje perdorues me keto kredenciale!")
           }else{
            setFirstPage(!firstPage)
            setErrorMessage("")
            axios.get("https://localhost:7235/api/Klienti/dergo/kodin/"+emailAdresa+"/"+kodiK)
           } 
        })
    }
  }
    const regjistrohu = () => {
        if(kodiKonfirmues==kodi){
  
        var Customer = {
          email: emailAdresa,
          name: emri+" "+mbiemri,
          creditCard: {
            name: cardHolderName,
            cardNumber: cardNumber,
            expirationYear: expiration.substring(3,7),
            expirationMonth: expiration.substring(0,2),
            cvc: CVC
        }
        }
        axios.post("https://localhost:7208/api/Stripe/customer/add",Customer).then(res=>{
         
        var Perdoruesi ={
            emri: emri,
            mbiemri: mbiemri,
            numriPersonal: numriPersonal,
            emaili: emailAdresa,
            fjalkalimi: fjalkalimin,
            numriKarteles: cardNumber,
            dataSkadimit: expiration,
            CVC: CVC,
            mbajtesiKarteles: cardHolderName,
            kartelaId: res.data.customerId
        }
        axios.post("https://localhost:7235/api/Klienti",Perdoruesi).then(response=>{
          console.log(response.data)
          setErrorMessage("")
      })
        })
       
    }else{
        setErrorMessage("Kodi i dhënë gabim")
    }
    }
    const kartelaDiv = ()=> {
      setShtoKartel("d-none")
      setKartela(true)
      setTeDhenat("order-2 order-lg-1 d-flex flex-column align-items-center")
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

            <div className={shtoKartel+' mb-4'}>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Shto kartelën bankare' onClick={()=>kartelaDiv()}/>
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
          <MDBCol md='10' lg='6' className={shtoKartel+' order-1 order-lg-2 d-flex align-items-center'}>
            <MDBCardImage src='https://www.flytap.com/-/media/Flytap/illustration/check-in/big/automatic-check-in-big.svg' fluid/>
          </MDBCol>
          <MDBCol md='10' lg='6' className={teDhenat}>
          <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="key me-3" size='lg'/>
              <MDBInput label='Numri Karteles' id='form4' type='text' onChange={(e)=> setCardNumber(e.target.value)}/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="key me-3" size='lg'/>
              <MDBInput label='Emri i mbajtesit te karteles' id='form4' type='text' onChange={(e)=> setCardHolderName(e.target.value)}/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="key me-3" size='lg'/>
              <MDBInput label='CVC' id='form4' type='text' onChange={(e)=> setCVC(e.target.value)}/>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="key me-3" size='lg'/>
              <MDBInput label='Data skadimit' id='form4' type='text' onChange={(e)=> setExpiration(e.target.value)}/>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    
    </MDBCard>
      
  </MDBContainer>
  )
}

export default Regjistrohu