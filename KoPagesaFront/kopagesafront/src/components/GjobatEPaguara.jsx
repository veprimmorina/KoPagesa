import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function GjobatEPaguara({gjoba}) {

  return (
    <>
              <div className="card mt-3 shadow bg-success">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex bg-success justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>{gjoba.pershkrimi}</h6>
                    <span className="text-white"><Link to={"fatura/"+gjoba.id}><Button variant="warning">Detajet</Button></Link></span>
                  </li>
                  </ul>
              </div>
    </>
  )
}

export default GjobatEPaguara