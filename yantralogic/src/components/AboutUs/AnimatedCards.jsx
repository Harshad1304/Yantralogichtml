import React from 'react';

const Cards = ({ title, subtitle,className }) => {
  return (
    <div className={`h-[500px] w-[360px] border-[8px] rounded-xl shadow-lg relative overflow-hidden group ${className}`}>
      <img className=' object-cover w-full h-full rounded-sm' src="https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
     
      <div className='flex flex-col justify-end w-full h-full text-white z-9 p-3 absolute bg-black/50 backdrop-blur-[3px] top-[100%]  group-hover:-top-0 transition-all duration-300'>
      <h1 className='text-2xl uppercase font-semibold'>{title}</h1>
      <p className='mt-3 text-lg leading-[25px]'>{subtitle}</p>
      </div>
      </div>

  );
};







function AnimatedCards() {
  return (
    <div className=' flex xl:justify-between justify-center flex-wrap xl:flex-nowrap gap-3 py-12'>
      <Cards  title='Software Development' subtitle=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci saepe blanditiis, accusantium fugiat sint, maxime incidunt sunt fuga natus, deserunt voluptate beatae quam totam pariatur expedita aspernatur ab. Fugit, ipsam!' />
      <Cards title='Software Development' subtitle=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci saepe blanditiis, accusantium fugiat sint, maxime incidunt sunt fuga natus, deserunt voluptate beatae quam totam pariatur expedita aspernatur ab. Fugit, ipsam!' />
      <Cards title='Software Development' subtitle=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci saepe blanditiis, accusantium fugiat sint, maxime incidunt sunt fuga natus, deserunt voluptate beatae quam totam pariatur expedita aspernatur ab. Fugit, ipsam!' />
      <Cards title='Software Development' subtitle=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci saepe blanditiis, accusantium fugiat sint, maxime incidunt sunt fuga natus, deserunt voluptate beatae quam totam pariatur expedita aspernatur ab. Fugit, ipsam!' />
     
    </div>
  )
}

export default AnimatedCards