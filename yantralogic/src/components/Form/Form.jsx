import React from 'react'

function Form() {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-blue-900 h-screen flex items-center justify-center">
            <div className="flex space-x-16 gap-36 px-8">
                <div className="text-white">
                    <h1 className="mt-20 leading-[60px] text-5xl mb-6">Our Subject Matter <br /> Experts Are Change <br /> Catalysts</h1>
                    <p className="text-xl">Book Your First Presentation with Our Experts Today.</p>
                </div>
                <div className="bg-[#0e0e1c] py-10 px-8 rounded-xl w-[30vw]">
                    <div className="space-y-4">
                        <div className="border-b-[1px] border-[#3f3f41] pb-2">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="bg-transparent text-xl text-white w-full focus:outline-none"
                            />
                        </div>
                        <div className="border-b-[1px] border-[#3f3f41] pb-2">
                            <input
                                type="text"
                                placeholder="E-mail ID*"
                                className="bg-transparent text-xl text-white w-full focus:outline-none"
                            />
                        </div>
                        <div className="border-b-[1px] border-[#3f3f41] pb-2">
                            <input
                                type="number"
                                placeholder="Contact Number"
                                className="bg-transparent text-xl text-white w-full focus:outline-none"
                            />
                        </div>
                        <div className="border-b-[1px] border-[#3f3f41] pb-2">
                            <select className="bg-transparent text-xl text-white w-full focus:outline-none">
                                <option value=""  disabled selected>Select a Budget Range</option>
                                <option className='text-black' value="1000-5000">$1,000 - $5,000</option>
                                <option  className='text-black' value="5000-10000">$5,000 - $10,000</option>
                                <option className='text-black' value="10000+">$10,000+</option>
                            </select>
                        </div>
                        <div className="border-b-[1px] border-[#3f3f41] pb-2">
                            <input
                                type="text"
                                placeholder="Project Description*"
                                className="bg-transparent text-xl text-white w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-white" />
                            <span className="ml-2 text-white text-sm">Include Copy of a Non-Disclosure Agreement</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-white">2 + 2 = </span>
                            <input
                                type="text"
                                className="bg-transparent text-xl text-white w-16 border-b-[1px] border-[#3f3f41] focus:outline-none"
                            />
                        </div>
                        <div className="pt-4">
                            <button className="w-full text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30">
                                Request Proposal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Form