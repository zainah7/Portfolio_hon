import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import apple from "../assets/apple.png";
import atom from "../assets/atom.png";
import blackberry from "../assets/blackberry.png";
import dropbox from "../assets/dropbox.png";
import envato from "../assets/envato.png";
import firefox from "../assets/firefox.png";
import joomla from "../assets/joomla.png";
import magento from "../assets/magento.png";
import Slide from './Slide';





const OurClient = () => {
  const images = [
    {
      id: 1,
      imgSrc: apple,
      alt: "Apple",
    },
    {
      id: 2,
      imgSrc: atom,
      alt: "Atom",
    },
    {
      id: 3,
      imgSrc: blackberry,
      alt: "Blackberry",
    },
    {
      id: 4,
      imgSrc: dropbox,
      alt: "Dropbox",
    },
    {
      id: 5,
      imgSrc: envato,
      alt: "Envato",
    },
    {
      id: 6,
      imgSrc: firefox,
      alt: "Firefox",
    },
    {
      id: 7,
      imgSrc: joomla,
      alt: "Joomla",
    },
    {
      id: 8,
      imgSrc: magento,
      alt: "Magento",
    },
  ];



  return (
    <div className="bg-[#E6E6E6] w-full h-[150vh] flex flex-col justify-center items-center space-y-20">
        <div className="w-1/2 text-center"  data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
          <h2 className="text-xl text-green-500 font-semibold">OUR CLIENTS</h2>
          <h1 className="text-7xl font-semibold">
            Logo has been honored to partner up with these clients
          </h1>
        </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper "  data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine"
        
      >
        <div className="flex justify-center items-center"  data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
          {images.map(({ id, imgSrc, alt }) => (
            <SwiperSlide key={id}>
              <div className="" >
                <img src={imgSrc} alt={alt} className="w-44 h-44" />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
          <hr className="bg-gray-200 w-1/3 h-1" />
          <div className='w-full mx-auto'>
          <Slide />
          </div>
    </div>
  );
};

export default OurClient;
