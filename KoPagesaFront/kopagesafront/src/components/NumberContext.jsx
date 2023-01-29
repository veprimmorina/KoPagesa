import React from 'react'
import Display from './Display';


export const Context = React.createContext();

function NumberContext() {
  return (
    
    <Context.Provider value={'20'}>
        <Display />
    </Context.Provider>
  )
}

export default NumberContext