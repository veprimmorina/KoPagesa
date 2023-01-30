import React from 'react'
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState,useContext } from 'react';
import IpkoDashboard from './IpkoDashboard';

export const Context = createContext();
function DashboardNavbar() {
    const [shtoFaturen, setShtoFaturen] = useState('')

    useEffect(()=>{
        console.log('ok')
    },[shtoFaturen])
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid justify-content-between">
  
    <div class="d-flex">
   
      <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/64/IPKO_logo.svg/1200px-IPKO_logo.svg.png"
          height="40"
          alt="MDB Logo"
          loading="lazy"
          style={{marginTop: "2px"}}
        />
      </a>

      
      <form class="input-group w-auto my-auto d-none d-sm-flex">
        <input
          autocomplete="off"
          type="search"
          class="form-control rounded"
          placeholder="Search"
          style={{minWidth: "125px"}}
        />
        <span class="input-group-text border-0 d-none d-lg-flex"
          ><i class="fas fa-search"></i
        ></span>
      </form>
    </div>
    
    <ul class="navbar-nav flex-row d-none d-md-flex">
      <li class="nav-item me-3 me-lg-1 active">
        <a class="nav-link" href="#" onClick={()=>setShtoFaturen('shtoFaturen')}>
          <span><i class="fas fa-home fa-lg"></i></span>
          <span class="badge rounded-pill badge-notification bg-danger">Test1</span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-flag fa-lg"></i></span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-video fa-lg"></i></span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-shopping-bag fa-lg"></i></span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#" onClick={()=>setShtoFaturen('shfaqPagesat')}>
          <span><i class="fas fa-users fa-lg"></i></span>
          <span class="badge rounded-pill badge-notification bg-danger">Pagesat</span>
        </a>
      </li>
    </ul>
    
    <ul class="navbar-nav flex-row">
      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link d-sm-flex align-items-sm-center" href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            class="rounded-circle"
            height="22"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <strong class="d-none d-sm-block ms-1">John</strong>
        </a>
      </li>
      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link" href="#">
          <span><i class="fas fa-plus-circle fa-lg"></i></span>
        </a>
      </li>
      <li class="nav-item dropdown me-3 me-lg-1">
        <a
          class="nav-link dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-comments fa-lg"></i>

          <span class="badge rounded-pill badge-notification bg-danger">6</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown me-3 me-lg-1">
        <a
          class="nav-link dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell fa-lg"></i>
          <span class="badge rounded-pill badge-notification bg-danger">12</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown me-3 me-lg-1">
        <a
          class="nav-link dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-chevron-circle-down fa-lg"></i>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </li>
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