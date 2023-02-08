import React from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useState } from 'react';
import axios from 'axios';


function InternetShtoFaturen() {
  const [pershkrimi, setPershkrimi] = useState()
  const [pagesa, setPagesa] = useState()
  const [numriPersonal, setNumriPersonal] = useState()
  const [sukses, setSukses] = useState('d-none')
  let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear()
    const time = newDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const ruajFaturen = () =>{
      var Fatura = {
        tipi: "",
        lloji : 1,
        pershkrimi: pershkrimi,
        nrPersonal: numriPersonal,
        data: year+"-0"+month+"-"+date,
        koha: time,
        adresa: "IPKO",
        denimi: pagesa,
        ePaguar: false
      }
      
      axios.post("https://localhost:7000/api/Faturas",Fatura).then(response=>{
        setSukses('sukses')
        console.log(response)
      })
    }
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
      <p className={'text-success '+sukses}>Fatura u ruajt me sukses</p>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Shto faturë të re</p>

            

          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Detajet e fatures</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Emri dhe mbiemri i klientit' id='formControlLg' type='text' size="md"/>
          <MDBInput wrapperClass='mb-4' label='Numri Personal i klientit' id='formControlLg' type='text' size="md" onChange={(e)=>setNumriPersonal(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Shuma' id='formControlLg' type='text' size="md" onChange={(e)=>setPagesa(e.target.value)}/>
          <select className='form-control form-control-md' onChange={(e)=>setPershkrimi("Pagesa per muajin "+e.target.value)}>
            <option value='' >Zgjedh muajin</option>
            <option value='Janar'>Janar</option>
            <option value='Shkurt'>Shkurt</option>
            <option value='Mars'>Mars</option>
            <option value='Prill'>Prill</option>
            <option value='Maj'>Maj</option>
            <option value='Qershor'>Qershor</option>
            <option value='Korrik'>Korrik</option>
            <option value='Gusht'>Gusht</option>
            <option value='Shtator'>Shtator</option>
            <option value='Tetor'>Tetor</option>
            <option value='Nentor'>Nentor</option>
            <option value='Dhjetor'>Dhjetor</option>
          </select>
          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' checked id='flexCheckDefault' label='Njofto perdoruesin' />
            <a href="!#">Pagesat e realizuara</a>
          </div>
          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' onClick={()=>ruajFaturen()}>Ruaj faturen</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Pagesat e perfunduara <a href="#!" className="link-danger">Pagesa</a></p>
          </div>
        </MDBCol>

      </MDBRow>

      
    </MDBContainer>
  )
}

export default InternetShtoFaturen