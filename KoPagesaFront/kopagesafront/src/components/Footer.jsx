import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import * as Icon from'react-bootstrap-icons'

function Footer() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
          <MDBContainer className='p-4'>
            <section className='mb-4'>
              
    
              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <Icon.Twitter color='blue' />
              </MDBBtn>
    
              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <Icon.Google color='green' />
              </MDBBtn>
    
              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <Icon.Instagram color='red' />
              </MDBBtn>
    
              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <Icon.Facebook color='blue'/>
              </MDBBtn>
    
            </section>
    
            <section className=''>
              <form action=''>
                <MDBRow className='d-flex justify-content-center'>
                  <MDBCol size="auto">
                    <p className='pt-2'>
                      <strong>Na ndiqni ne rrjetet tona sociale</strong>
                    </p>
                  </MDBCol>
    
                  <MDBCol md='5' start>
                    <MDBInput contrast type='email' label='Email address' className='mb-4' />
                  </MDBCol>
    
                  <MDBCol size="auto">
                    <MDBBtn outline color='light' type='submit' classNameName='mb-4'>
                      Subscribe
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </form>
            </section>
    
            <section className='mb-4'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                sequi voluptate quas.
              </p>
            </section>
    
            <section className=''>
              <MDBRow>
                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>KoPagesa</h5>
    
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <a href='#!' className='text-white'>
                        Rreth nesh
                      </a>
                    </li>
                    <li>
                      <a href='#!' className='text-white'>
                        Pagesa
                      </a>
                    </li>
                    <li>
                      <a href='#!' className='text-white'>
                        Manuali
                      </a>
                    </li>
                   
                  </ul>
                </MDBCol>
    
                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Sherbime</h5>
    
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <a href='#!' className='text-white'>
                        Regjistrohu
                      </a>
                    </li>
                    <li>
                      <a href='#!' className='text-white'>
                        Kycu
                      </a>
                    </li>
                    <li>
                      <a href='#!' className='text-white'>
                        Krijo llogari
                      </a>
                    </li>
                    
                  </ul>
                </MDBCol>
    
                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Gjoba</h5>
    
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <a href='#!' className='text-white'>
                        Gjobat e mia
                      </a>
                    </li>
                    <li>
                      <a href='#!' className='text-white'>
                       Gjobat e paguara
                      </a>
                    </li>
                    <li>
                      <a href='#!' className='text-white'>
                        Gjobat pa paguar
                      </a>
                    </li>
                    
                  </ul>
                </MDBCol>
    
                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Rreth aplikacionit</h5>
    
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <a href='#!' className='text-white'>
                        Vleresime
                      </a>
                    </li>
                    <li>
                      <a href='#!' className='text-white'>
                        Ankesa
                      </a>
                    </li>
                    <li>
                      <a href='#!' className='text-white'>
                        Kerkesa
                      </a>
                    </li>
                    
                  </ul>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>
    
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className='text-white' href='https://mdbootstrap.com/'>
              KOPagesa
            </a>
          </div>
        </MDBFooter>
    )
}

export default Footer