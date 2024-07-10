import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SolutionsCards() {
  const sliderRef = useRef(null); // Reference for Slider component

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    className: 'center',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet and above
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };

  const handleCardClick = (index) => {
    sliderRef.current.slickGoTo(index); // Go to clicked card index
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-no-repeat bg-cover bg-[url('/src/assets/solutionsbg.jpg')]">
      <div className=" w-4/5">
        <Slider  ref={sliderRef} {...settings}>
          {data.map((d, index) => (
            <div key={index} className="md: px-2" onClick={() => handleCardClick(index)}>
              <div className="card-bg bg-white text-black rounded-xl shadow-lg overflow-hidden transform transition-transform">
                <div className="flex h-56 rounded-t-lg overflow-hidden">
                  <img src={d.img} alt={d.title} className="object-cover w-full" />
                </div>
                <div className="gap-3 p-4">
                  <p className="font-semibold md:text-center mb-2 md:mb-6 text-xl">{d.title}</p>
                  <div className='content'>
                    <p className="text-left md:text-lg">{d.content}</p>
                    <button className="mt-4 md:mt-10 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}


const data = [
    {   
        img: 'https://images.pexels.com/photos/21792116/pexels-photo-21792116/free-photo-of-whatsapp-on-a-smartphone.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Enterprise Applications',
        content: 'An enterprise application (EA) is a large software system platform typically designed to operate in a corporate environment such as business or government. '

    },
    {   
        img: 'https://images.pexels.com/photos/21792116/pexels-photo-21792116/free-photo-of-whatsapp-on-a-smartphone.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Enterprise Applications',
        content: 'An enterprise application (EA) is a large software system platform typically designed to operate in a corporate environment such as business or government. '

    },
    {   
        img: 'https://images.pexels.com/photos/21792116/pexels-photo-21792116/free-photo-of-whatsapp-on-a-smartphone.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Enterprise Applications',
        content: 'An enterprise application (EA) is a large software system platform typically designed to operate in a corporate environment such as business or government. '

    },
    {   
        img: 'https://images.pexels.com/photos/21792116/pexels-photo-21792116/free-photo-of-whatsapp-on-a-smartphone.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Enterprise Applications',
        content: 'An enterprise application (EA) is a large software system platform typically designed to operate in a corporate environment such as business or government. '

    },
    {   
        img: 'https://images.pexels.com/photos/21792116/pexels-photo-21792116/free-photo-of-whatsapp-on-a-smartphone.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Enterprise Applications',
        content: 'An enterprise application (EA) is a large software system platform typically designed to operate in a corporate environment such as business or government. '

    },
]

export default SolutionsCards


//   bg-no-repeat bg-cover bg-[url('/src/assets/solutionsbg.jpg')]