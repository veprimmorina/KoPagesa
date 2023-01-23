import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Menu, MenuItem, ProSidebarProvider, Sidebar } from 'react-pro-sidebar'
import DenimePaguar from './DenimePaguar'
import DenimePaPaguar from './DenimePaPaguar'
import DenimeTable from './DenimeTable'
import DenimetPaguar from './DenimetPaguar'
import Karta from './Karta'
import PatentaTabela from './PatentaTabela'
import Statistikat from './Statistikat'
import StatistikatBar from './StatistikatBar'
import * as Icon from 'react-bootstrap-icons';
import { CanvasJSChart } from 'canvasjs-react-charts'



function PoliciaDashboard() {
  const [showPatenta, setShowPatenta]=useState(false)
  const [statistikat, setStatistikat] = useState(true)
  const [showDenimet, setShowDenimet] = useState(false)
  const [showDenimetPaguar, setShowDenimetPaguar] = useState(false)
  const [showDenimetPaPaguar, setShowDenimetPaPaguar] = useState(false)
  const [stats, setStats] = useState()
  const [patentenStats, setPatentaStats] = useState()
  const[showStatistikatMujore, setShowStatistikatMujore] = useState()
  const [muaji, setMuaji] = useState()
  const [muajiStats, setMuajiStats] = useState()
  const [MuajiPatentaStats,setMuajiPatentaStats]= useState()

  useEffect(()=>{
    axios.get("https://localhost:7000/api/Gjoba/get/stats").then(response=>{
      setStats(response.data.split(";"))
    })
    axios.get("https://localhost:7235/api/Patenta/get/total").then(response=>{
      setPatentaStats(response.data.split(";"))
    })

  },[])
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Statistikat mujore "
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}",
      dataPoints: [
        { y: muajiStats!=undefined ? muajiStats[0] : "0", label: "Gjoba total" },
        { y: muajiStats!=undefined ? muajiStats[1] : "0", label: "Gjoba pa paguar" },
        { y:  muajiStats!=undefined ? muajiStats[2] : "0", label: "Gjoba pa paguar", label: "Gjoba te paguara" },
        { y: MuajiPatentaStats!=undefined ? MuajiPatentaStats[0] : "0", label: "Patent shofer te leshuar" },
        { y: MuajiPatentaStats!=undefined ? MuajiPatentaStats[1] : "0", label: "Patent shofer te skaduar" }
      ]
    }]}
  const patentShoferi = ()=>{
    setShowPatenta(true)
    setShowDenimet(false)
    setShowDenimetPaguar(false)
    setShowDenimetPaPaguar(false)
    setStatistikat(false)
    setShowStatistikatMujore(false)

  }
  const denimet = () => {
    setShowDenimet(true)
    setShowPatenta(false)
    setShowDenimetPaguar(false)
    setShowDenimetPaPaguar(false)
    setStatistikat(false)
    setShowStatistikatMujore(false)

  }
  const denimetPaguar = () => {
    setShowDenimetPaguar(true)
    setShowPatenta(false)
    setShowDenimet(false)
    setShowDenimetPaPaguar(false)
    setStatistikat(false)
    setShowStatistikatMujore(false)

  }
  const denimetPaPaguar = () => {
    setShowDenimetPaPaguar(true)
    setShowDenimetPaguar(false)
    setShowPatenta(false)
    setShowDenimet(false)
    setStatistikat(false)
    setShowStatistikatMujore(false)

  }
  const statistikatMujore = () =>{
    setShowStatistikatMujore(true)
    setShowDenimetPaPaguar(false)
    setShowDenimetPaguar(false)
    setShowPatenta(false)
    setShowDenimet(false)
    setStatistikat(false)
  }
  const kerkoSipasMuajit = ()=>{
    axios.get("https://localhost:7000/api/Gjoba/get/stats/month/"+muaji).then(response=>{
      setMuajiStats(response.data.split(";"))
    })
    axios.get("https://localhost:7235/api/Patenta/get/stats/month/"+muaji).then(response=>{
      setMuajiPatentaStats(response.data.split(";"))
    })
  }
  
  return (
    <>
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "#4c0bce"}}>
      <Container>
        <Navbar.Brand href="#home" className='text-warning'>Policia</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> patentShoferi()} className="text-warning"><Icon.CreditCard color='white' size="20"/>Patenti</Nav.Link>
            <Nav.Link  onClick={()=> denimet()} className="text-warning"><Icon.Receipt color='white' size='20' />Denimet</Nav.Link>
            <Nav.Link  onClick={()=> denimetPaguar()} className="text-warning"><Icon.CheckSquare color='white' size='20' />Denimet e paguara</Nav.Link>
            <Nav.Link  onClick={()=> denimetPaPaguar()} className="text-warning"><Icon.Archive color='white' size='20' />Denimet e Papaguara</Nav.Link>
            <Nav.Link  onClick={()=> statistikatMujore()} className="text-warning"><Icon.Speedometer2 color='white' size='20' />Statistikat mujore</Nav.Link>
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
          <div className='container mt-5 pt-5'>
              {showStatistikatMujore &&
              <><select onChange={(e)=>setMuaji(e.target.value)}>
                <option value=""></option>
                <option value="01">Janar 2023</option>
                <option value="02">Shkurt 2023</option>
                <option value="03">Mars 2023</option>
                <option value="04">Prill 2023</option>
                <option value="05">Maj 2023</option>
                <option value="06">Qershor 2023</option>
                <option value="07">Korrik 2023</option>
                <option value="08">Gusht 2023</option>
                <option value="09">Shtator 2023</option>
                <option value="10">Tetor 2023</option>
                <option value="11">Nentor 2023</option>
                <option value="12">Dhjetor 2023</option>
              </select>
              <Button onClick={()=>kerkoSipasMuajit()}><Icon.Search /></Button>
              <CanvasJSChart options={options} />
              </>}
              
          </div>
        </div>
      </div>
    </>
  )
}

export default PoliciaDashboard