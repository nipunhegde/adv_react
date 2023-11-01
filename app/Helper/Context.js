"use client"
import React, { createContext } from 'react'
export const Mycontext=createContext();
const Context = ({children}) => {
    
    const usernamewithcontext="anil sharma"

    return (
    <div><Mycontext.Provider value={usernamewithcontext}>{children}</Mycontext.Provider></div>
  )
}

export default Context