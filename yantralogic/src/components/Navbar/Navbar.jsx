import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";
function Navbar() {

    const [isMenuOpen, setMenuOpen] = useState(true);

    const handleMenuClick = ()=>{
        setMenuOpen(!isMenuOpen)
    }
    

  return (

            <div className=' flex pt-6 px-9 justify-between items-center w-full h-12 absolute z-10'> 
                <div className=''>
                    <img className=' h-auto w-36' src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/appi-blue-wht-logo.svg" alt="" />        
                </div>

                <div className='hidden xl:flex'>
                <ul className=' text-white flex gap-16 tracking-wide  items-center mt-4 uppercase '>
                        <li className=' cursor-pointer ' >Home</li>
                        <li className=' cursor-pointer ' >Services</li>
                        <li className=' cursor-pointer ' >About</li>
                        <li className=' cursor-pointer ' >Industries</li>
                        <a className='  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-3 px-7 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' href="#">Contact Us</a>
                    </ul>                      
                </div>

                {/* Menu Button */}
            <div onClick={handleMenuClick} className='xl:hidden  z-10 cursor-pointer'>
                {isMenuOpen?<RiCloseLargeLine className='text-3xl' />:<FiAlignJustify className='text-white text-3xl'/>}
                
                </div>
                   
                    {/* Mobile Nav */}
                <div className={isMenuOpen?' xl:hidden absolute pt-6 px-12 flex flex-col  top-0 left-0  bg-white w-full h-screen transition-all duration-500 ' : 'xl:hidden absolute pt-6 px-12 flex flex-col  top-0 -left-full  bg-white w-full h-screen transition-all duration-500 ' }>
                    <img className=' h-auto w-36' src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appi-blue-blk-logo.svg" alt="" /> 
                    <ul className='py-10 '>
                        <li className='flex justify-between  border-b border-slate-400 text-4xl text-black font-thin mb-7 py-2'> Home 
                            <a href='#' className='block'>+</a>
                        </li>
                        <li className='flex justify-between  border-b border-slate-400 text-4xl text-black font-thin mb-7 py-2'> Services 
                            <a href='#' className='block'>+</a>
                        </li>
                        <li className='flex justify-between  border-b border-slate-400 text-4xl text-black font-thin mb-7 py-2'> About 
                            <a href='#' className='block'>+</a>
                            </li>
                        <li className='flex justify-between border-b border-slate-400 text-4xl text-black font-thin mb-7 py-2'> Industries 
                            <a href='#' className='block'>+</a></li>
                     </ul>
                <div className='felx mx-auto'>
                <a className=' text-white text-3xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg  px-9 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' href="#">Contact Us</a>
                </div>   

                </div>

            </div>
               
  
  )
}

export default Navbar