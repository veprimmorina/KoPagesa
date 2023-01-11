import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, NavDropdown } from 'react-bootstrap'
import Gjobat from './Gjobat'
import GjobatEPaguara from './GjobatEPaguara';


function Profili() {

  const [gjobat, setGjobat] = useState();
  const [gjobatEPaguara, setGjobatEPaguara] = useState();
  const [user,setUser]=useState()
  const [profile, setProfile] = useState(false)

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
      axios.get("https://localhost:7235/api/Perdoruesi/decrypt/"+cn).then(response=>{
          setUser(response.data)  
        axios.get("https://localhost:7000/api/Gjoba/gjoba/numri/"+response.data.numriPersonal).then(response=>{
          setGjobat(response.data)
      })
      })
      axios.get("https://localhost:7000/api/Gjoba/get/paid/12345678910").then(response=>{
        setGjobatEPaguara(response.data)
       
      })
    
   },[])
   const logOut =()=>{
    axios.post("https://localhost:7235/api/Perdoruesi/logout").then(response=>{
      document.cookie = "cname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    })
    window.location.href="http://localhost:3000"
  }
  return (
    <>
    {profile==false ? <>
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
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item onClick={()=>logOut()}>Log out</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
              </li>
            </ol>

          </nav>    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card shadow">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="data:image/jpeg;base64,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" alt="Admin" class="rounded-circle" width="150" />
                    <div class="mt-3">
                      <h4>{user!=undefined ? user.emri+" "+user.mbiemri : ""}</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3 shadow">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span class="text-secondary">https://bootdey.com</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span class="text-secondary">@bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span class="text-secondary">bootdey</span>
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
                      Kenneth Valdez
                    </div>
                  </div>
                 
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      fip@jukmuh.al
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
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Bay Area, San Francisco, CA
                    </div>
                  </div>
                 
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100 shadow">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Gjoba te papaguara</h6>
                        <Gjobat/>    
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100 shadow">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Gjobat e paguara</h6>
                      {
                        gjobatEPaguara!=undefined ?
                        gjobatEPaguara.map(gjoba=>(
                          <GjobatEPaguara key={gjoba+gjoba.id} gjoba={gjoba} />
                        )) : <p></p>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
     </> : <p></p>}
   
    
    </>
  )
}

export default Profili