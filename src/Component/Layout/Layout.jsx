import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
// import img from '../../Asseist/img/messi-world-cup.jpg'

export default function Layout() {
  return <>
  <Navbar/>

<Outlet></Outlet>
  <Footer/>
  </>
}
