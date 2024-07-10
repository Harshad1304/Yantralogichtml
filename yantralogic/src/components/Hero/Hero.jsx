import React from 'react';

function Hero() {
  return (
    <div className='bg-slate-600 text-gray-300 h-screen w-full relative '>
       
       <video className='w-full h-full object-cover'  src="https://videos.pexels.com/video-files/7534239/7534239-hd_1920_1080_25fps.mp4" autoPlay loop muted ></video>

    {/* Overlay Div for adding filtering the image */}
    <div className=' absolute h-full w-full top-0 left-0 bg-slate-800/50'></div>

      <div className=' pt-[250px]  pl-[6vw] absolute top-0'>
        <h2 className='font-semibold tracking-tighter text-3xl xl:text-6xl mb-3 md:mb-7'>Meet the Digital Drivers of Global Disruptors</h2>
        <p className='mb-10 text-3xl  font-extralight '>
          We catalyze business growth by reimagining digital experiences that <br />
          conquer complex challenges through innovation and agility.
        </p>
        <a
          href="#"
          className='bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white text-xl py-3 px-6 border border-white hover:border-transparent rounded-xl'
        >
          Consult Our Experts
        </a>
      </div>
      
    </div>
  );
}

export default Hero;
