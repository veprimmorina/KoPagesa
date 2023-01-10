import React from 'react'

function GjobatEPaguara({gjoba}) {
  return (
    <>
    <small className='text-center'>{gjoba.pershkrimi}</small>
    <div class="progress mb-3" style={{height: "5px"}}>
        <div class="progress-bar bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </>
  )
}

export default GjobatEPaguara