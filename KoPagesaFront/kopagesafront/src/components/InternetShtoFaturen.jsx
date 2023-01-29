import React from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';


function InternetShtoFaturen() {
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

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
          <MDBInput wrapperClass='mb-4' label='Numri Personal i klientit' id='formControlLg' type='text' size="md"/>
          <MDBInput wrapperClass='mb-4' label='Shuma' id='formControlLg' type='text' size="md"/>
          <select className='form-control form-control-md'>
            <option value=''>Zgjedh muajin</option>
            <option value='Janar'>Janar</option>
            <option value='Janar'>Janar</option>
            <option value='Janar'>Janar</option>
            <option value='Janar'>Janar</option>
            <option value='Janar'>Janar</option>
            <option value='Janar'>Janar</option>
            <option value='Janar'>Janar</option>
            <option value='Janar'>Janar</option>
            <option value='Janar'>Janar</option>
            <option value='Janar'>Janar</option>
            <option value='Janar'>Janar</option>
            <option value='Janar'>Janar</option>
          </select>


          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' checked id='flexCheckDefault' label='Njofto perdoruesin' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>

      
    </MDBContainer>
  )
}

export default InternetShtoFaturen