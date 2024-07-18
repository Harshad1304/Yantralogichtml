import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import LocomotiveScroll from 'locomotive-scroll';

import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout.jsx'

//Pages
import LandingPage from './components/LandingPage/LandingPage.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';


const router = createBrowserRouter( 
  createRoutesFromElements(
    
   
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<LandingPage />} />
      <Route path='about-us' element={<AboutUs />} />
      <Route path='contact-us' element={<ContactUs />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
    
    
  )
)


const locomotiveScroll = new LocomotiveScroll({
  smooth: true,
  smoothWheel: true,
});

 
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
