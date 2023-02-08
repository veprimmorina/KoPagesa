import React from 'react'
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState,useContext } from 'react';
import { NavDropdown } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'
import IpkoDashboard from './IpkoDashboard';

export const Context = createContext();
function DashboardNavbar() {
    const [shtoFaturen, setShtoFaturen] = useState('')

    useEffect(()=>{
        console.log('ok')
    },[shtoFaturen])
    const logOut = () =>{
      localStorage.setItem('control','')
      localStorage.setItem('User','')
      window.location.href='http://localhost:3000/'
    }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid justify-content-between">
  
    <div className="d-flex">
   
      <a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/64/IPKO_logo.svg/1200px-IPKO_logo.svg.png"
          height="40"
          alt="MDB Logo"
          loading="lazy"
          style={{marginTop: "2px"}}
        />
      </a>

      
      <form className="input-group w-auto my-auto d-none d-sm-flex">
        <input
          autocomplete="off"
          type="search"
          className="form-control rounded"
          placeholder="Kerko"
          style={{minWidth: "125px"}}
        />
        <span className="input-group-text border-0 d-none d-lg-flex"
          ><Icon.Search color='green' /></span>
      </form>
    </div>
    
    <ul className="navbar-nav flex-row d-none d-md-flex">
      <li className="nav-item me-3 me-lg-1 active">
        <a className="nav-link" href="#" onClick={()=>setShtoFaturen('shtoFaturen')}>
          <span><i className="fas fa-home fa-lg"></i></span>
           Shto faturen
        </a>
      </li>

      <li className="nav-item me-3 me-lg-1">
        <a className="nav-link" href="#">
          <span><i className="fas fa-flag fa-lg"></i></span>
        </a>
      </li>

      <li className="nav-item me-3 me-lg-1">
        <a className="nav-link" href="#">
          <span><i className="fas fa-video fa-lg"></i></span>
        </a>
      </li>

      <li className="nav-item me-3 me-lg-1">
        <a className="nav-link" href="#">
          <span><i className="fas fa-shopping-bag fa-lg"></i></span>
        </a>
      </li>

      <li className="nav-item me-3 me-lg-1">
        <a className="nav-link" href="#" onClick={()=>setShtoFaturen('shfaqPagesat')}>
          <span><i className="fas fa-users fa-lg"></i></span>
          Pagesat
        </a>
      </li>
    </ul>
    
    <ul className="navbar-nav flex-row">
      <li className="nav-item me-3 me-lg-1">
        <a className="nav-link d-sm-flex align-items-sm-center" href="#">
          <img
            src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png"
            className="rounded-circle"
            height="22"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <strong className="d-none d-sm-block ms-1">ipko.internet</strong>
        </a>
      </li>
      <li className="nav-item me-3 me-lg-1">
        <a className="nav-link" href="#">
          <span><i className="fas fa-plus-circle fa-lg"></i></span>
        </a>
      </li>
      
     
      <NavDropdown title="Më shumë" id="collasible-nav-dropdown">
        <NavDropdown.Item  onClick={()=>logOut()}>Log Out</NavDropdown.Item>
      </NavDropdown>
      
    </ul>
   
  </div>
</nav>    

<Context.Provider value={shtoFaturen}>
    <IpkoDashboard />
</Context.Provider>
    </>
  )
}

export default DashboardNavbar