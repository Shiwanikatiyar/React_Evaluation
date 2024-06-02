import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import ProductDetailsPage from '../Pages/ProductDetailsPage'
import { AuthContext } from '../Context/AuthContextProvider'
import { useContext } from 'react'

function PageWrapper({children}){
  const {AuthDetails} = useContext(AuthContext);
  if(!AuthDetails?. isLoggedIn){
    return <Navigate to = '/login' />
  }
  return children;
}

function AllRoutes() {
  return (
   <Routes>
    <Route path='/' element={
    <PageWrapper><Home/></PageWrapper>}></Route>

    <Route path='/login' element={<Login/>}></Route>

    <Route path='/product/details' element={<PageWrapper><ProductDetailsPage/></PageWrapper>}></Route>
   </Routes>
  )
}

export default AllRoutes