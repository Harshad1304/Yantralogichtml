import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";
import navMenuLinks from './navcontent';

function Navbar() {

    const [isMenuOpen, setMenuOpen] = useState(true);

    const handleMenuClick = ()=>{
        setMenuOpen(!isMenuOpen)
    }
    

  return (

            <motion.div  className=' flex pt-6 px-9 justify-between items-center w-full h-12 absolute z-10'> 
                <div className=''>
                    <img className=' h-auto w-36' src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/appi-blue-wht-logo.svg" alt="" />        
                </div>

                <div className='hidden  xl:flex'>
                <ul className=' text-white flex gap-16 tracking-wide  items-center mt-4 uppercase '>
                       
                       {
                        navMenuLinks.map((item,index)=> (<a key={index} href={item.href} className={item.lable === 'Contact Us'?'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-3 mt-3 px-7 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800':'relative group'}>
                            {item.lable}
                            {item.submenu && <div className='absolute bg-white w-auto -left-3 h-60 top-10 hidden group-hover:block p-4'>
                            {item.submenu.map((subitem,id)=><a className='block text-black' href={subitem.href} key={id}>{subitem.lable}</a>)}
                                </div>}
                            </a>))
                       }

                        {/* <li className=' cursor-pointer '>Home</li>
                        
                        <li className=' cursor-pointer ' >About</li>
                        <li className=' cursor-pointer ' >Industries</li>
                        <a className='  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-3 px-7 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' href="#">Contact Us</a> */}
                    </ul>                      
                </div>


                {/* Mobile Nav  Menu Button */}
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

            </motion.div>
               
  
  )
}

export default Navbar



{/* <div className=' group relative'>
                            <li className=' cursor-pointer ' >Services</li>
                            <span className='bg-zinc-200 h-1 absolute right-0 left-0 rounded-lg origin-left scale-x-0 group-hover:scale-x-100 group-hover:transition-transform group-hover:duration-300'></span>
                            <div className=' absolute  h-6 left-0 right-0 '></div>
                            <div className='  hidden group-hover:block absolute top-10 -translate-x-1/2 left-1/2 bg-white w-64 h-80'> <div className='text-black justify-center flex'><h1>Hello dropdown</h1></div>
                            </div>
                        </div> */}