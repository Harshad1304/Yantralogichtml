import React from 'react'

function Form() {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-blue-900 min-h-screen flex md:p-7 items-center justify-center">
            <div className=" grid md:grid-cols-2  gap-8 md:gap-16 px-8">
                <div className="text-white">
                    <h1 className="hidden md:block md:mt-20 md:leading-[60px] md:text-5xl mb-2 md:mb-6 text-xl ">Our Subject Matter <br /> Experts Are Change <br /> Catalysts</h1>
                    <h1 className=" md:hidden md:mt-20 md:leading-[60px] md:text-5xl mb-2 md:mb-6 text-xl ">Our Subject Matter <br />Experts Are Change Catalysts</h1>
                    <p className=" text-sm md:text-xl">Book Your First Presentation with Our Experts Today.</p>
                </div>

                {/* Form Container goes here */}
                <div className="w-full bg-[#0e0e1c]/70 py-10 px-5 md:px-10 rounded-xl ">
                    <div className="space-y-4">
                        <div className="border-b-[1px]  border-[#3f3f41] pb-2">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="bg-transparent text-lg md:text-xl text-white w-full focus:outline-none"
                            />
                        </div>
                        <div className="border-b-[1px] border-[#3f3f41] pb-2">
                            <input
                                type="text"
                                placeholder="E-mail ID*"
                                className="bg-transparent text-lg md:text-xl text-white w-full focus:outline-none"
                            />
                        </div>
                        <div className="border-b-[1px] border-[#3f3f41] pb-2">
                            <input
                                type="text"
                               
                                placeholder="Contact Number"
                                className="bg-transparent text-lg md:text-xl text-white w-full focus:outline-none"
                            />
                        </div>
                       
                        <div className="border-b-[1px] border-[#3f3f41] pb-2">
                            <label className='md:text-xl text-lg text-[#9ca3a5] block mb-4' htmlFor="textarea">Project Description*</label>
                        <textarea id="textarea" name="w3review" rows="4" className='text-white bg-transparent/50 border-[1px] mb-3 rounded-lg resize-none border-[#3f3f41] w-full' cols="10"></textarea>
                        </div>
                        
                        <div className="pt-4">
                            <button className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-3 px-7 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Form