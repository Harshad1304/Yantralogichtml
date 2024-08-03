import React from 'react';
import Numbers from '../Numbers/Numbers';
import AnimatedCards from './AnimatedCards';
import { motion } from 'framer-motion';


function AboutUs() {
  return (
    
    <div className='w-full '>
     
      
      {/* Banner Image */}
      <div className='w-full h-[90vh] bg-cover bg-bottom flex  justify-center items-center relative' style={{ backgroundImage: `url("https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr1=")` }}>
      {/* overlay */}
      <div className='bg-gray-900/40 w-full h-full absolute top-0 left-0'></div>
          <motion.h1 
          initial={{y:100,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1.5,ease:[0.45, 0, 0.55, 1]}}
          className='text-[6.5vw] font-semibold relative z-10 text-gray-300/80'> About US</motion.h1>
      </div>
      {/* Below Banner Section */}
      <div className='w-full bg-gray-100 pt-28 px-10 md:px-40'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-6'>
          {/* left-side section */}
          <div className='md:col-span-6'>
            <h1 className='text-4xl font-bold'>Aurionpro At A Glance</h1>
            <p className=' text-sm font-semibold md:font-normal md:text-3xl mt-2 md:mt-5'>The Enabler Of Platform-Led Enterprise Transformation</p>
          </div>
          {/* Right-side Section */}
          <div className='md:col-span-6 md:text-xl '>
            <p>At Aurionpro, we’re the convergence of advanced technology solutions that help enterprises accelerate Digital Innovation – securely and efficiently. We are “One Platform”, guiding businesses to ADAPT to a new paradigm in Digital Transformation across Banking, Transportation, Logistics, and Government sectors.</p>
          </div>
        </div>
        <div className='text-center mt-5 -mb-5 md:mt-10'>
          <h3 className='text-4xl font-bold'>Our Identity</h3>
        </div>
        <AnimatedCards />
      </div>
      {/* By the numbers */}
      <div>
        <Numbers />
      </div>
      {/* Description */}
      <div className=' p-5 md:p-16 md:px-14 w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10'>
        {/* Leftside content */}
        <div className='md:col-span-6 col-span-12 relative'>
          <span className='absolute -left-7 top-4 bg-red-800 h-2 rotate-90 w-8'></span>
          <h1 className='text-3xl font-bold'>Think Global, Act Local</h1>
          <div className='flex flex-col gap-10 text-xl'>
            <p className='mt-8 md:mt-20'>
              Our approach at Black Box is best described as "GLOCAL," embodying the philosophy of "Think Global, Act Local." This principle guides us in maintaining strong relationships by providing flexibility to our customers and delivering cost-effective solutions tailored to the specific needs of the countries we operate in.
            </p>
            <p className='-mt-5'>
              As a prominent global ICT solutions provider, Black Box is committed to promoting sustainable and responsible business practices. We strive to align our operations with robust sustainability policies, adhere to best practices, and meet high reporting standards. Our ongoing dedication extends to achieving diversity, equity, and inclusion targets within our workplace, ensuring a supportive and inclusive environment for all.
            </p>
          </div>
        </div>
        {/* Rightside content image */}
        <div className='md:col-span-6 col-span-12 flex justify-end items-center'>
          <img className='w-full md:w-auto md:max-w-[35vw]' src="https://cdn.blackbox.com/cms/images/home/globe.png" alt="Globe" />
        </div>
      </div>
  
    </div>
  );
}

export default AboutUs;
