import axios from 'axios';
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
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

function Kycu() {
    const [email,setEmail ]= useState()
    const [pass, setPass] = useState()
    const [profile, setProfile] = useState(false)
    const logIn = () =>{
        axios.post("https://localhost:7235/api/Perdoruesi/login/"+email+"/"+pass).then(response=>{
        if(response.data=="0"){
          alert("Gabim") 
        }else{
                const d = new Date();
                let expires = "expires=" + d.toUTCString();
                document.cookie = "cname" + "=" + response.data + ";" + "expires" + ";path=/"; 
                window.location.href="http://localhost:3000"
              }
        })
    }
    const decrypt = ()=>{
        let name = "cname" + "=";
        let cn="";
  let ca = document.cookie.split(';');
 
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
       cn=c.substring(name.length, c.length);
    }
  }
        axios.get("https://localhost:7235/api/Perdoruesi/decrypt/"+cn).then(response=>{
        console.log(response.data)
      })
    }
    const logOut =()=>{
      axios.post("https://localhost:7235/api/Perdoruesi/logout").then(response=>{
        document.cookie = "cname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      })
      window.location.href="http://localhost:3000"
    }
  return (
    <>
    {profile==false ? <>
      <MDBContainer fluid>

      <MDBCard className='text-black m-5 pt-3 shadow' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center pb-5'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Kycu</p>

             

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Email adresa' id='form2' type='email' onChange={(e)=> setEmail(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Fjalkalimi' id='form3' type='password' onChange={(e)=> setPass(e.target.value)}/>
              </div>

              

              

              <MDBBtn className='mb-4' size='lg' onClick={()=> logIn()}>Kycu</MDBBtn>
                
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
      </> : ""}
   </>
  )
}

export default Kycu