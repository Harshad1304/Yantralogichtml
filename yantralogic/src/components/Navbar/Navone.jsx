import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";


function Navone() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = ()=>{
        setMenuOpen(!isMenuOpen)
    }

    return (


    // NavBar For desktop
    <div className='flex pt-6 px-9 justify-between items-center w-full h-12 absolute z-10'>
        <div className=' '>
        <img className='h-auto w-96' src="/public/Logo/yantralgoiclogo.svg" alt="" />        
        </div>
    <div className='hidden xl:block'>
        <div className=' text-white text-[1.2vw] flex gap-8 tracking-wide  items-center mt-4 uppercase'>
        <Flyoutcontent href={"#"}>Home</Flyoutcontent>
        <Flyoutcontent href={"#"} Dropdowncontent={Services }>Services</Flyoutcontent>
        <Flyoutcontent href={"#"} Dropdowncontent={Solutions }>Solutions</Flyoutcontent>
        <Flyoutcontent href={"#"}>Carrers</Flyoutcontent>
        <Flyoutcontent href={"#"} >About Us</Flyoutcontent>
        {/* contanct us button */}
        <a className='  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  text-sm px-7 py-2.5 me-2 mb-2 mt-2 ml-16 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' href="#">Contact Us</a> 
        </div>
    </div>
      {/* Mobile Nav  Menu Button */}
      <div onClick={handleMenuClick} className='xl:hidden  z-10 cursor-pointer'>
                {isMenuOpen?<RiCloseLargeLine className='text-3xl' />:<FiAlignJustify className='text-white text-3xl'/>}
                
                </div>
                   
                    {/* Mobile Nav */}
                <div className={isMenuOpen?' xl:hidden absolute pt-6 px-12 flex flex-col  top-0 left-0  bg-white w-full h-screen transition-all duration-500 ' : 'xl:hidden absolute pt-6 px-12 flex flex-col  top-0 -left-full  bg-white w-full h-screen transition-all duration-500 ' }>
                    <div className=' w-full'>
                    <img className=' h-auto w-60' src="/public/Logo/mobile_logo.png" alt="" /> 
                    </div>
                    
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


const Flyoutcontent = ({children, href, Dropdowncontent})=>{

    const[open, setOpen] = useState(false);
    const showDropdown = open && Dropdowncontent

    return(

        <div 
        onMouseEnter={()=>setOpen(true)}
        onMouseLeave={()=>setOpen(false)}
        className='relative h-fit w-fit'>
            <a
            className='relative'
            href={href}>{children}
            <span 
            style={{transform:showDropdown?'scaleX(1)':'scaleX(0)'}}
            className='absolute h-1 bg-indigo-400 origin-left duration-300 ease-out mt-2 rounded-xl top-[23px] -right-2 -left-2'></span>
            </a>
            
            <AnimatePresence> 
            {
                showDropdown && <motion.div initial={{opacity:0, y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:15}} style={{translateX:"-50%"}} className='absolute top-14 left-1/2 -translate-x-1/2 text-black'>
                     <div className=' absolute left-0 right-0 -top-6 h-6 '></div>
                     <div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-3 z-[-1] h-10 w-10 bg-white rotate-45'></div>
                    <Dropdowncontent />
                </motion.div>
            }
            </AnimatePresence>
        </div>
    )
}

const Services = ()=>{
return(
    <div className='flex flex-col  w-64 p-10 bg-white rounded-lg'>
        <div>
            <span className='block text-sm'>Software Development</span>
            <a href="">mobile app </a>
            <a href="">mobile app </a>
        </div>
    </div>
)

}
const Solutions = ()=>{
return(
    <div className='flex flex-col  w-[50vw] h-[40vh] p-10 bg-white rounded-lg'>
        <div>
            <span className='block text-sm'>Software Development</span>
            <a href="">mobile conn </a>
            <a href="">mobile app </a>
        </div>
    </div>
)

}

export default Navone