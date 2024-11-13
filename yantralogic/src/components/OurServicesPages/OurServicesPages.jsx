import React from 'react';
import Navone from '../Navbar/Navbar';

function OurServicesPages() {
  return (
    <>
      <div className='relative w-full h-screen bg-gray-800 overflow-hidden'>
        {/* Banner Section */}
        <div className='banner-section'>
          <div className='absolute inset-0 w-full h-full'>
            <img
              src='https://img.freepik.com/free-photo/view-old-tree-lake-with-snow-covered-mountains-cloudy-day_181624-28954.jpg?w=1380&t=st=1720957150~exp=1720957750~hmac=20da8563cb02092ced5e76016f6e63634de60a6c95e24ff755ec51ee85152ec1'
              alt='Background'
              className='absolute w-full h-full object-cover top-[50%] left-0 scale-110 md:scale-[130%] md:rotate-[-20deg]'
            />
          </div>
          <div className='relative z-10 ml-4 md:ml-20 pt-32 md:pt-40 text-white grid grid-cols-12'>
            <h1 className='col-span-12 mb-4 md:mb-8 font-bold text-[10vw] md:text-[6vw] whitespace-nowrap'>
              Performance Engineering
            </h1>
            <p className='text-lg md:text-2xl col-span-12 md:col-span-6'>
              Ensuring a one-stop shop for delivery of all performance and non-functional requirements to our customers’ technology estates.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='px-6 md:px-60 py-20 md:py-40 w-full grid grid-cols-12 gap-y-10'>
        <div className='col-span-12 md:col-span-4'>
          <p className='text-4xl md:text-6xl font-bold'>
            Towards Best Run Enterprise
          </p>
        </div>
        <div className='col-span-12 md:col-span-2'></div>
        <div className='col-span-12 md:col-span-6'>
          <p className='text-base md:text-xl'>
            Tech Mahindra develops SAP solution to address all kinds of customer needs from greenfield implementations to powering complex transformations across your enterprise. Our tools and accelerators equip organizations with innovative acumen to identify new revenue streams, outwit competitors and transition to intelligent enterprise, growing business and disrupting the industry. We are proud to be recognized as:
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className='w-full bg-slate-200 py-16 md:py-32 px-6 md:px-80'>
        <h2 className='text-4xl md:text-6xl font-semibold'>
          Joint Industry Solutions
        </h2>
        <div className='mt-10 md:mt-20 flex flex-col md:flex-row justify-between gap-10'>
          <div className='bg-white w-full md:w-[400px] p-6 md:p-9 h-auto md:h-[310px]'>
            <p className='text-lg md:text-xl h-14'>Integrated Platform</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, earum. Laborum doloribus temporibus voluptate corrupti repellat quis perferendis quo, iste tempora voluptates consectetur!
            </p>
          </div>
          <div className='bg-white w-full md:w-[400px] p-6 md:p-9 h-auto md:h-[310px]'>
            <p className='text-lg md:text-xl h-14'>Integrated Platform</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, earum. Laborum doloribus temporibus voluptate corrupti repellat quis perferendis quo, iste tempora voluptates consectetur!
            </p>
          </div>
          <div className='bg-white w-full md:w-[400px] p-6 md:p-9 h-auto md:h-[310px]'>
            <p className='text-lg md:text-xl h-14'>Integrated Platform</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, earum. Laborum doloribus temporibus voluptate corrupti repellat quis perferendis quo, iste tempora voluptates consectetur!
            </p>
          </div>
        </div>

        <div className='mt-16 md:mt-32'>
          <h2 className='text-4xl md:text-6xl font-semibold mb-16 md:mb-32'>
            Our Solutions
          </h2>
          <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-12 md:col-span-6'>
              <h3 className='text-2xl md:text-3xl h-16 font-semibold'>
                Lorem ipsum dolor sit amet.
              </h3>
              <p className='text-base md:text-xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non vel id cumque suscipit tempora hic quam autem, accusamus repudiandae assumenda quo maxime iste quidem natus culpa expedita ea iure!
              </p>
            </div>
            <div className='col-span-12 md:col-span-6'>
              <img
                src='https://img.freepik.com/premium-photo/abstract-background-with-tropical-leaves-magenta-azure-generative-ai_836899-686.jpg?w=1380'
                alt=''
                className='w-full h-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServicesPages;
