import React from 'react';
import { Link } from 'react-router-dom';

function ServicesPage() {
  return (
    <div className='overflow-hidden'>
      {/* Heading Section */}
      <section className='pt-[100px] md:pt-[200px] flex justify-center w-full bg-slate-900 px-4'>
        <div className='w-full md:w-2/3 flex flex-col gap-4 text-white'>
          <h1 className='text-center text-2xl md:text-4xl font-bold'>Mobile App Development</h1>
          <p className='text-center text-sm md:text-lg tracking-normal'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis consequuntur, porro aut fugit aliquid exercitationem placeat unde blanditiis aliquam tempore laboriosam sapiente pariatur consectetur temporibus illo iure est voluptates. Aut.
          </p>
          <img
            className='rounded-xl w-full self-center'
            src="https://plus.unsplash.com/premium_photo-1661573257104-412d79ad8f04?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </section>

      {/* Features Section-Two */}
      <section className='pt-20 md:pt-36 pb-32 text-white flex flex-col items-center w-full bg-slate-900 px-4'>
        <h2 className='font-bold pb-10 w-full md:w-2/3 text-3xl md:text-5xl '>Custom Mobile App Development Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-2/3'>
          {sectionTwoCards.map((elem, index) => (
            <div key={index} className='flex flex-col gap-4 w-full md:w-[500px]'>
              <div className='w-16 h-16 md:w-20 md:h-20 flex justify-center items-center bg-black/20 shadow-xl rounded-lg'>
                <img src={elem.icon} alt="" className='w-10 h-10' />
              </div>
              <h3 className='text-lg md:text-xl font-semibold'>{elem.title}</h3>
              <p className='text-sm md:text-base w-full md:w-3/4'>{elem.description}</p>
            </div>
          ))}
          <Link
            to='/contact-us'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 md:px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full md:w-1/2 mt-4'
          >
            Expand Your Business
          </Link>
        </div>
      </section>

      {/* Section Three */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-12 px-4 sm:px-6 lg:px-12 w-full">
        <div className=" w-2/3 mx-auto text-white text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-6 sm:mb-8">
            Mobile Application Development Services for Various Platforms
          </h2>
          <p className="mb-8 sm:mb-12 text-sm sm:text-base lg:text-lg">
            Our mobile app developers have over a decade-long expertise in building solutions that meet market needs, empower companies' brand identity, and encourage business growth and expansion.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {sectionThreeCards.map((service, index) => (
              <div
                key={index}
                className="p-4 flex flex-col text-left  sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 "
              > 
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{service.icon}</div>
                <h3 className="text-white sm:text-lg  mb-2">{service.title}</h3>
                <p className="text-white text-sm font-light w-3/4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section Four */}
      <section className='pt-20 text-black md:pt-13 pb-32 flex flex-col items-center w-full bg-[#FAFAFA] px-4'>
            <div className='w-2/3 flex flex-col justify-center items-center text-center'> 
            <h2 className=' text-4xl'>Industries we are experts in mobile app development</h2>
            <p>From budding startups to established enterprises, we’ve perfected the delivery of innovative digital solutions. Our diverse industry experience allows us to develop mobile applications that perfectly match your vision and connect with your target audience.</p>
            </div>
              <div className='w-2/3 grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8'>
                {
                  sectionFourCards.map((service,index)=>(
                  <div className='bg-[#FFFFFF] px-8 py-5'>
                    <div className='w-16 h-16 md:w-20 md:h-20 flex justify-center items-center  rounded-lg'>
                    <img src={service.icon} alt="" className='w-10 h-10' />
                    </div>
                    <h3>{service.title}</h3>
                    <p className='font-light text-[15px]'>{service.description}</p>
                  </div>
                  ))
                }
              </div>
      </section>
      {/* Section Five Approch */}
            <section className='pt-[100px] md:pt-[100px] flex justify-center w-full pb-[100px] bg-slate-900 px-4'>
               <div className='w-2/3 text-white flex flex-col'>
                <h2 className='text-5xl font-bold'> Our Approach</h2>
                <p className='text-3xl font-light pt-5'>We combine a unuique tech-savvy culture, product-oriented approach, and strong focus on achiveing business goals.</p>
                <div className='s grid grid-cols-3'>
                { 
                  ourApproach.map((elem, index)=>(
                    <div className='flex flex-col gap-4 pt-20'>
                      <div><img src={elem.icon} alt="" /></div>
                      <h3 className='text-4xl'>{elem.title}</h3>
                      <p className='text-xl w-3/2'>{elem.description}</p>
                    </div>
                  ))
                }
                 <Link
            to='/contact-us'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 md:px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full md:w-1/2 mt-12'
          >
           Get your quote now
          </Link>
                </div>
              </div>
            </section>
    </div>
  );
}

const ourApproach  = [
  { 
    icon:"https://weqtechnologies.com/wp-content/uploads/2024/09/competence.svg",
    title:"Domain Proficiency",
    description:"We leverage deep industry expertise to deliver tailored solutions that meet specific market needs."
  },
  { 
    icon:"https://weqtechnologies.com/wp-content/uploads/2024/09/potency-1.svg",
    title:"We are the Team",
    description:"Our collaborative team of experts works seamlessly to drive project success and innovation."
  },
  { 
    icon:"https://weqtechnologies.com/wp-content/uploads/2024/09/presentation-2.svg",
    title:"Data-Driven Decisions",
    description:"We utilize analytics and insights to inform strategies, ensuring optimal outcomes and informed decision-making."
  }
]

const sectionTwoCards = [
  {
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ai-ml-home-icon.svg",
    title: "Custom App Development",
    description: "We develop tailored mobile applications that align with your business objectives, ensuring a unique experience for your users.",
  },
  {
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ai-ml-home-icon.svg",
    title: "User-Centric Design",
    description: "We prioritize user experience (UX) and user interface (UI) design to create intuitive, visually appealing apps that resonate with your audience.",
  },
  {
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ai-ml-home-icon.svg",
    title: "User-Centric Design",
    description: "We prioritize user experience (UX) and user interface (UI) design to create intuitive, visually appealing apps that resonate with your audience.",
  },
  {
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ai-ml-home-icon.svg",
    title: "User-Centric Design",
    description: "We prioritize user experience (UX) and user interface (UI) design to create intuitive, visually appealing apps that resonate with your audience.",
  },
];

const sectionThreeCards = [
  {
    title: "iOS App Development",
    description: "Ready to turn your ideas into fully-fledged, stable, and scalable iOS mobile apps? We ensure smooth integration with the Apple ecosystem, providing your users with a flawless experience. Using the latest technologies and tailored features, we create iOS apps that not only meet your business goals but also exceed user expectations.",
    icon: "📱",
  },
  {
    title: "iOS App Development",
    description: "Ready to turn your ideas into fully-fledged, stable, and scalable iOS mobile apps? We ensure smooth integration with the Apple ecosystem, providing your users with a flawless experience. Using the latest technologies and tailored features, we create iOS apps that not only meet your business goals but also exceed user expectations.",
    icon: "📱",
  },
  {
    title: "iOS App Development",
    description: "Ready to turn your ideas into fully-fledged, stable, and scalable iOS mobile apps? We ensure smooth integration with the Apple ecosystem, providing your users with a flawless experience. Using the latest technologies and tailored features, we create iOS apps that not only meet your business goals but also exceed user expectations.",
    icon: "📱",
  },
  {
    title: "iOS App Development",
    description: "Ready to turn your ideas into fully-fledged, stable, and scalable iOS mobile apps? We ensure smooth integration with the Apple ecosystem, providing your users with a flawless experience. Using the latest technologies and tailored features, we create iOS apps that not only meet your business goals but also exceed user expectations.",
    icon: "📱",
  },
  {
    title: "iOS App Development",
    description: "Ready to turn your ideas into fully-fledged, stable, and scalable iOS mobile apps? We ensure smooth integration with the Apple ecosystem, providing your users with a flawless experience. Using the latest technologies and tailored features, we create iOS apps that not only meet your business goals but also exceed user expectations.",
    icon: "📱",
  },
  {
    title: "iOS App Development",
    description: "Ready to turn your ideas into fully-fledged, stable, and scalable iOS mobile apps? We ensure smooth integration with the Apple ecosystem, providing your users with a flawless experience. Using the latest technologies and tailored features, we create iOS apps that not only meet your business goals but also exceed user expectations.",
    icon: "📱",
  },
];

const sectionFourCards = [
  {
    icon:"https://www.intellectsoft.net/assets/fd9c050e/img/n-offers/industries/5.svg",
    title:"Travel & Hospitality",
    description:"Drive change in your healthcare services with our custom mobile app solutions. Enhance patient care, streamline operations, and improve communication. From telemedicine to real-time updates, our custom solutions are tailored to meet the unique needs of your healthcare facility, ensuring a seamless experience for everyone involved. Empower your patients and staff with cutting-edge technology that makes healthcare more accessible and efficient."
  },{
    icon:"https://www.intellectsoft.net/assets/fd9c050e/img/n-offers/industries/5.svg",
    title:"Travel & Hospitality",
    description:"Drive change in your healthcare services with our custom mobile app solutions. Enhance patient care, streamline operations, and improve communication. From telemedicine to real-time updates, our custom solutions are tailored to meet the unique needs of your healthcare facility, ensuring a seamless experience for everyone involved. Empower your patients and staff with cutting-edge technology that makes healthcare more accessible and efficient."
  },{
    icon:"https://www.intellectsoft.net/assets/fd9c050e/img/n-offers/industries/5.svg",
    title:"Travel & Hospitality",
    description:"Drive change in your healthcare services with our custom mobile app solutions. Enhance patient care, streamline operations, and improve communication. From telemedicine to real-time updates, our custom solutions are tailored to meet the unique needs of your healthcare facility, ensuring a seamless experience for everyone involved. Empower your patients and staff with cutting-edge technology that makes healthcare more accessible and efficient."
  },{
    icon:"https://www.intellectsoft.net/assets/fd9c050e/img/n-offers/industries/5.svg",
    title:"Travel & Hospitality",
    description:"Drive change in your healthcare services with our custom mobile app solutions. Enhance patient care, streamline operations, and improve communication. From telemedicine to real-time updates, our custom solutions are tailored to meet the unique needs of your healthcare facility, ensuring a seamless experience for everyone involved. Empower your patients and staff with cutting-edge technology that makes healthcare more accessible and efficient."
  },{
    icon:"https://www.intellectsoft.net/assets/fd9c050e/img/n-offers/industries/5.svg",
    title:"Travel & Hospitality",
    description:"Drive change in your healthcare services with our custom mobile app solutions. Enhance patient care, streamline operations, and improve communication. From telemedicine to real-time updates, our custom solutions are tailored to meet the unique needs of your healthcare facility, ensuring a seamless experience for everyone involved. Empower your patients and staff with cutting-edge technology that makes healthcare more accessible and efficient."
  },{
    icon:"https://www.intellectsoft.net/assets/fd9c050e/img/n-offers/industries/5.svg",
    title:"Travel & Hospitality",
    description:"Drive change in your healthcare services with our custom mobile app solutions. Enhance patient care, streamline operations, and improve communication. From telemedicine to real-time updates, our custom solutions are tailored to meet the unique needs of your healthcare facility, ensuring a seamless experience for everyone involved. Empower your patients and staff with cutting-edge technology that makes healthcare more accessible and efficient."
  },
]


export default ServicesPage;
