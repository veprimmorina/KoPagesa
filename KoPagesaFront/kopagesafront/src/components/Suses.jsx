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
            <div class="payment_header bg-primary">
               <div class="check"><Icon.Check color='green' size={50}/></div>
            </div>
            <div class="content">
               <h1>Pagesa u realizua me sukses !</h1>
               <p>Permes ketij mesazhi konfirmojme pagesen permes aplikacionit KOPagesa. Kontrolloni email adresen tuaj ne lidhje me me shume detaje. Ju Faleminderit!</p>
               <a href="#" className='bg-primary'>Kthehu prapa</a>
            </div>
            
         </div>
      </div>
   </div>
</div>
  )
}

export default Suses