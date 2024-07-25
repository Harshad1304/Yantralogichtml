import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import mobile_logo from '../../assets/Logo/mobile_logo.png'

function Footer() {
  return (
    <div className='w-full bg-gray-900 text-white py-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 px-4'>
        
        {/* Left-side footer */}
        <div className='md:col-span-4'>
          {/* Logo */}
          <img className='w-80 mb-4' src={mobile_logo} alt="Logo" />
          
        </div>

        {/* Right-side footer */}
        <div className='md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {/* Design Digital Column */}
          <div>
            <h3 className='text-lg mb-2'>Design Digital</h3>
            <a href="#" className='block text-sm mb-1'>Big Data Engineering</a>
            <a href="#" className='block text-sm mb-1'>Visual & Extended Reality</a>
            <a href="#" className='block text-sm mb-1'>Internet of Things</a>
            <a href="#" className='block text-sm mb-1'>AI</a>
            <a href="#" className='block text-sm mb-1'>Cloud</a>
            <a href="#" className='block text-sm mb-1'>Cybersecurity</a>
            <a href="#" className='block text-sm mb-1'>Robotics</a>
          </div>
          
          {/* Industries Column */}
          <div>
            <h3 className='text-lg mb-2'>Industries</h3>
            <a href="#" className='block text-sm mb-1'>Automotive</a>
            <a href="#" className='block text-sm mb-1'>Broadcast & Media</a>
            <a href="#" className='block text-sm mb-1'>Communications</a>
            <a href="#" className='block text-sm mb-1'>Off-Highway Equipment</a>
            <a href="#" className='block text-sm mb-1'>Healthcare & Life Sciences</a>
            <a href="#" className='block text-sm mb-1'>Appliances & Consumer Electronics</a>
            <a href="#" className='block text-sm mb-1'>Rail</a>
            <a href="#" className='block text-sm mb-1'>Semiconductor</a>
            <a href="#" className='block text-sm mb-1'>Aerospace</a>
          </div>

          {/* Products Column */}
          <div>
            <h3 className='text-lg mb-2'>Products</h3>
            <a href="#" className='block text-sm mb-1'>AI</a>
            <a href="#" className='block text-sm mb-1'>Broadcast & Media</a>
            <a href="#" className='block text-sm mb-1'>Automotive</a>
            <a href="#" className='block text-sm mb-1'>Healthcare</a>
          </div>

          {/* Services Column */}
          <div>
            <h3 className='text-lg mb-2'>Services</h3>
            <a href="#" className='block text-sm mb-1'>Research & Strategy</a>
            <a href="#" className='block text-sm mb-1'>Design</a>
            <a href="#" className='block text-sm mb-1 ml-4'>- Portfolio</a>
            <a href="#" className='block text-sm mb-1'>Test & Validation</a>
            <a href="#" className='block text-sm mb-1'>Operate & Automate</a>
            <a href="#" className='block text-sm mb-1'>Industry 4.0</a>
            <a href="#" className='block text-sm mb-1'>Product Engineering</a>
            <a href="#" className='block text-sm mb-1'>Enterprise Learning</a>
          </div>
        </div>
      </div>

      <div className='container mx-auto mt-10 px-4'>
        <div className='flex justify-between items-center border-t border-gray-700 pt-4'>
          <div className='text-sm'>
            © 2024 Yantralogic 
            <a href="/privacy-policy" className='hover:underline'>Privacy Policy</a> | <a href="#" className='hover:underline'>Cookie Policy</a> | <a href="#" className='hover:underline'>Terms of Use</a>
          </div>
          <div className='flex space-x-4'>
            <a href="#" className='text-xl'><FaFacebook /></a>
            <a href="#" className='text-xl'><FaTwitter /></a>
            <a href="#" className='text-xl'><FaLinkedin /></a>
            <a href="#" className='text-xl'><FaInstagram /></a>
            <a href="#" className='text-xl'><FaYoutube /></a>
            <a href="#" className='text-xl'><FaGithub /></a>
          </div>
        </div>
        <div className='mt-4 text-center text-sm'>
          <Link to="about-us" className='mx-2 hover:underline'>About Us</Link> | 
          <a href="#" className='mx-2 hover:underline'>Investors</a> | 
          <a href="#" className='mx-2 hover:underline'>Careers</a> | 
          <a href="#" className='mx-2 hover:underline'>News</a> | 
          <a href="#" className='mx-2 hover:underline'>Insights</a> | 
          <Link to="contact-us" className='mx-2 hover:underline'>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
