import React from 'react'

function Numbers() {
  return (
    <div className=' h-auto bg-slate-200 py-12 lg:py-24  px-4 text-black'>

    <div className=' grid lg:grid-cols-3 gap-x-5 gap-y-16 mx-auto max-w-screen-xl'>
    <div className='flex flex-col gap-1'>
        <div className='text-blue-700 text-4xl font-bold'>35<span>+</span></div>
        <div className='font-bold'>Industries Mastered</div>
        <div className='font-extralight  leading-snug   text-black tracking '>With our agility & engineering expertise, we equip your critical business functions with customised tech, and expand digital capabilities.</div>
    </div>
    <div  className='flex flex-col gap-1 px-2'>
        <div className='text-blue-700 text-4xl font-bold'>1500<span>+</span></div>
        <div className=' font-bold'>Tech Evangelists</div>
        <div className=' font-light  leading-snug   text-black tracking '>We are a dynamic team of technology enthusiasts and experts passionately driven to achieve the best results for our clients.</div>
    </div>
    <div className='flex flex-col gap-1 px-2'>
        <div className='text-blue-700 text-4xl font-bold'>3000<span>+</span></div>
        <div className=' font-bold'>Solutions Designed and Delivered</div>
        <div className=' font-light  leading-snug   text-black tracking '>We have empowered businesses with thousands of successful futuristic solutions that have helped them grow and scale.</div>
    </div>
    <div  className='flex flex-col gap-1 px-2'>
        <div className='text-blue-700 text-4xl font-bold'>500<span>+</span></div>
        <div className='font-bold'>Legacy Processes Transformed</div>
        <div className=' font-light  leading-snug   text-black tracking '>We are a dynamic team of technology enthusiasts and experts passionately driven to achieve the best results for our clients.</div>
    </div>
    <div  className='flex flex-col gap-1 px-2'>
        <div className='text-blue-700 text-4xl font-bold'>05<span>+</span></div>
        <div className=' font-bold'>Strategic Federal Partnerships</div>
        <div className=' font-light  leading-snug   text-black tracking '>We drive collaborative initiatives that address critical challenges and deliver impactful solutions.</div>
    </div>
<div className=' flex mx-auto lg:mx-0  max-w-96 flex-col pb-4 rounded-xl px-6 bg-newblue'>
    {/* <div className='block relative'><img src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/industry-cta-bg.svg" className=' absolute  right-0 top-8 h-20 w-20  opacity-40' alt="" /></div> */}
    <h2 className=' text-xl text-white font-bold py-5'> Ready to innovate and drive <br /> an impact?</h2>
    <button className=' self-center lg:self-auto max-w-48 text-newblue bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-3 px-7 py-2.5 me-2 mb-2  focus:outline-none'> Partner with Us </button>
</div>
    </div>           


    </div>
  )
}

export default Numbers