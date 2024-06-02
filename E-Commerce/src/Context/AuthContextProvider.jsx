import React, { useState } from 'react'
import { createContext } from 'react'

const AuthContext = createContext();

function AuthContextProvider({children}) {
const [AuthDetails, setAuthDetails]= useState({
isLoggedIn: true,
token: null

});

const login = (token)=>{
  setAuthDetails({
    isLoggedIn:true,
    token:token
  });
}

const logout = () =>{
  setAuthDetails({
    isLoggedIn:false,
    token: null
  });
}
  return (
    <AuthContext.Provider value={ {AuthDetails,login,logout}}>{children}</AuthContext.Provider>
  )
}

export  {AuthContextProvider,AuthContext}