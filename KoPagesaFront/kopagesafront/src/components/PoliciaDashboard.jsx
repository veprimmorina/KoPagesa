import axios from 'axios'
import React, { useState } from 'react'
import { Menu, MenuItem, ProSidebarProvider, Sidebar } from 'react-pro-sidebar'
import PatentaTabela from './PatentaTabela'

function PoliciaDashboard() {
  const [showPatenta, setShowPatenta]=useState(false)
  const patentShoferi = ()=>{
    setShowPatenta(true)
  }
  return (
    <>
    <div className='d-flex'>
        <div>
        <ProSidebarProvider>
    <Sidebar>
        <Menu>
            <MenuItem onClick={()=> patentShoferi()}>Patent shoferi</MenuItem>
            <MenuItem>Denimet</MenuItem>
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
            <MenuItem>Patent shoferi</MenuItem>
            <MenuItem>Denimet</MenuItem>
        </Menu>
        </Sidebar>
        </ProSidebarProvider>
        </div>
        <div>
            {showPatenta && <PatentaTabela />}
        </div>
    </div>
    </>
  )
}

export default PoliciaDashboard