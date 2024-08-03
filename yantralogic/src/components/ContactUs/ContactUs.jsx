import React from 'react';
import {motion} from "framer-motion";

function ContactUs() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-900 via-sky-900 to-gray-900 text-white flex justify-center items-center">

        <div className='grid grid-cols-12 mt-14 -mr-20 '>
          {/* Left-Side Content */}
          <motion.div  initial={{ opacity: 0, y: '40%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 1, delay:0.5,ease: [0.45, 0, 0.55, 1]}} className='col-span-12 xl:col-span-6 flex flex-col gap-6'>
            {/* Heading*/}
            <div >
            <h3 className='font-bold leading-none text-6xl mb-2'>Contact Us</h3>
            <p className='text-lg w-[60%] text-white/60 font-semibold -mb-1'>If you have any questions about Yantralogic contact our team & schedule a call.</p>
            </div>
            {/* card - 1 */}
            <div className=' shadow-2xl shadow-black bg-white xl:w-[65%] relative  rounded-lg pt-5 pb-16 px-10 text-black'>
              <h3 className='text-sm  text-black/50 leading-none'>Registerd Office</h3>
              <p className='font-normal m-0 text-xl'>990, Mauli Niwas, Shivaji Nagar, Kon, Thane, MH 421311</p>
              <div>
                <a href="#" className=' absolute right-2 bottom-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  text-xl px-7 py-2.5 me-2 mb-2 mt-2 ml-16 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Get Directions</a>
              </div>
            </div>
            {/* card - 2  */}
            <div className=' shadow-2xl shadow-black bg-white xl:w-[65%]  rounded-lg pt-5 pb-9 px-10 text-black'>
              <h3 className='text-sm  text-black/50 leading-none'>Registerd Office</h3>
              <p className='font-normal m-0 text-xl'>990, Mauli Niwas, Shivaji Nagar, Kon, Thane, MH 421311</p>
            </div>
            {/* card - 3 */}
            <div className=' shadow-2xl shadow-black bg-white xl:w-[65%] rounded-lg pt-5 pb-9 px-10 text-black'>
              <h3 className='text-sm  text-black/50 leading-none'>Email Us Or Call</h3>
              <p className='font-normal m-0 text-xl'>business@yantralogic.com</p>
              <a className="text-xl font-semibold text-blue-800 block " href="tel:+918898632516" target="_blank">+91 8898632516</a>
            </div>
          </motion.div>
          
          {/* Right-side */}
          <motion.div  initial={{ opacity: 0, x: '40%' }}
            animate={{ opacity: 1, x: '0' }}
            transition={{ duration: 1, delay:0.5,ease: [0.45, 0, 0.55, 1]}} className=' shadow-2xl shadow-black col-span-12 xl:col-span-6 mt-14 xl:mt-0 flex-col gap-6 bg-white xl:w-[75%] rounded-lg pt-8 px-10 h-[70vh] '>
            {/* section-1 */}
            <div>
            <h3 className='text-black font-semibold text-2xl'>Drop a Message</h3>
            <p className='text-lg w-[90%] text-black/60 font-semibold -mb-1'>Send us a short message, and we’ll contact you shortly.</p>
            </div>
            {/* section 2  */}
            <div className='mt-5'>
            <form action="#" className='text-black flex flex-col gap-4'>
              <input type="text" className='border-[1px] px-6 border-black/20 rounded-[5px] w-full h-12' placeholder='Your name'/>
              <input type="email" className='border-[1px] px-6 border-black/20 rounded-[5px] w-full h-12' placeholder='Your Email Address'/>

              <select name="reasonforenquiry" id="reason" class="border-[1px] mt-5 h-12 text-black/50 px-2 border-gray-300 rounded-md p-2">
                    <option value="Select a Reason" selected>Select a Reason</option>
                    <option value="Product Demo">Product Demo</option>
                    <option value="Customer Support">Customer Support</option>
                    <option value="Business Enquiry">Business Enquiry</option>
                    <option value="Other">Other</option>
              </select>

              <textarea name="message" id="contactmessage" rows={5} className='text-black border-[1px] pt-3 px-4 rounded-[5px]' placeholder='Write Your Message'></textarea>

              <button className=' text-white self-end bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  text-xl px-14 py-2.5 me-2 mb-2 mt-2 ml-16 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Submit</button>

            </form> 
            </div>
            
          </motion.div>
        </div>

    </div>
  );
}

export default ContactUs;
