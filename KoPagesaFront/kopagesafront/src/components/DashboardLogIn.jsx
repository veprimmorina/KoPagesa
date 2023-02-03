import React from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import { useState } from 'react';
import PoliciaDashboard from './PoliciaDashboard';
import { Link } from 'react-router-dom';
import { Router,Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export const Context = React.createContext('');


function DashboardLogIn() {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [jwt,setJwt] = useState()
  const [user, setUser] = useState([]);
  const [userSet, setUserSet] = useState(localStorage.getItem('UserP'))
  
  useEffect(()=>{
    /*
    if(userSet!="" || userSet != null){
      window.location.href='http://localhost:3000/' 
    }
    */
  },[])


  const logIn = () =>{
    axios.post("https://localhost:7235/login/police/"+email+"/"+password).then(response=>{
          const newUser = {authToken: response.data};
          setUser([newUser])
            localStorage.setItem("extra",JSON.stringify([newUser]))
            window.location.href='http://localhost:3000/dashboard/policet' 
        })
  }
  return (
    <>
    
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e)=>setEmail(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e)=>setPassword(e.target.value)}/>
      <MDBBtn className="mb-4" onClick={()=>logIn()}>Sign in</MDBBtn>
      <div className="text-center">
        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
    </>
  )
}

export default DashboardLogIn