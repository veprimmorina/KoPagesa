import React from 'react'
import * as Icon from 'react-bootstrap-icons'

function Suses() {

    setTimeout(function() {
        window.location.href='http://localhost:3000/profili';
      }, 5000);

  return (
    <div class="container">
   <div class="row">
      <div class="col-md-6 mx-auto mt-5">
         <div class="payment">
            <div class="payment_header">
               <div class="check"><Icon.Check color='green' size={50}/></div>
            </div>
            <div class="content">
               <h1>Pagesa u realizua me sukses !</h1>
               <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
               <a href="#">Kthehu prapa</a>
            </div>
            
         </div>
      </div>
   </div>
</div>
  )
}

export default Suses