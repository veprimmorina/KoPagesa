import axios from 'axios'
import React, { useState } from 'react'
import { Menu, MenuItem, ProSidebarProvider, Sidebar } from 'react-pro-sidebar'
import DenimePaguar from './DenimePaguar'
import DenimePaPaguar from './DenimePaPaguar'
import DenimeTable from './DenimeTable'
import DenimetPaguar from './DenimetPaguar'
import PatentaTabela from './PatentaTabela'

function PoliciaDashboard() {
  const [showPatenta, setShowPatenta]=useState(false)
  const [showDenimet, setShowDenimet] = useState(false)
  const [showDenimetPaguar, setShowDenimetPaguar] = useState(false)
  const [showDenimetPaPaguar, setShowDenimetPaPaguar] = useState(false)
  const patentShoferi = ()=>{
    setShowPatenta(true)
    setShowDenimet(false)
    setShowDenimetPaguar(false)
    setShowDenimetPaPaguar(false)
  }
  const denimet = () => {
    setShowDenimet(true)
    setShowPatenta(false)
    setShowDenimetPaguar(false)
    setShowDenimetPaPaguar(false)

  }
  const denimetPaguar = () => {
    setShowDenimetPaguar(true)
    setShowPatenta(false)
    setShowDenimet(false)
    setShowDenimetPaPaguar(false)
  }
  const denimetPaPaguar = () => {
    setShowDenimetPaPaguar(true)
    setShowDenimetPaguar(false)
    setShowPatenta(false)
    setShowDenimet(false)
  }
  return (
    <>
    <div className='d-flex'>
        <div>
        <ProSidebarProvider>
    <Sidebar>
        <Menu>
            <MenuItem onClick={()=> patentShoferi()}>Patent shoferi</MenuItem>
            <MenuItem onClick={()=> denimet()}>Denimet</MenuItem>
            <MenuItem onClick={()=> denimetPaguar()}>Denimet e Paguara</MenuItem>
            <MenuItem onClick={()=> denimetPaPaguar()}>Denimet e Pa paguara</MenuItem>
            <MenuItem>Patent shoferi</MenuItem>
            <MenuItem>Denimet</MenuItem>
            <MenuItem>Patent shoferi</MenuItem>
            <MenuItem>Denimet</MenuItem>
            <MenuItem>Patent shoferi</MenuItem>
            <MenuItem>Denimet</MenuItem>
            <MenuItem>Patent shoferi</MenuItem>
            <MenuItem>Denimet</MenuItem>
            <MenuItem>Patent shoferi</MenuItem>
            <MenuItem>Denimet</MenuItem>
        </Menu>
        </Sidebar>
        </ProSidebarProvider>
        </div>
        <div className='w-100'>
          <div >
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