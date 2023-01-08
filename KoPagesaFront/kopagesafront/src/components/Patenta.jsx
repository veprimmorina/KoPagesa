import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function Patenta() {
    const {id} = useParams()
    const [perdoruesi,setPerdoruesi] = useState()
    const [nrGjobave, setNrGjobave] = useState();
    const [gjobat, setGjobat] = useState();
    const [nrPersonal, setNrPersonal] = useState();
    useEffect(()=>{
        axios.get("https://localhost:7235/api/Patenta/"+id).then(response=>{
          setPerdoruesi(response.data)
          setNrPersonal(response.data.numriPersonal)
          console.log(response.data)
        })
        axios.get("https://localhost:7000/api/Gjoba/numero/gjobat/12345678910").then(response=>{
          setNrGjobave(response.data)
        })
        axios.get("https://localhost:7000/api/Gjoba/gjoba/numri/12345678910").then(response=>{
        setGjobat(response.data)
        })
    },[])
  return (
   
    <div className=''>
      {perdoruesi!=undefined ? 
      <>
       {perdoruesi.eAktivizuar==true ? <p></p> : 
        <b className='text-danger'>Patent shoferi me Nr.Personal {perdoruesi.numriPersonal} eshte i deaktivizuar</b>
      }
          <Card>
        {nrGjobave==0 ? "" : nrGjobave==1 ? <Link to="/gjobat/12345678910"><p>1 gjobë e pa paguar</p> </Link>:<Link to="/gjobat/"{...nrPersonal}><p>{nrGjobave} gjoba pa paguar</p></Link>}
      </Card>
      <div className='row w-50 license'>        
        <div className='col '>
        <img src='https://cdn.britannica.com/18/114418-004-2A12F087/Flag-Kosovo.jpg' width="90" height="50"/> 
        </div>
        <div className='col'>
          <b className='text-primary '>Patent Shoferi</b>
          <b className='text-warning d-block'>Republika e Kosoves</b>
          </div>
        <div className=' col'>
          <b className='text-primary '>Driving License</b>
          <b className='text-warning d-block'>Republic of Kosovo</b>
        </div>
       
      </div>
      <div className='d-flex w-50 license main '>
        <div className='kosovo'></div>
        <img src={perdoruesi.fotografia} width="300px" className='mt-5 '/>
        <div className='mt-5'>
          <p className=''>1. <b>{perdoruesi.mbiemri}</b></p>
          <p className=''>2. <b>{perdoruesi.emri}</b></p>
          <div className='d-flex justify-content-between'>
          <p className=''>3. <b>{perdoruesi.dataLindjes}</b></p>
          <b className=''>{perdoruesi.komuna}</b>
          </div>
          {perdoruesi.eAktivizuar==true ? <p></p> : 
            <div className='deactivated rounded'>
              <b className='text-danger'>Patent shoferi eshte i deaktivizuar</b>
            </div>
          }
          <div className='d-flex justify-content-between'>     
          <p className=''>4.a <b>{perdoruesi.dataLeshimit}</b></p>
          <p>4b.<b className='ml-3'>{perdoruesi.dataSkadences}</b></p>
          <img src='https://kryeministri.rks-gov.net/wp-content/uploads/2022/07/STEMA.png' width="250" className="kosovo-badge"/> 
          </div>
          <p>4c.<b>MPB/MUP/MIA</b></p>
          <p>4d.<b>{perdoruesi.numriPersonal}</b></p>
        </div>

      </div>
      <div className='license w-50 d-flex justify-content-between'>
      <div className='kosovo'></div>
        <div>
            <img src={perdoruesi.fotografia} width="90" height="50" className='mt-3 second-picture'/> 
            <p>{perdoruesi.numriPersonal}</p>
        </div>
        <div>
            <p>9.<b>B1 | B | M | L | T </b></p>
        </div>
        <div>
        </div>
      </div>
   </> : <div> </div>}
    </div>
        
  )
}

export default Patenta