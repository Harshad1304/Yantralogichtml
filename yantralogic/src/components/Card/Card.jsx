import React from 'react';

function Card({src,title}) {
  return (

    <>
      {/* Card goes here */}

      <div className="relative rounded-lg h-40 bg-slate-700/30 hover:bg-slate-600/40 col-span-1">
        <a className="flex flex-col justify-center items-center h-full" href="#">
          <div className="absolute top-4 left-4">
            <figure>
              <img
                className="h-auto"
                src={src}
                alt=''
              />
            </figure>
          </div>
          <p className="text-xl text-slate-300">{title}</p>
        </a>
      </div>

         </>
  );
}

export default Card;
