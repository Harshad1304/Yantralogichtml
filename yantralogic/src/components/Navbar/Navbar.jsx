import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import yantralgoiclogo from '../../assets/Logo/yantralgoiclogo.svg'
import mobile_logo from '../../assets/Logo/mobile_logo.png'

import {Link, NavLink} from 'react-router-dom'



function Navone() {

    //Change nav color when scrolling
    const [color, setColor] = useState(false);
    const changeColor = ()=>{
        if(window.scrollY >=180){
            setColor(true);
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll',changeColor)

    // Mobile releted states
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isMobileServices, setMobileServices] = useState(false)
    const [isMobileSolutions, setMobileSolutions] = useState(false)

    const handleMobileServices = ()=>{
        setMobileServices(!isMobileServices)
    }
    const handleMobileSolutions = ()=>{
        setMobileSolutions(!isMobileSolutions)
    }

    const handleMenuClick = ()=>{
        setMenuOpen(!isMenuOpen)
        if(isMenuOpen===false){
            setMobileServices(false)
            setMobileSolutions(false)
    }
    }
    return (


    // NavBar For desktop
   
    <motion.div initial={{opacity:0,y:'-50%'}} animate={{opacity:1,y:'0'}} transition={{duration:.9,delay:-.2,}} className={`duration-500  flex pt-6 p-14 md:px-9 justify-between items-center w-full h-12  fixed z-[99] ${color?'bg-black/80 ':''}`}>
        <Link to='/' className='flex justify-center items-center '>
        {/* Desktop logo goes here */}
        <img className='mr-16 h-auto w-80 mt-12' src={mobile_logo} alt="" />        
        </Link>
    <div className='hidden xl:block'>
        <div className=' text-white text-lg flex gap-8 tracking-wide  items-center mt-8 '>
        <Flyoutcontent href={"/"}>Home</Flyoutcontent>
        <Flyoutcontent href={"#"} Dropdowncontent={Services }>Services</Flyoutcontent>
        <Flyoutcontent href={"#"} Dropdowncontent={Solutions } >Solutions</Flyoutcontent>
        {/* <Flyoutcontent href={"#"}>Carrers</Flyoutcontent> */}
        <Flyoutcontent href={"about-us"} >About Us</Flyoutcontent>
        {/* contanct us button */}
        <Link className='  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  text-xl px-7 py-2.5 me-2 mb-2 mt-2 ml-16 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' to="contact-us">Contact Us</Link> 
        </div>
    </div>
      {/* Mobile Nav  Menu Button */}
        <div onClick={handleMenuClick} className='xl:hidden  z-10 cursor-pointer mt-5'>
                {isMenuOpen?<RiCloseLargeLine className='text-4xl' />:<FiAlignJustify className='text-white text-[40px]'/>}
                
                </div>
                   
                    {/* Mobile Nav */}
                <div className={isMenuOpen?'xl:hidden absolute pt-6 px-5 flex flex-col top-0 left-0 bg-white w-full h-screen overflow-y-scroll transition-all duration-500' : 'xl:hidden absolute pt-6 px-12 flex flex-col top-0 -left-full bg-white w-full h-screen overflow-y-scroll transition-all duration-500' }>
                     {/* Mobile logo goes here */}
                    <div className=' w-full'>
                    <img className=' h-auto w-60' src={mobile_logo} alt="" /> 
                    </div>
                    
                    <div className='py-10 '>
                        <div>
                        <Link onClick={()=>setMenuOpen(!isMenuOpen)} to='/' className='flex justify-between  border-b border-slate-400 text-3xl text-black font-thin mb-7 py-2'> Home 
                        </Link>
                        </div>
                        {/* Services dropdown */}
                        <div className='flex justify-between flex-col border-b border-slate-400 text-3xl text-black font-thin mb-7 py-2 '> 
                            <div onClick={handleMobileServices} className='flex justify-between mb-4'>
                                <h3>Services</h3>
                                <a href='#' className={`text-[50px] block rota ${isMobileServices?'rotate-45':' rotate-180'} transition-all duration-200`} >+</a></div> 
                            
                            <AnimatePresence>
                            {
                                isMobileServices && <motion.div initial={{opacity:0, y:-100}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-100}} >
                                {
                                    ServicesMenu.map((item, id)=>(
                                        <div key={id} className='flex items-center mb-3'>
                                            <div className='flex items-center justify-center mr-3'>
                                                <img className='w-12' src={item.iconUrl} alt="" />
                                            </div>
                                            <div className='flex flex-col justify-center'>
                                                <a className='text-xl font-medium' href={item.href}>{item.label}</a>
                                                <p className='text-lg leading-[30px]'>{item.content}</p>
                                            </div>
                                            </div>
                                    ))
                                }
                            </motion.div>
                            }
                            </AnimatePresence>
                        </div>
                        
                        {/* Solutions Dropdown  */}
                        <div className='flex justify-between flex-col border-b border-slate-400 text-3xl text-black font-thin mb-7 py-2'> 
                            <div onClick={handleMobileSolutions} className='flex justify-between mb-4'>
                                <h3>Solutions</h3>
                                <a href='#' className={`text-[50px] block rota ${isMobileSolutions?'rotate-45':' rotate-180'} transition-all duration-200`} >+</a></div> 
                            
                            <AnimatePresence>     
                            {
                                isMobileSolutions && <motion.div initial={{opacity:0, y:-100}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-100}}>
                                {
                                    SolutionsMenu.map((item, id)=>(
                                        <div key={id} className='flex items-center mb-3'>
                                            <div className='flex items-center justify-center mr-3'>
                                                <img className='w-12' src={item.iconUrl} alt="" />
                                            </div>
                                            <div className='flex flex-col justify-center'>
                                                <a className='text-xl font-medium' href={item.href}>{item.label}</a>
                                                <p className='text-lg leading-[25px]'>{item.content}</p>
                                            </div>
                                            </div>
                                    ))
                                }
                            </motion.div>
                            }
                            </AnimatePresence>
                        </div>    


                        {/* <div className='flex justify-between  border-b border-slate-400 text-3xl text-black font-thin mb-7 py-2'>
                            <a href='#' className='block'>Career</a>
                            </div> */}
                        <div className='flex justify-between  border-b border-slate-400 text-3xl text-black font-thin mb-7 py-2'>
                            <Link to='about-us' onClick={()=>setMenuOpen(!isMenuOpen)} className='block'>About</Link>
                            </div>
                        
                     </div>
                <div className='felx mx-auto'>
                <Link onClick={()=>setMenuOpen(!isMenuOpen)} className=' text-white text-3xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg  px-9 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' to="contact-us">Contact Us</Link>
                </div>   

                </div>
   
    

    </motion.div>
   
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
            <NavLink
            className='relative'
            to={href}>{children}
            <span 
            style={{transform:showDropdown?'scaleX(1)':'scaleX(0)'}}
            className='absolute h-1 bg-indigo-400 origin-left duration-300 ease-out mt-2 rounded-xl top-[30px] -right-2 -left-2'></span>
            </NavLink>
            
            <AnimatePresence> 
            {
                showDropdown && <motion.div initial={{opacity:0, y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:15}} style={{translateX:"-50%"}} className='absolute top-[65px] left-1/2 -translate-x-1/2 text-black'>
                     <div className=' absolute left-0 right-0 -top-6 h-6 '></div>
                     <div className=' absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-3 z-[-1] h-10 w-10 bg-slate-400 rotate-45'></div>
                    <Dropdowncontent />
                </motion.div>
            }
            </AnimatePresence>
        </div>
    )
}

const ServicesMenu = [
    { label: "Application Services", href: "/coming-soon", content: "Comprehensive application management and support.",iconUrl: 'https://img.icons8.com/?size=100&id=GKFN2Gk1rPIh&format=png&color=000000'  },
    { label: "Software Development", href: "/coming-soon", content: "Custom software solutions tailored to your needs.",iconUrl:'https://img.icons8.com/?size=100&id=12486&format=png&color=000000' },
    { label: "Web Development", href: "/coming-soon", content: "Responsive and modern web design and development.", iconUrl:'https://img.icons8.com/?size=100&id=wLbzJQRzbYNN&format=png&color=000000' },
    { label: "Mobile Application", href: "/coming-soon", content: "Innovative mobile apps for iOS and Android.", iconUrl:'https://img.icons8.com/?size=100&id=12451&format=png&color=000000' },
    { label: "UI/UX Design", href: "/coming-soon", content: "User-centered design for optimal experience.", iconUrl:'https://img.icons8.com/?size=100&id=20612&format=png&color=000000' },
    { label: "Data Science", href: "/coming-soon", content: "Transform data into actionable insights.", iconUrl:'https://img.icons8.com/?size=100&id=Sc4kXyZfQ8TU&format=png&color=000000' },
    { label: "IOT", href: "/coming-soon", content: "Overview of IoT solutions and applications.",iconUrl:'https://img.icons8.com/?size=100&id=Qvrb6SLTR1NM&format=png&color=000000' },
];


const Services = () => {
    return (
        <div className="flex flex-wrap  justify-between w-[50vw] p-10 bg-slate-400 rounded-lg">
            {ServicesMenu.map((item, id) => (
                <div key={id} className="w-1/2 flex mb-4 items-center">
                    <div className="w-1/4 flex justify-center">
                        <img src={item.iconUrl} alt={`${item.label} icon`} className="w-8 h-8" />
                    </div>
                    <div className="w-3/4">
                        <Link onClick={()=>setOpen(false)} to={item.href} className="font-semibold uppercase text-lg">{item.label}</Link>
                        <p className="font-thin text-[20px] ">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const SolutionsMenu = [
    { label: "CRM", href: "/coming-soon", content: "Customer Relationship Management solutions.", iconUrl: 'https://img.icons8.com/?size=100&id=13619&format=png&color=000000' },
    { label: "ERP", href: "/coming-soon", content: "Enterprise Resource Planning systems.", iconUrl: 'https://img.icons8.com/?size=100&id=21248&format=png&color=000000' },
    { label: "Automation", href: "/coming-soon", content: "Business process automation services.", iconUrl: 'https://img.icons8.com/?size=100&id=59630&format=png&color=000000' },
    { label: "E-Commerce", href: "/coming-soon", content: "Complete e-commerce solutions.", iconUrl: 'https://img.icons8.com/?size=100&id=12391&format=png&color=000000' },
    { label: "Data Analytics", href: "/coming-soon", content: "Data analysis and visualization services.", iconUrl: 'https://img.icons8.com/?size=100&id=59630&format=png&color=000000' },
    { label: "Learning Management System", href: "#", content: "Online learning and management platforms.", iconUrl: 'https://img.icons8.com/?size=100&id=12461&format=png&color=000000' },
    { label: "IOT Dashboard", href: "/coming-soon", content: "IoT data visualization and monitoring.", iconUrl: 'https://img.icons8.com/?size=100&id=30525&format=png&color=000000' },
];

const Solutions = ()=>{
return(
    <div className="flex flex-wrap  justify-between w-[50vw] p-10 bg-slate-400 rounded-lg">
    {SolutionsMenu.map((item, id) => (
        <div key={id} className="w-1/2 flex mb-4 items-center">
            <div className="w-1/4 flex justify-center">
                <img src={item.iconUrl} alt={`${item.label} icon`} className="w-8 h-8" />
            </div>
            <div className="w-3/4">
                <Link onClick={()=>setOpen(false)} to={item.href} className="font-semibold uppercase text-lg">{item.label}</Link>
                <p className="font-thin text-[20px] ">{item.content}</p>
            </div>
        </div>
    ))}
</div>
)

}

export default Navone