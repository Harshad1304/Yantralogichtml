import React from "react";
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import Coming_Soon from "../../assets/ComingSoon/Coming_Soon.png"


const ComingSoon = () => {
  return (
    <div className=" pt-96 md:pt-60 md:pl-40 w-full h-screen bg-gradient-to-l from-gray-900 via-sky-900 to-gray-900 text-white">
      <div className="w-full flex md:flex-nowrap flex-wrap-reverse  gap-10 font-['MochiyPopOne-Regular'] ">
        <div className=" leftside p-10 flex flex-col gap-2 text-center">
            <motion.h1 
            initial={{ opacity: 0, y: '40%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 1, delay:0.5,ease: [0.45, 0, 0.55, 1]}} className=" text-[6vw] leading-none md:text-left font-extrabold -mt-16">Launching</motion.h1>
            <motion.h1
            initial={{ opacity: 0, y: '40%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 1, delay:0.7,ease: [0.45, 0, 0.55, 1]}}
            className="text-[6vw] leading-none md:text-left font-extrabold">Soon!</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: '40%' }}
              animate={{ opacity: 1, y: '0' }}
              transition={{ duration: 1, delay:1}}
              className=" mt-10 text-xl md:text-left">Tech dosen't have to feel like a different language.
              We built schemaqtiq to make sure innovation works for you, Your businees, and your people.
              We can't wait to innovate with you!
            </motion.p>
            <motion.div
            initial={{ opacity: 0, y: '40%', }}
            animate={{ opacity: 1, y: '0', }}   
            transition={{ duration: 1, delay:1.1,ease: [0.45, 0, 0.55, 1]}}
            className=" items-start md:text-left mt-10">
              <Link className="border px-5 py-2 rounded-md text-2xl  mt-10 hover:bg-white hover:text-black transition-all duration-300 mx-auto " to="/contact-us">Contact Us</Link>
              </motion.div>
        </div>
        <div className=" rightside hidden xl:block overflow-x-hidden">
            <motion.img 
             initial={{ opacity: 0, x:'100%' ,}}
             animate={{ opacity: 1, x:'0%',}}
             transition={{ duration: 1, delay:0.5,ease: [0.45, 0, 0.55, 1]}} 
             className=" w-[70%] rounded-xl" src={Coming_Soon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
