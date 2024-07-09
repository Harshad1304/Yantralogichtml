import React from 'react';


function ContactUs() {
  return (
    <div className="min-h-screen w-full bg-zinc-800 text-white">
      
      {/* banner img */}
      <div className='w-full h-full'>
        <img className='w-full h-[80vh]' src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Contact Us Banner" />

      </div>
      <div className="grid md:grid-cols-12 gap-8 mx-6 md:mx-36 py-24 md:py-48">
        <div className="md:col-span-6 border rounded-lg p-10 bg-slate-900">
          <div className='border p-5 rounded-lg shadow-xl bg-slate-300 text-black mb-10'>
            <h3 className='text-2xl font-semibold mb-2'>Corporate Office:</h3>
            <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto corporis distinctio, magni laudantium consectetur placeat exercitationem ab impedit est, dolores voluptatibus facilis quasi adipisci dolore maxime quis. Quidem, omnis recusandae.</p>
          </div>
          <div className='border p-5 rounded-lg shadow-xl bg-slate-300 text-black'>
            <h3 className='text-2xl font-semibold mb-2'>Branch Office:</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto corporis distinctio, magni laudantium consectetur placeat exercitationem ab impedit est, dolores voluptatibus facilis quasi adipisci dolore maxime quis. Quidem, omnis recusandae.</p>
          </div>
        </div>
        <div className="md:col-span-6 flex items-center">
          <form className="w-full bg-zinc-700 p-8 rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
            <div>
              <input 
                className="w-full p-3 rounded-lg bg-zinc-600 border border-zinc-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="text" 
                id="name" 
                name="name" 
                placeholder="Name"
                required 
              />
            </div>
            <div>
              <input 
                className="w-full p-3 rounded-lg bg-zinc-600 border border-zinc-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email"
                required 
              />
            </div>
            <div>
              <input 
                className="w-full p-3 rounded-lg bg-zinc-600 border border-zinc-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="number" 
                id="phone" 
                name="phone" 
                placeholder="Phone Number"
                required 
              />
            </div>
            <div>
              <textarea 
                className="w-full p-3 rounded-lg bg-zinc-600 border border-zinc-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                id="message" 
                name="message" 
                rows="4" 
                placeholder="Message"
                required 
              ></textarea>
            </div>
            <button 
              className="w-full p-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition duration-200"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
