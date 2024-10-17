import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { useGetAllWebsites } from '@/hooks/useWebsites';


const RecommendedWebsites = () => {
  const { data, isLoading, error } = useGetAllWebsites(); 

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load websites. Please try again later.</p>;
  }

  return (
    <div className="container py-8">
      <h3 className="text-xl font-semibold mb-4">Recommended Gospel Websites</h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
      >
        {data?.websites.map((website: any) => (
          <SwiperSlide key={website.id}>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h4 className="text-lg font-bold">{website.name}</h4>
              <p className="text-gray-600">{website.description}</p>
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 block"
              >
                Visit Website
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedWebsites;
