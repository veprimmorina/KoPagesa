import axios from 'axios';
import { MDBInput } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Gjobat from './Gjobat'
import GjobatEPaguara from './GjobatEPaguara';
import ShikoPatentenModal from './ShikoPatentenModal';
import * as Icon from 'react-bootstrap-icons'
import { format } from 'date-fns'



function Profili() {

  const [gjobat, setGjobat] = useState();
  const [gjobatEPaguara, setGjobatEPaguara] = useState();
  const [user,setUser]=useState()
  const [profile, setProfile] = useState(false)
  const [showM,setShowM] = useState(false)
  const [firstPage,setFirstPage]=useState(true)
  const [patentShoferi, setPatentShoferi] = useState(false)
  const [patenta, setPatenta] = useState()
  const [patenten, setShfaqPatenten] = useState(false)
  const [mainDiv, setMainDiv] = useState(true)
  const [numriKarteles, setNumriKarteles] = useState()
  const [CVC, setCVC] = useState()
  const [expiration, setExpiration] = useState()
  const [pagesa, setPagesa] = useState()
  const [pershkrimi, setPershkrimi] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [succesMessage, setSuccessMessage] = useState()
  const [njoftimet, setNjoftimet] = useState()
  const [addDescription, setAddDescription] = useState()
  const [category, setCategory] = useState("Te gjitha")

  useEffect(()=>{
      let name = "cname" + "=";
      
      let cn="";
      let ca = document.cookie.split(';');
    
      if(ca==""){
        setProfile(true)
      }
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        cn=c.substring(name.length, c.length);
        
        }
      }
      axios.get("https://localhost:7235/api/Klienti/decrypt/"+cn).then(response=>{
          setUser(response.data)  
          setNjoftimet(response.data.njoftimet)
        axios.get("https://localhost:7000/api/Gjoba/gjoba/numri/"+response.data.numriPersonal).then(response=>{
          setGjobat(response.data)
        })
        axios.get("https://localhost:7235/api/Patenta/get/patenta/numri/12345678910").then(response=>{
          setPatenta(response.data)
        })
        axios.get("https://localhost:7208/api/Pagesats/personal/payment/"+response.data.numriPersonal).then(response=>{
        setGjobatEPaguara(response.data)
         })
        })
      
      
    
   },[])
   const logOut =()=>{
    axios.post("https://localhost:7235/api/Klienti/logout").then(response=>{
      document.cookie = "cname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    })
    window.location.href="http://localhost:3000"
  }
  const gjoba = () =>{
    axios.get("https://localhost:7208/api/Pagesats/categorized/0").then(response=>{
      setGjobatEPaguara(response.data)
      setCategory("Gjoba")
    })
  }
  const interneti = () =>{
    axios.get("https://localhost:7208/api/Pagesats/categorized/1").then(response=>{
      setGjobatEPaguara(response.data)
      setCategory("Internet")
    })
  }
  const mbeturina = ()=>{
    axios.get("https://localhost:7208/api/Pagesats/categorized/2").then(response=>{
      setGjobatEPaguara(response.data)
      setCategory("Mbeturina")
    })
  }
  const shfaqPatentShoferi = () =>{
    if(patentShoferi==false){
      setPatentShoferi(true)
    }else{
      setPatentShoferi(false)
    }
  }

  const paguaj = () => {
    if(user.numriKarteles!=numriKarteles){
      setErrorMessage("Numri i karteles eshte gabim")
    }
    else if(CVC!=user.cvc){
      setErrorMessage("CVC gabim")
    }
    else if(user.dataSkadimit!=expiration){
      setErrorMessage("Data e skadimit te dhene nuk pershtatet me daten e karteles tuaj")

    }else{
      var Customer = {
        customerId: user.kartelaId,
        receiptEmail: user.emaili,
        description: pershkrimi+" - "+addDescription,
        currency: "EUR",
        amount: pagesa*100
      }
      axios.post("https://localhost:7208/api/Stripe/payment/add",Customer).then(response=>{
        console.log(response.data)
        axios.post("https://localhost:7208/api/Pagesats/konfirmo/pagesen/"+user.emri+"/"+user.mbiemri+"/"+Customer.amount+"/"+pershkrimi+"/"+user.emaili).then(response=>{
          setErrorMessage("")
          setSuccessMessage("Pagesa u realizua me sukses!")
          console.log(response.data)
        })
        setShowM(false)
      })
    }
  }
  return (
    <>
    {profile==false  ? <>
      <div class="container pt-3 pb-4">
    <div class="main-body">
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a >User</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Profile</li>
              <li className='breadcrumb-item'>
              <i className="bi bi-bell-fill"></i>
              <NavDropdown title="" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={()=>{setShfaqPatenten(true);setMainDiv(false)}}>Shiko patent shoferin</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{setShfaqPatenten(false);setMainDiv(true)}}>
                Profili
              </NavDropdown.Item>
              <NavDropdown.Item onClick={()=>logOut()}>Log out</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
              </li>
            </ol>

          </nav>    
          { mainDiv &&
          <div class="row gutters-sm">
       <b className='text-success'>{succesMessage}</b>
            <div class="col-md-4 mb-3">
              <div class="card shadow">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src={patenta!=undefined ? patenta.fotografia : ""} alt="Pa fotografi" class="rounded-circle" width="150" />
                    <div class="mt-3">
                      <h4>{user!=undefined ? user.emri+" "+user.mbiemri : ""}</h4>
                      <p class="text-secondary mb-1">Klient</p>
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <button class="btn btn-primary">Follow</button>
                      <Link to={'/12345678910'}><button class="btn btn-outline-primary" >Patent shoferi im</button></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3 shadow">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><Icon.CreditCard size="20" color='blue'/>Numri karteles</h6>
                    <span class="text-secondary">{user!=undefined ? "************4242" :<p></p>}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><Icon.Icon123 size="20" color='red'/>CVC</h6>
                    <span class="text-secondary">***</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><Icon.DashCircle size="20" color='orange'/>Data e skadimit</h6>
                    <span class="text-secondary">{user!=undefined ? user.dataSkadimit : <p></p>}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><Icon.Person size="20" color='black'/>Emri i mbajtesit te karteles</h6>
                    <span class="text-secondary">{user!=undefined ? user.mbajtesiKarteles : <p></p>}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><Icon.Envelope size={20} color="green"/>Email adresa kateles: </h6>
                    <span class="text-secondary">{user!=undefined ? user.emaili: <p></p>}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3 shadow">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {user!=undefined ? user.emri+" " +user.mbiemri : <p></p>}
                    </div>
                  </div>
                 
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {user!=undefined ? user.emaili : <p></p>}
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (320) 380-4539
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Numri Personal</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {user!=undefined ? user.numriPersonal : <p></p>}
                    </div>
                  </div>
                 
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-info" onClick={()=>setShowM(true)}>Paguaj</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100 shadow">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center justify-content-between mb-3"><i class="material-icons text-info mr-2">assignment</i>Gjoba te papaguara</h6>
                     {gjobat==null ? <p className='mt-5 pt-5 text-center'>Nuk keni asnje gjobe te papaguar</p> : <>
                       {user!=undefined ? 
                            //logjika
                       <Gjobat gjobaP={user.numriPersonal} gjobaKI={user.kartelaId} gjobaE={user.emaili} gjobaEm={user.emri} gjobaMb={user.mbiemri}/>  : <p></p>}
          </>
          }
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100 shadow sc">
                    <div class="card-body ">
                      <h6 class="d-flex align-items-center justify-content-between mb-3"><i class="material-icons text-info mr-2">assignment</i>Pagesat e mia</h6>
                      {gjobatEPaguara==null ? <p className='mt-5 pt-5 text-center'>Nuk keni asnje pagese te realizuar deri me tani</p> : <>
                      <Button onClick={()=>interneti()}>Internet</Button>
                      <Button onClick={()=>gjoba()}>Gjoba</Button>
                      <Button onClick={()=>mbeturina()}>Mbeturinat</Button>
                      <div className='text-center'>
                        <b>{category}</b>
                      </div>
                      {
                        gjobatEPaguara!=undefined ? 
                          gjobatEPaguara.map(gjoba=>(
                            <GjobatEPaguara key={gjoba+gjoba.id} gjoba={gjoba} />
                          )) 
                        
                        : <p></p>
                      }
                      </>
          }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
}
        </div>
    </div>
    {patenten && <ShikoPatentenModal perdoruesi={patenta!=undefined ? patenta : ""}/> }
     </> : 
     <>
      <div className='p-error'>
        <div className=''>
          <Icon.Bug size={60} color='red'/>
        </div>
      </div>
     </>
     }
     
     <Modal show={showM} onHide={()=>setShowM(false)} className='text-center mt-5'>              
            {firstPage==true ? 
          <><Modal.Header closeButton className='modal-payment-pay'>
          <Modal.Title className='text-center'>Kryej pagesen</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-payment">                  
          <Form>
            <Form.Group>
              <Form.Label>Pagese per:</Form.Label>
              <select className='form-control' onChange={(e)=>setAddDescription(e.value.target)}>
                <option placeholder='Zgjedh nje nga kompanitë'></option>
                <option value="Internet">Internet - IPKO </option>
                <option value="Uji">Uji - Hidro Regjioni</option>
                <option value="Mbeturina">Mbeturina - Eko Regjioni</option>
              </select>
              </Form.Group>
              <Form.Label>Shuma për pagesë:</Form.Label>
              <Form.Control type="text" onChange={(e)=>setPagesa(e.target.value)} placeholder="€"></Form.Control>
              <Form.Label>Ora dhe data:</Form.Label>
              <Form.Control type="text"></Form.Control>
              <Form.Label >Pershkrimi:</Form.Label>
              <textarea className='form-control' onChange={(e)=>setPershkrimi(e.target.value)} placeholder="Shembull: Pagesa per muajin Janar 2023"></textarea>
            </Form>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>setShowM(false)}>
                            Anulo
            </Button>    
            <Button variant="primary" onClick={()=>setFirstPage(false)}>
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
           
            
            <MDBInput wrapperClass='mb-4' className='mr-5 mt-4' label='Numri i karteles'  id='formControlLg' type='email' size="sm" onChange={(e)=>setNumriKarteles(e.target.value)}/>
            <div className='d-flex'>
              <MDBInput wrapperClass='mb-4' className='mr-5' label='Expiration' placeholder='MM/YY' id='formControlLg' type='email' size="sm" onChange={(e)=>setExpiration(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' className='mr-5' label='CVC' id='formControlLg' placeholder='CVC' type='email' size="sm" onChange={(e)=>setCVC(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' className='mr-5' label='Pagesa' id='formControlLg' type='email' size="sm" value={pagesa+"€"} disabled />
            </div>
            <p className=" pb-lg-2 " style={{color: '#393f81'}}>Don't have an account? </p>
           </Form>
           <p className="text-danger">{errorMessage}</p>
          </Modal.Body>
          <Modal.Footer className="payment">
            <Button variant="secondary" onClick={()=> setFirstPage(true)}>
             Prapa
            </Button>
            <Button variant="primary" onClick={()=> paguaj()}>
              Paguaj
            </Button>
           
          </Modal.Footer>
          </> 
          }
    </Modal>
          </>
  )
}

export default Profili