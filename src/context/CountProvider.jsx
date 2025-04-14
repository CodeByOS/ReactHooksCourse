import React from 'react'
import { createContext } from 'react'

const CountProvider = ({children}) => {
    export const counterContext = createContext();
  return (
    <div>
        
    </div>
  )
}

export default CountProvider