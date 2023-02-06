import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Context } from './DashboardNavbar'
import InternetShtoFaturen from './InternetShtoFaturen'
import InternetTabela from './InternetTabela'
import Karta from './Karta'

function IpkoDashboard() {
    const value = useContext(Context)
    //const [notes, setNotes] = useState([]);
    const [user, setUser] = useState('')
    const [userDetails, setUserDetails] = useState();

    useEffect(()=>{
        const storedList = JSON.parse(localStorage.getItem("control"));
        axios.get('https://localhost:7235/decode/'+storedList.map(tok=>(tok.authToken))).then(response=>{
          setUser(response.data)
          axios.get('https://localhost:7235/set/'+storedList.map(tok=>(tok.authToken))+"/"+response.data).then(response=>{
            localStorage.setItem('User',JSON.stringify(response.data))
            setUserDetails(response.data)    
          })
        })
    },[])
  return (
    <>
    {user!="" && (userDetails!=undefined ? userDetails.emaili==user : "") ?
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
              <p>{user}</p>
              <p>{userDetails.emaili==user}</p>
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
    </> : <p></p>
    
}
</>
 )
}

export default IpkoDashboard