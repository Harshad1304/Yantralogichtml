import React from 'react';

function Hero() {
  return (
    <div className='bg-slate-600 text-white h-screen w-full relative '>
       
       <video className='w-full h-full object-cover'  src="https://videos.pexels.com/video-files/7534239/7534239-hd_1920_1080_25fps.mp4" autoPlay loop muted ></video>  

      <div className='pt-[200px] pl-[6vw] '>
        <h2 className='font-semibold text-6xl mb-3'>Meet the Digital Drivers of Global Disruptors</h2>
        <p className='mb-10 text-3xl font-thin'>
          We catalyze business growth by reimagining digital experiences that <br />
          conquer complex challenges through innovation and agility.
        </p>
        <a
          href="#"
          className='bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded'
        >
          Consult Our Experts
        </a>
      </div>
      
    </div>
  );
}

export default Hero;
