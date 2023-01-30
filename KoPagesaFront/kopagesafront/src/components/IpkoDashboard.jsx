import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Context } from './DashboardNavbar'
import InternetShtoFaturen from './InternetShtoFaturen'
import InternetTabela from './InternetTabela'
import Karta from './Karta'

function IpkoDashboard() {
    const value = useContext(Context)
  return (
    <>
    {value=='shtoFaturen' ? <InternetShtoFaturen /> : 
    value=='shfaqPagesat' ?  <InternetTabela /> :
    <div className='d-flex'>
        <div className='w-100'> 
          <div >
           
              <>
              <div className='w-100 row'>
              <div className='w-50 col mt-5'>
             <div className='row mt-5 '>
              <div className='col-md'>
             <Karta />
              <p>{value}</p>
              </div>
              <div className='col-md'>
              <Karta />             
               </div>
              </div>
              <div className='row mt-5 '>
              <div className='col-md'>
              <Karta />
                            </div>
              <div className='col-md'>
              <Karta />
                            </div>
              </div>
              <div className='row mt-5 '>
              <div className='col-md'>
              <Karta />
                            </div>
              <div className='col-md'>
              <Karta />
                            </div>
              </div>
              <div className='row mt-5 '>
              <div className='col-md'>
              <Karta />
                            </div>
              <div className='col-md'>
              <Karta />
                            </div>
              </div>
              </div>
              <div className='col ml-3'>
                <div className='col '>
                  
                </div>
                <div className='col'>
                  
                  </div>
                  </div>
                  </div>
              </>
              
           
          </div>
          <div >
            
          </div>
          <div >
          </div>
          <div >
          </div>
          <div className='container mt-5 pt-5'>
              
              
          </div>
        </div>
      </div> 
}
    </>
  )
}

export default IpkoDashboard