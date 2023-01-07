import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit'
import { Link } from "react-router-dom";
import React from 'react'

function PatentetTabela({patenti}) {
  return (
    <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={patenti.fotografia}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{patenti.emri}</p>
                <p className='text-muted mb-0'>{patenti.mbiemri}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{patenti.numriPersonal}</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
           
                <Link to={'patenta/'+patenti.id} target="_blank">
                <MDBBtn color='link' rounded size='sm'>
                      Edit
                </MDBBtn>
              </Link>
            
          </td>
        </tr>
  )
}

export default PatentetTabela