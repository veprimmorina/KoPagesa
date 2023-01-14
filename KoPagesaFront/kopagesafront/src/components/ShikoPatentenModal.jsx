import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Form, Modal, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom';


function ShikoPatentenModal({perdoruesi}) {
 
    
return (
 <>
 {
  perdoruesi!=undefined ?
  <>
 <div className='main row'>
  <div className='col-md '>
  <Card className={perdoruesi.eAktivizuar==false ?' license shadow ' : "license shadow "}>
  {perdoruesi.eAktivizuar==true ? <p></p> : 
          <div className='deactivated rounded bg-danger text-white text-center'>
            <b className=''>Patent shoferi eshte i deaktivizuar</b>
          </div>
        }
        <Card.Header className='d-flex justify-content-between'>
        <img src='https://cdn.britannica.com/18/114418-004-2A12F087/Flag-Kosovo.jpg' width="90" height="50"/> 
        <div>
          <b className='text-primary '>Patent Shoferi</b>
          <b className='text-warning d-block'>Republika e Kosoves</b>
        </div>
        <div>
        <b className='text-primary '>Driving License</b>
        <b className='text-warning d-block'>Republic of Kosovo</b>
      </div>
        </Card.Header>
        <Card.Body>
        <div className='d-flex'>
          {perdoruesi!=undefined ? 
          <>
          <div>
    
        <img src={perdoruesi.fotografia} width="300px" className='mt-5 '/>
        </div>
        <div className='mt-5'>
        <p className=''>1. <b>{perdoruesi.mbiemri}</b></p>
        <p className=''>2. <b>{perdoruesi.emri}</b></p>
        <div className='d-flex justify-content-between'>
        <p className=''>3. <b>{perdoruesi.dataLindjes}</b></p>
        <b className=''>{perdoruesi.komuna}</b>
        </div>
        
        <div className='d-flex justify-content-between'>     
        <p className=''>4.a <b>{perdoruesi.dataLeshimit}</b></p>
        <p>4b.<b className='ml-3'>{perdoruesi.dataSkadences}</b></p>
        <img src='https://kryeministri.rks-gov.net/wp-content/uploads/2022/07/STEMA.png' width="250" className="kosovo-badge"/> 
        </div>
        <p>4c.<b>MPB/MUP/MIA</b></p>
        <p>4d.<b>{perdoruesi.numriPersonal}</b></p>
        </div>
        </> : <p></p>}
        </div>
      
        <div className=' d-flex justify-content-between'>
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
        </Card.Body>
        
  </Card>
  </div>
  <div className='col-md text-center'>
            <>
            <b>Pershkrimi</b>
            <Table striped border="true" hover className='license'>
              <tbody>
              <tr>
                <td>1. Mbiemri/Surname </td>
              </tr>
              <tr>
                <td>2. Emri/Name</td>
              </tr>
              <tr>
                <td>3. Data lindjes/ Birth date</td>
              </tr>
              <tr>
                <td>4.a Data e leshimit/ Issuing date</td>
              </tr>
              <tr>
                <td>4.b Data e skadimit/ Expiration date</td>
              </tr>
              <tr>
                <td>4.c Organi leshimit/ Expiration date</td>
              </tr>
              </tbody>
            </Table>
              </>  
               
          
          
    </div>
 </div>
 <div>
 </div>
</>
: <p></p>}
  </>
)
}

export default ShikoPatentenModal