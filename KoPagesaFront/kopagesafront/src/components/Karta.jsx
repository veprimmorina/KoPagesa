import React from 'react'
import { Card } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

function Karta({title,value}) {
  return (
    <Card className={'shadow '+title=="Numri i gjobave" ? " bg-danger " : title=="Gjoba pa paguar" ? "bg-warning" : title=="Gjoba te paguara" ? "bg-success" : title=="Gjoba sot" ? "bg-light" : title=="Patent shofer" ? "bg-success" : title=="Te deaktivizuar" ? "bg-danger" : title=="Aktive" ? "bg-primary" : "bg-danger"}>
    <Card.Body className='text-center text-white'>
    <h5 className='card-title'>{title}</h5>
    {title=="Numri i gjobave" ? <Icon.ReceiptCutoff size="40" color="white" /> : title=="Gjoba pa paguar" ? <Icon.DashCircle size={40} color='white' /> : title=="Gjoba te paguara" ? <Icon.Check size={40} color='white' /> : title=="Gjoba sot" ? "bg-light" : title=="Patent shofer" ? <Icon.CreditCard size={40} /> : title=="Te deaktivizuar" ? <Icon.ExclamationOctagon size={40}/> : title=="Aktive" ? <Icon.Check2Circle size={40} />: "bg-danger"}
    <h5 className='card-text mt-2'>{value}</h5>
    </Card.Body>
    </Card>
    )
}

export default Karta