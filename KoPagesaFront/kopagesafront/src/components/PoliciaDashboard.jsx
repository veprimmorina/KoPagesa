import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Menu, MenuItem, ProSidebarProvider, Sidebar } from 'react-pro-sidebar'
import DenimePaguar from './DenimePaguar'
import DenimePaPaguar from './DenimePaPaguar'
import DenimeTable from './DenimeTable'
import DenimetPaguar from './DenimetPaguar'
import Karta from './Karta'
import PatentaTabela from './PatentaTabela'
import Statistikat from './Statistikat'
import StatistikatBar from './StatistikatBar'

function PoliciaDashboard() {
  const [showPatenta, setShowPatenta]=useState(false)
  const [statistikat, setStatistikat] = useState(true)
  const [showDenimet, setShowDenimet] = useState(false)
  const [showDenimetPaguar, setShowDenimetPaguar] = useState(false)
  const [showDenimetPaPaguar, setShowDenimetPaPaguar] = useState(false)
  const [stats, setStats] = useState()
  const [patentenStats, setPatentaStats] = useState()

  useEffect(()=>{
    axios.get("https://localhost:7000/api/Gjoba/get/stats").then(response=>{
      setStats(response.data.split(";"))
    })
    axios.get("https://localhost:7235/api/Patenta/get/total").then(response=>{
      setPatentaStats(response.data.split(";"))
    })

  },[])

  const patentShoferi = ()=>{
    setShowPatenta(true)
    setShowDenimet(false)
    setShowDenimetPaguar(false)
    setShowDenimetPaPaguar(false)
    setStatistikat(false)
  }
  const denimet = () => {
    setShowDenimet(true)
    setShowPatenta(false)
    setShowDenimetPaguar(false)
    setShowDenimetPaPaguar(false)
    setStatistikat(false)
  }
  const denimetPaguar = () => {
    setShowDenimetPaguar(true)
    setShowPatenta(false)
    setShowDenimet(false)
    setShowDenimetPaPaguar(false)
    setStatistikat(false)
  }
  const denimetPaPaguar = () => {
    setShowDenimetPaPaguar(true)
    setShowDenimetPaguar(false)
    setShowPatenta(false)
    setShowDenimet(false)
    setStatistikat(false)
  }
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='text-warning'>Policia</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> patentShoferi()} className="text-warning">Patenti</Nav.Link>
            <Nav.Link  onClick={()=> denimet()} className="text-warning">Denimet</Nav.Link>
            <Nav.Link  onClick={()=> denimetPaguar()} className="text-warning">Denimet e paguara</Nav.Link>
            <Nav.Link  onClick={()=> denimetPaPaguar()} className="text-warning">Denimet e Papaguara</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='d-flex'>
        <div className='w-100'>
          <div >
            { statistikat &&
              <>
              <div className='w-100 row'>
              <div className='w-50 col mt-5'>
             <div className='row mt-5 '>
              <div className='col-md'>
              <Karta  title={"Numri i gjobave"} value={stats!=undefined ? stats[0] : "0"} />
              </div>
              <div className='col-md'>
              <Karta  title={"Gjoba pa paguar"} value={stats!=undefined ? stats[1] : "0"} />
              </div>
              </div>
              <div className='row mt-5 '>
              <div className='col-md'>
              <Karta  title={"Gjoba te paguara"} value={stats!=undefined ? stats[2] : "0"} />
              </div>
              <div className='col-md'>
              <Karta  title={"Gjoba sot"} value={stats!=undefined ? stats[3] : "0"} />
              </div>
              </div>
              <div className='row mt-5 '>
              <div className='col-md'>
              <Karta  title={"Patent shofer"} value={patentenStats!=undefined ? patentenStats[0] : "0"} />
              </div>
              <div className='col-md'>
              <Karta  title={"Te deaktivizuar"} value={patentenStats!=undefined ? patentenStats[1] : "0"} />
              </div>
              </div>
              <div className='row mt-5 '>
              <div className='col-md'>
              <Karta  title={"Aktive"} value={patentenStats!=undefined ? patentenStats[2] : "0"} />
              </div>
              <div className='col-md'>
              <Karta  title={"Aktive"} value={patentenStats!=undefined ? patentenStats[2] : "0"} />
              </div>
              </div>
              </div>
              <div className='col ml-3'>
                <div className='col '>
                  <Statistikat gjoba={stats!=undefined ? stats[0]: 5} gjobap={stats!=undefined ? stats[1] : 5} gjobapp={stats!=undefined ? stats[2] : 5} gjobas={stats!=undefined ? stats[3] : 5}/>
                </div>
                <div className='col'>
                  <StatistikatBar />
                  </div>
                  </div>
                  </div>
              </>
              }
            {showPatenta && <PatentaTabela />}
          </div>
          <div >
            {showDenimet && <DenimeTable />}
          </div>
          <div >
            {showDenimetPaguar && <DenimePaguar />}
          </div>
          <div >
            {showDenimetPaPaguar && <DenimePaPaguar />}
          </div>
        </div>
      </div>
    </>
  )
}

export default PoliciaDashboard