import React from 'react';

function Card({src,title}) {
  return (

    <>
      {/* Card goes here */}

      <div className=" group border border-slate-800 hover:-translate-y-1 transition-all duration-300 relative rounded-lg h-40 bg-gray-600/10 hover:bg-slate-600/40 col-span-2 lg:col-span-1">
        <a className="flex flex-col justify-center items-center h-full" href="#">
          <div className="absolute  top-4 left-4">
            <figure className=' duration-300 group-hover:scale-125'>
              <img
                className="h-auto "
                src={src}
                alt=''
              />
            </figure>
          </div>
          <div className=''> 
          <p className="lg:text-2xl  mt-5 font-normal text-center p-10  lg:tracking-wide lg:font-medium text-slate-300">{title}</p>
          </div>
        </a>
      </div>

         </>
  );
}

export default Card;
