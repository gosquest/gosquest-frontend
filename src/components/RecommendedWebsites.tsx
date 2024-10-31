import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useGetAllWebsites } from "@/hooks/useWebsites";

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
                  <div className="p-4 bg-white shadow-md rounded-lg border">
                     <h4 className="text-lg font-bold">{website.name}</h4>
                     <div className="w-full mt-2 flex justify-center">
                     <img
                           src={website.logo}
                           alt={website.name}
                           className="max-h-28 md:max-h-32 max-w-[90%]"
                        />
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default RecommendedWebsites;
