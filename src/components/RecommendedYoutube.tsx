import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const dummyChannels = [
  {
    id: 1,
    name: 'Gospel Channel 1',
    description: 'Inspirational gospel music and sermons.',
    url: 'https://www.youtube.com/channel/UC1',
  },
  {
    id: 2,
    name: 'Gospel Channel 2',
    description: 'Live worship sessions and teachings.',
    url: 'https://www.youtube.com/channel/UC2',
  },
  {
    id: 3,
    name: 'Gospel Channel 3',
    description: 'Daily devotionals and gospel discussions.',
    url: 'https://www.youtube.com/channel/UC3',
  },
  {
    id: 4,
    name: 'Gospel Channel 4',
    description: 'Contemporary Christian music and testimonies.',
    url: 'https://www.youtube.com/channel/UC4',
  },
];

const RecommendedYoutube = () => {
  return (
    <div className="container py-8">
      <h3 className="text-xl font-semibold mb-4">Recommended Gospel YouTube Channels</h3>
      <Swiper
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          // When the window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // When the window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // When the window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {dummyChannels.map((channel) => (
          <SwiperSlide key={channel.id}>
            <div className="p-4 bg-white shadow-md rounded-lg border mt-4">
              <h4 className="text-lg font-bold">{channel.name}</h4>
              <p className="text-gray-600">{channel.description}</p>
              <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 block"
              >
                Visit Channel
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedYoutube;
