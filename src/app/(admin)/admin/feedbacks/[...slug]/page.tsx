import Image from "next/image";
import React from "react";
import navigo from "../../../../../../public/images/navigo.png"

const Feedback = () => {
   return (
      <div>
         <h2>Feedback</h2>
         <div className="flex flex-col gap-6 bg-white p-6">
            <div className="flex justify-between">
            <div className="flex gap-4">
               <Image
                  src={navigo}
                  alt="project"
               />
               <div>
                  <p className="text-main">Navigo</p>
                  <p>Transport</p>
               </div>
            </div>
            a
            </div>
            <div className="md:ml-10">
               <p className="md:w-5/6">
                  <span className="font-bold">Description:</span>specialize in
                  traffic management and efficient transport services,
                  collaborating with industry leaders to enhance mobility.
                  Harnessing AI's power, we're transforming the future of
                  transportation.
               </p>

               <p className="mt-6">
                  Visit Our website on 👉
                  <span className="text-main underline ml-4">navigo.rw</span>
               </p>

               <div className="mt-10 flex gap-6 flex-col">
                  <h4>Feedbacks</h4>
                  
                  <div className="flex gap-4">
                     <div className="bg-gray-400 text-main rounded-full w-8 h-8 flex items-center justify-center">
                        I
                     </div>
                     <div className="p-2 bg-input flex flex-col gap-4 w-5/6">
                        <p className="text-main">Mukarusine Liliane</p>
                        <p>
                           Thanks Great Poject!! will suport the ico
                           aswell!!!Keep on the right track. We all need to help
                           one another. Wooihooo no feedbackYou have a great
                           project at hand, please make this happen.All the best
                           DAOACT teamRfrfGreat Job. Considering to investThanks
                           Very like your idea and waiting pre-ico! ThanksGreat
                           idea, will support the ICO. Good luck!Good luck.
                           Looking forward to this great new project! 👏👏
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="bg-gray-400 text-main rounded-full w-8 h-8 flex items-center justify-center">
                        I
                     </div>
                     <div className="p-2 bg-input flex flex-col gap-4 w-5/6">
                        <p className="text-main">Mukarusine Liliane</p>
                        <p>
                           Thanks Great Poject!! will suport the ico
                           aswell!!!Keep on the right track. We all need to help
                           one another. Wooihooo no feedbackYou have a great
                           project at hand, please make this happen.All the best
                           DAOACT teamRfrfGreat Job. Considering to investThanks
                           Very like your idea and waiting pre-ico! ThanksGreat
                           idea, will support the ICO. Good luck!Good luck.
                           Looking forward to this great new project! 👏👏
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Feedback;
