import React from 'react'
import Card from '../Card/Card'
import contents from '../Card/content'

function Services() {
  return (

<div className=' w-full bg-black  p-24  '> 

            {/* Headings goes here */}
        <div className=''>
          <div>
            <h1 className=' hidden md:block lg:text-5xl text-3xl font-light text-white'>We Create New Solutions and Transform <br />
                Existing Ones with a Development Process That <br /> 
                Beats Industry-Best Timelines
            </h1>
            <h1 className=' md:hidden lg:text-5xl text-3xl font-light text-white'>
            We Create New Solutions and Transform
              Existing Ones with a Development Process That
              Beats Industry-Best Timelines
            </h1>
          </div>

            {/* Button goes here */}
            <div className='mt-20'> 
                <a href="#" className='block size-fit bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white text-xl py-2 px-8 border border-white hover:border-transparent rounded-xl'>
                Our Services
                </a>
            </div>

           {/* Our Cards Goes Here */}
           <div className="mt-20 grid gap-4 md:gap-4 grid-cols-4">
           {contents.map((elem,i)=>(
            <Card src={elem.imgSrc} key={i} title={elem.heading} />
           ))}
           </div>
        </div>

        

</div>
  )
}

export default Services