import React from 'react';
import user1 from '../assets/user-01.jpg';
import user2 from '../assets/user-02.jpg';
import user3 from '../assets/user-05.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Mousewheel,Keyboard } from 'swiper/modules';

const clients = [
  {
    id: 1,
    text: "Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori. Excepturi nam cupiditate culpa doloremque deleniti repellat.",
    imgSrc: user1,
    alt: user1,
    name: "Tim Cook",
    job: "CEO Apple",
  },
  {
    id: 2,
    text: "Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.",
    imgSrc: user3,
    alt: user3,
    name: "Sundar Pichai",
    job: "CEO Google",
  },
  {
    id: 3,
    text: "Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.",
    imgSrc: user2,
    alt: user2,
    name: "Satya Nadella",
    job: "CEO Microsoft",
  },
];

const Slide = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        navigation={{
            clickable: true,
          }}
        modules={[Navigation,Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <div className="flex justify-center items-center">
          {clients.slice(0, 3).map(({ id, text, imgSrc, alt, name, job }) => (
            <SwiperSlide key={id}>
                <div className='space-y-10'>

              <p className=''>{text}</p>
              <img src={imgSrc} alt={alt} className=" mx-auto rounded-full"
              style={{ width: '100px', height: '100px' }} />
              <p>{name}</p>
              <p>{job}</p>
                </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slide;
