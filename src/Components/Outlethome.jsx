import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
// import { Helmet } from "react-helmet";

export default function Outlethome() {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   
   </>
  )
}
