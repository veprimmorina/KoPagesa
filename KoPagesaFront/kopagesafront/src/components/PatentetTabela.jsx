import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit'
import { Link } from "react-router-dom";
import React from 'react'

function PatentetTabela({patenti}) {
  return (
    <tr>
          <td>
              <img
                src={patenti.fotografia}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
          </td>
          <td>{patenti.emri}</td>
          <td>{patenti.mbiemri}</td>
          <td>{patenti.numriPersonal}</td>
          <td>
            {patenti.eAktivizuar==true ?
              <MDBBadge color='success' pill>
              Aktive
              </MDBBadge> :
              <MDBBadge color='danger' pill>
              E deaktivizuar
            </MDBBadge>
            }
            
          </td>
         
          <td>
                <Link to={'patenta/'+patenti.id} target="_blank">
                <MDBBtn color='link' rounded size='sm'>
                      Shiko patent shoferin
                </MDBBtn>
              </Link>
          </td>
        </tr>
  )
}

export default PatentetTabela