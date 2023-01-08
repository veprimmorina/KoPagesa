import React from 'react'
import { Card } from 'react-bootstrap'

function Banerat() {
  return (
  <div className='container pb-5 baners'>
    <div className='row'>
        <div className='col-md'>
            <Card className='baner-1 h-100 shadow'>
              <div class="row justify-content-center mb-4 radio-group">
                  <div class="col-sm-3 col-5">
                    <div class='radio selected mx-auto baner' data-value="dk"> <ul><li></li></ul></div>
                  </div>
            </div>
            </Card>
            <b>Shpejte</b>
        </div>
        <div className='col-md text-center '>
            <Card className='baner-2 h-100 shadow'>
            <div class="row justify-content-center mb-4 radio-group">
                  <div class="col-sm-3 col-5">
                    <div class='radio selected mx-auto baner' data-value="dk"> <ul><li></li></ul></div>
                  </div>
            </div>
            <b className='mt-5 pt-3'>Shpejte</b>
            </Card>
        </div>
        <div className='col-md'>
            <Card className='baner-3 h-100 shadow'>
            <div class="row justify-content-center mb-4 radio-group">
                  <div class="col-sm-3 col-5">
                    <div class='radio selected mx-auto baner' data-value="dk"> <ul><li></li></ul></div>
                  </div>
            </div>
            <b>Sigurt</b>
            </Card>
        </div>
    </div>
  </div>
  )
}

export default Banerat