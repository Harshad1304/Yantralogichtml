import { motion } from 'framer-motion';
import React from 'react';

function Hero() {
  return (
    <div 
      className='bg-slate-600 text-gray-300 h-screen w-full relative'
    >
      <video 
        className='w-full h-full object-cover' 
        src="https://videos.pexels.com/video-files/2675515/2675515-hd_1920_1080_30fps.mp4" 
        autoPlay 
        loop 
        muted 
      ></video>

      {/* Overlay Div for adding filtering the image */}
      <div className='absolute h-full w-full top-0 left-0 bg-slate-800/50'></div>

      <div 
        
        className='pt-[250px] pl-[6vw] absolute top-0'
      >
        <motion.h2 
          initial={{ opacity: 0, y: '40%' }}
          animate={{ opacity: 1, y: '0' }}
          transition={{ duration: 1, delay:0.5,ease: [0.45, 0, 0.55, 1]}}
          className='font-semibold tracking-tighter text-3xl xl:text-6xl mb-3 md:mb-7'
        >
          Meet the Digital Drivers of Global Disruptors
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: '20%' }}
          animate={{ opacity: 1, y: '0' }}
          transition={{ duration: 1, delay: 1,ease: [0.45, 0, 0.55, 1] }}
          className='mb-10 text-3xl font-extralight'
        >
          We catalyze business growth by reimagining digital experiences that <br />
          conquer complex challenges through innovation and agility.
        </motion.p>
        {/* <motion.a
          href="#"
          className='bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white text-xl py-3 px-6 border border-white hover:border-transparent rounded-xl'
          initial={{ opacity: 0, y: '20%' }}
          animate={{ opacity: 1, y: '0' }}
          transition={{ duration: 1, delay: .6,ease: [0.45, 0, 0.55, 1] }}
          whileHover={{ scale: 1.1 }}
        >
          Consult Our Experts
        </motion.a> */}
      </div>
    </div>
  );
}

export default Hero;
