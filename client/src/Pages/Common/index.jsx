import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Index() {
  return (
   <>
   <Navbar/>
  <div> <Outlet/></div>
   
   </>
  )
}

export default Index