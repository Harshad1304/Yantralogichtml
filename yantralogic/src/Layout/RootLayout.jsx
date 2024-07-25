import React, { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ScrollTop from '../components/ScrollTop/ScrollTop'



function RootLayout() {

 



  return (
    <div id="root-layout" >
        <ScrollTop />
        <header>
            <Navbar />
        </header>
    
        <main>
            <Outlet />
        </main>
        
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default RootLayout