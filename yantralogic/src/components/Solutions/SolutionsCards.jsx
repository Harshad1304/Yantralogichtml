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
    className: 'center', // Optional: Adjust if needed
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: 'linear',
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
          arrows: true,
        }
      }
    ]
  };

  const handleCardClick = (index) => {
    sliderRef.current.slickGoTo(index); // Go to clicked card index
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-full bg-gradient-to-tr from-cyan-700 via-sky-900 to-neutral-900 overflow-hidden ">
      <div className="w-full ">
        <Slider ref={sliderRef} {...settings}>
          {data.map((d, index) => (
            <div key={index} className="px-2" onClick={() => handleCardClick(index)}>
              <div className="card-bg bg-white text-black rounded-xl shadow-lg overflow-hidden transform transition-transform">
                <div className="flex h-56 rounded-t-lg overflow-hidden">
                  <img src={d.img} alt={d.title} className="object-cover w-full" />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-center mb-2 text-xl">{d.title}</p>
                  <div className='content'>
                    <p className="text-left text-lg">{d.content}</p>
                    <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">Read More</button>
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

export default SolutionsCards;