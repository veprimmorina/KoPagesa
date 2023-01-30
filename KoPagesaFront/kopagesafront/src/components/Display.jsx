import React from 'react'
import { useContext } from 'react'
import { Context } from './NumberContext'

function Display() {
    const val = useContext(Context)
    return (
       <div>
          <p>{val}</p>
          </div>
      );
}

export default Display