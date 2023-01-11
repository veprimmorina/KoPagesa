import React from 'react'
import { Card } from 'react-bootstrap'

function Karta({title,value}) {
  return (
    <Card className={'shadow '+title=="Numri i gjobave" ? " bg-danger " : title=="Gjoba pa paguar" ? "bg-warning" : title=="Gjoba te paguara" ? "bg-success" : title=="Gjoba sot" ? "bg-light" : ""}>
    <Card.Body className='text-center'>
    <h1><i class="bi bi-person-video2"></i></h1>
    <h5 className='card-title'>{title}</h5>
    <h5 className='card-text mt-2'>{value}</h5>
    </Card.Body>
    </Card>
    )
}

export default Karta