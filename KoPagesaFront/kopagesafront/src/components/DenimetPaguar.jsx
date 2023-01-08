import { MDBBadge } from 'mdb-react-ui-kit'
import React from 'react'

function DenimetPaguar({denimet}) {
    return (
        <tr>
              <td>{denimet.id}</td>
              <td>{denimet.pershkrimi}</td>
              <td>{denimet.nrPersonal}</td>
              <td>{denimet.data}</td>
              <td>{denimet.koha}</td>
              <td>{denimet.adresa}</td>
              <td>{denimet.denimi+"€"}</td>
              <td>
                {denimet.ePaguar==true ?
                  <MDBBadge color='success' pill>
                  E Paguar
                  </MDBBadge> :
                  <MDBBadge color='danger' pill>
                  Pa Paguar
                </MDBBadge>
                }
              </td>
            </tr>
      )
}

export default DenimetPaguar