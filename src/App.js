import logo from './logo.svg';
import './App.css';

import React from 'react'
import Layout from './Component/Layout/Layout';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Portfolio from './Component/Portfolio/Portfolio';
import Home from './Component/Home/Home';



let routers = createHashRouter([
  {path:"", element: <Layout/>, children:[
    {index: true , element:<Home/>},
    {path: "about", element: <About/>},
    {path: "Portfolio" , element: <Portfolio/>},
    {path: "contact" ,element: <Contact/>}
  ]}
])
export default function App() {
  return<>
  <RouterProvider router={routers}></RouterProvider>
  </>
}
