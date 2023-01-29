import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as Icon from 'react-bootstrap-icons';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarToggler,
    MDBNavbarLink,
    MDBContainer,
    MDBIcon,
    MDBCollapse,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';

function NavBar() {
    const [showBasic, setShowBasic] = useState(true);
    const [user,setUser] = useState()
    const [showU, setShowU] = useState()
    useEffect(()=>{
      let name = "cname" + "=";
      let cn="";
      let ca = document.cookie.split(';');
      if(ca==""){
        setShowU(true)
      }else{
        setShowU(false)
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
        setUser(response.data.emri+" "+response.data.mbiemri)  
    })
  })
  const logOut =()=>{
    axios.post("https://localhost:7235/api/Perdoruesi/logout").then(response=>{
      document.cookie = "cname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    })
    window.location.href="http://localhost:3000"
  }
  
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Icon.CreditCardFill color='yellow' size="30" /><Navbar.Brand href="#home">KoPagesa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Rreth nesh</Nav.Link>
            <Nav.Link href="#pricing">Mundesite e pageses</Nav.Link>
            <NavDropdown title="Më shumë" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {showU==false ? 
            <NavDropdown title="Menu" id="collasible-nav-dropdown">
            <Link to={"/profili"} className='dropdown-item'>Profili</Link>
            
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={()=>logOut()}>
              Ckycu
            </NavDropdown.Item>
          </NavDropdown>
            : 
            <>
            <Link to={'/regjistrohu'} className='nav-link'><Icon.PersonAdd color="orange" size={25} />Regjistrohu</Link>
            <Link to={'/kycu'} className='nav-link'><Icon.BoxArrowInRight color='orange' size={25} />Kycu</Link>
            </>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
        <div
          id='intro-example'
          className='p-5 text-center bg-image'
          style={{ backgroundImage: "url('https://www.balkanweb.com/wp-content/uploads/2020/04/PAGUAJ_EP.png')" }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>KoPagesa Kosovë</h1>
                <h5 className='mb-4'>Paguaj dhe kontrollo online sherbimet kryesore</h5>
                <MDBBtn
                  className="m-2"
                  tag="a"
                  outline
                  size="lg"
                  rel="nofollow"
                  target="_blank"
                  href='https://www.youtube.com/watch?v=c9B4TPnak1A'
                >
                  Krijo llogari
                </MDBBtn>
                <MDBBtn
                  className="m-2"
                  tag="a"
                  outline
                  size="lg"
                  target="_blank"
                  href='https://localhost:7235/api/Perdoruesi/download/manual'
                >
                  Shkarko udhëzuesin
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default NavBar