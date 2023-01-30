import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function GjobatPolice() {

    const {numripersonal} = useParams()
    const [gjoba, setGjobat] = useState()
    useEffect(()=>{
        axios.get("https://localhost:7000/api/Gjoba/gjoba/numri/"+numripersonal).then(response=>{
            setGjobat(response.data)
        })
    },[])
  return (
    <div className='fined text-center'>
    <b>{gjoba.pershkrimi}</b>
    <p>Pagesa: {gjoba.denimi+" Euro"}</p>
  </div>
  )
}

export default GjobatPolice