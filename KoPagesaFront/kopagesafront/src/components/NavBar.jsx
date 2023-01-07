import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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

function NavBar() {
    const [showBasic, setShowBasic] = useState(true);

    return (
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">KoPagesa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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
            <Nav.Link href="#deets">Log In</Nav.Link>
            
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
                  Start tutorial
                </MDBBtn>
                <MDBBtn
                  className="m-2"
                  tag="a"
                  outline
                  size="lg"
                  target="_blank"
                  href='https://mdbootstrap.com/docs/standard/'
                >
                  Download MDB UI KIT
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default NavBar