import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function RootLayout() {
  return (
    <div id="root-layout">
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