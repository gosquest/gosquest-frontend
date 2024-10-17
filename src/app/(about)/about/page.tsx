import Image from "next/image";
import React from "react";
import joy from "../../../../public/images/joy.png";
import values from "../../../../public/images/values.png";
import charity from "../../../../public/images/charity.png";

const AboutPage = () => {
   return (
      <>
         <div
            className="bg-center bg-cover  bg-main min-h-[35vh] flex flex-col justify-center -mt-6"
            style={{
               backgroundImage: "url('/images/about.png')",
            }}
         >
            <div className="container text-white">
               <p>ABOUT US</p>
               <h2>SERVING THE WORLD AROUND US !</h2>
            </div>
         </div>
         <div className="container">
            <div className="py-4 flex flex-col items-center justify-center gap-4">
               <p className="text-center">our mission & vision</p>
               <h3 className="text-center">
                  HELP THE PEOPLE ALLOVER THE WORLD TO KNOW MORE ABOUT GOSPEL
               </h3>
               <p className="text-center md:w-5/6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error dolore, molestiae enim, fugiat optio dolorem sint quia
                  delectus tenetur animi voluptates quisquam ab earum numquam
                  ex! Quasi enim dicta nisi libero eaque labore molestiae, omnis
                  veniam, ex, molestias vero aut.
               </p>
               <div className="flex flex-wrap gap-4 mt-4">
                  <Image
                     src={"/images/about2.png"}
                     alt="about gosquest"
                     width={300}
                     height={400}
                  />
                  <Image
                     src={"/images/about2.png"}
                     alt="about gosquest"
                     width={300}
                     height={400}
                  />
                  <Image
                     src={"/images/about2.png"}
                     alt="about gosquest"
                     width={300}
                     height={400}
                  />
               </div>

               <div className="flex mt-6 md:mt-10 flex-wrap gap-8 md:gap-40  justify-center">
                  <div className="flex flex-col gap-4 max-w-[400px]">
                     <p>OUR MISSION & VISION</p>
                     <h4>STRIVING FOR A BETTER TOMORROW</h4>
                     <small>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eligendi aliquam porro sit corrupti doloremque
                        doloribus recusandae sed! Facilis aliquid, nulla ratione
                        aliquam quia incidunt veniam, placeat adipisci iusto
                        ullam recusandae iure, distinctio dignissimos. Nemo
                        quisquam libero ex assumenda saepe eum rem. Hic sapiente
                        repudiandae eos nobis delectus. Perspiciatis culpa,
                        expedita omnis, laudantium, dolores vel inventore eum
                        temporibus blanditiis est explicabo!
                     </small>
                  </div>
                  <div className="flex flex-col gap-4 max-w-[400px]">
                     <p>WHAT WE DO</p>
                     <h4>BRINGING PEACE AND JOY TO THE WORLD</h4>
                     <small>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eligendi aliquam porro sit corrupti doloremque
                        doloribus recusandae sed! Facilis aliquid, nulla ratione
                        aliquam quia incidunt veniam, placeat adipisci iusto
                        ullam recusandae iure, distinctio dignissimos. Nemo
                        quisquam libero ex assumenda saepe eum rem. Hic sapiente
                        repudiandae eos nobis delectus. Perspiciatis culpa,
                        expedita omnis, laudantium, dolores vel inventore eum
                        temporibus blanditiis est explicabo!
                     </small>
                  </div>
                  <div className="flex flex-col gap-4 max-w-[400px]">
                     <p>OUR MISSION & VISION</p>
                     <h4>STRIVING FOR A BETTER TOMORROW</h4>
                     <small>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eligendi aliquam porro sit corrupti doloremque
                        doloribus recusandae sed! Facilis aliquid, nulla ratione
                        aliquam quia incidunt veniam, placeat adipisci iusto
                        ullam recusandae iure, distinctio dignissimos. Nemo
                        quisquam libero ex assumenda saepe eum rem. Hic sapiente
                        repudiandae eos nobis delectus. Perspiciatis culpa,
                        expedita omnis, laudantium, dolores vel inventore eum
                        temporibus blanditiis est explicabo!
                     </small>
                  </div>
               </div>

               <div className="flex flex-col items-center justify-center gap-4 mt-10">
                  <p>BENEFITS</p>
                  <h4 className="text-center">
                     THE BENEFITS OF JOINING OUR COMMUNITY
                  </h4>
                  <div className="flex gap-6 flex-col md:flex-row items-center justify-center">
                     <div className="md:w-1/2">
                        <h5 className="mb-3">FIND FULFILLMENT AND JOY</h5>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing
                           elit. Vel architecto eius id ipsa temporibus
                           molestiae, nam nostrum sed alias doloribus quasi,
                           excepturi tenetur expedita, porro impedit? Iusto ab
                           corporis quo quasi accusamus aspernatur voluptates
                           quis quas itaque, a nam odio. Rem quae pariatur
                           totam. Modi voluptatum vel doloremque perspiciatis
                           itaque, officiis recusandae ut beatae officia, dolore
                           ex exercitationem, atque omnis!
                        </p>
                     </div>
                     <Image
                     className="xl:w-1/2"
                        src={joy}
                        alt="joy"
                     />
                  </div>
                  <div className="flex gap-6 flex-col md:flex-row items-center justify-center">
                     
                     <Image
                     className="xl:w-1/2"
                        src={values}
                        alt="joy"
                     />
                     <div className="md:w-1/2">
                        <h5 className="mb-3">SHARED VALUES</h5>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing
                           elit. Vel architecto eius id ipsa temporibus
                           molestiae, nam nostrum sed alias doloribus quasi,
                           excepturi tenetur expedita, porro impedit? Iusto ab
                           corporis quo quasi accusamus aspernatur voluptates
                           quis quas itaque, a nam odio. Rem quae pariatur
                           totam. Modi voluptatum vel doloremque perspiciatis
                           itaque, officiis recusandae ut beatae officia, dolore
                           ex exercitationem, atque omnis!
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-6 flex-col md:flex-row items-center justify-center">
                     <div className="md:w-1/2">
                        <h5 className="mb-3">CHARITY EVENTS</h5>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing
                           elit. Vel architecto eius id ipsa temporibus
                           molestiae, nam nostrum sed alias doloribus quasi,
                           excepturi tenetur expedita, porro impedit? Iusto ab
                           corporis quo quasi accusamus aspernatur voluptates
                           quis quas itaque, a nam odio. Rem quae pariatur
                           totam. Modi voluptatum vel doloremque perspiciatis
                           itaque, officiis recusandae ut beatae officia, dolore
                           ex exercitationem, atque omnis!
                        </p>
                     </div>
                     <Image
                     className="xl:w-1/2"
                        src={charity}
                        alt="joy"
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AboutPage;
