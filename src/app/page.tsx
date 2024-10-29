"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import PublicNavbar from "@/components/PublicNavbar";
import { BibleModel } from "@/components/BibleModel";
import RotatingSword from "@/components/RotatingSword";
import SceneComponents from "@/components/SceneComponents";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import baby from "../../public/images/baby.jpeg";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import RecommendedWebsites from "@/components/RecommendedWebsites";
import RecommendedYoutube from "@/components/RecommendedYoutube";

const InteractiveScene: React.FC = () => {
   return (
      <>
         <PublicNavbar />
         <div className="w-full h-screen fixed top-0 left-0 -z-10 big-main">
            {/* <SceneComponents /> */}

        {/* thid container contains welcome info  */}
            <div className="fixed top-[65%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center text-main z-10 ">
               <h1 className="text-4xl font-bold">GosQuest</h1>
               <p className="text-lg mt-2">A best quiz game ever.</p>
               <Button className="mt-6">Have Fun</Button>
            </div>
         </div>


         <div className=" min-h-screen mt-[100vh]  py-6 border-t shadow">
            <div className="flex flex-col md:flex-row gap-6 mt-10 container">
               <div className="flex flex-col gap-4 justify-center">
                  <h2 className="text-main">Yaratwimanye</h2>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ab, dolorem? Ipsam nemo soluta natus officia, quasi quis.
                     Dolorum, quam provident.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ullam cum expedita consequatur officia? Saepe consequuntur,
                     laborum adipisci fugiat molestias inventore veritatis,
                     voluptatem in voluptate laudantium modi hic praesentium.
                     Optio, voluptas rerum maiores adipisci enim porro. Optio
                     numquam exercitationem laborum illo.
                  </p>
                  <Button className="w-fit p-6">Play</Button>
               </div>
               <Image
                  src={baby}
                  alt="gosquest"
                  className="md:w-[500px]"
               />
            </div>
            {/* Recommended Gospel websites */}
            <RecommendedWebsites />

            {/* Recommended Gospel Youtube channels */}
            <RecommendedYoutube />
            {/* faq */}

            <Faqs />
            <Footer />
         </div>
      </>
   );
};

export default InteractiveScene;
