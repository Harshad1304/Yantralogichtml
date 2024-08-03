import React from 'react';
import Navone from '../Navbar/Navbar';

function OurServicesPages() {
  return (
    <>
      
      <div className='relative w-full h-screen bg-gray-800 overflow-hidden'>
        {/* Banner Section  */}
        <div className='banner-section'> 
        <div className='absolute inset-0 w-full h-full'>
          <img
            src='https://img.freepik.com/free-photo/view-old-tree-lake-with-snow-covered-mountains-cloudy-day_181624-28954.jpg?w=1380&t=st=1720957150~exp=1720957750~hmac=20da8563cb02092ced5e76016f6e63634de60a6c95e24ff755ec51ee85152ec1'
            alt='Background'
            className='absolute w-full h-full object-cover top-[660px] left-[150px] scale-[130%] rotate-[-20deg] '
            style={{
                width: '200%',
               
              }}       
          />
        </div>
        <div className='relative z-10 ml-20 pt-40 text-white grid grid-cols-12'>
          <h1 className=' col-span-12 mb-8 font-bold text-[6vw] text-nowrap'>Performance Engineering</h1>
          <p className='text-2xl col-span-6'>Ensuring a one-stop shop for delivery of all performance and non-functional requirements to our customers’ technology estates.</p>
        </div>
        </div>
       
      </div>
       {/* content */}
      <div className='px-60 py-40  w-full  grid grid-cols-12'>
            <div className='col-span-4'>
                <p className='text-6xl font-bold'>Towards Best Run Enterprise</p>
            </div>
            <div className='col-span-2'></div>
            <div className='col-span-6'>
                <p className='text-xl'>Tech Mahindra develops SAP solution to address all kinds of customer needs from greenfield implementations to powering complex transformations across your enterprise. Our tools and accelerators equip organizations with innovative acumen to identify new revenue streams, outwit competitors and transition to intelligent enterprise, growing business and disrupting the industry. We are proud to be recognized as: </p>
            </div>
        </div>
        {/* third Section */}
        <div className='w-full bg-slate-200 py-32 px-80'>
            
            <h2 className='text-6xl font-semibold'>Joint Industry Solutions</h2>
            <div className='mt-20 flex justify-between'>
                <div className='bg-white w-[400px] p-9 h-[310px]'>
                    <p className='text-xl h-14'>Integrated Platform</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, earum. Laborum doloribus temporibus voluptate corrupti repellat quis perferendis quo, iste tempora voluptates consectetur! Nesciunt asperiores veritatis molestiae quo ad mollitia.</p>
                </div>
                <div className='bg-white w-[400px] p-9 h-[310px]'>
                    <p className='text-xl h-14'>Integrated Platform</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, earum. Laborum doloribus temporibus voluptate corrupti repellat quis perferendis quo, iste tempora voluptates consectetur! Nesciunt asperiores veritatis molestiae quo ad mollitia.</p>
                </div>
                <div className='bg-white w-[400px] p-9 h-[310px]'>
                    <p className='text-xl h-14'>Integrated Platform</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, earum. Laborum doloribus temporibus voluptate corrupti repellat quis perferendis quo, iste tempora voluptates consectetur! Nesciunt asperiores veritatis molestiae quo ad mollitia.</p>
                </div>
            </div>
            <div className='mt-32'>
                <h2 className=' text-6xl font-semibold mb-32'>Our Solutions</h2>
                {/* left side container */}
                <div className='grid grid-cols-12 gap-10'>
                    <div className='col-span-6'> 
                        <h3 className='text-3xl h-16 font-semibold'>Lorem ipsum dolor sit amet.</h3>
                        <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non vel id cumque suscipit tempora hic quam autem, accusamus repudiandae assumenda quo maxime iste quidem natus culpa expedita ea iure!
                        Laudantium natus cumque, ut harum pariatur culpa veritatis maxime atque ipsa quam, aut dolorum quisquam magnam. Earum voluptatum quibusdam ab sed libero modi, aut, nam magni ipsam deleniti iure amet!
                        Enim numquam sint molestiae aperiam, sit sequi harum quis fuga quaerat explicabo, corrupti velit nemo quisquam tenetur illo magni nostrum. Dolores veniam saepe nesciunt rem eveniet atque totam cum architecto!
                        Veniam dolorum atque earum nam numquam, ex voluptas temporibus sapiente accusantium minima nisi.</p>
                        </div>
                        {/* Right side container */}
                    <div className='col-span-6'>
                        <img src="https://img.freepik.com/premium-photo/abstract-background-with-tropical-leaves-magenta-azure-generative-ai_836899-686.jpg?w=1380" alt="" />
                    </div>
                </div>
            </div>

        </div>
    </>
  );
}

export default OurServicesPages;
