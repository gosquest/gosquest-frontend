import Image from "next/image";
import BlurArrow from "../../../public/assets/blue-button.svg";
import Gradient from "../../../public/assets/Gradient.svg";
import { Button } from "../ui/button";
import HeroImage from "../../../public/assets/hero.svg";
import Draggable from "react-draggable";
import Link from "next/link";

export function Hero() {
   return (
      <div className="pt-4 lg:pt-10">
         <div className="px-[20px] lg:px-[280px]">
            <h1 className="text-center text-[32px] leading-[40px] font-medium text-main lg:text-[64px] lg:leading-[72px] text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">
               Welcome to GosQuest - Your Gateway to Gospel Truth
            </h1>
            <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
               Dive deep into gospel content that uplifts, inspires, and guides.
               Explore a vast range of resources to enrich your spiritual
               journey. Join a community committed to sharing the truth of God's
               word!
            </p>

            <div className="flex w-full pt-8 justify-center gap-x-6">
               <Button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
                  <Link href="/signup">Join the Quest</Link>
               </Button>
               <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
                  <Link href="/login" className="flex items-center gap-2">
                     Login
                     <span>
                        <Image
                           src={BlurArrow}
                           alt="Go to Login"
                        />
                     </span>
                  </Link>
               </button>
            </div>
         </div>

         <div className="relative flex h-full w-full justify-center">
            <Image
               src={Gradient}
               alt="Background Gradient"
               className="min-h-[500px] w-full object-cover lg:h-auto"
            />

            <div className="absolute bottom-5 flex w-full flex-col items-center  h-[80%]">
               <Draggable bounds="parent">
                  <Image
                     src={HeroImage}
                     alt="Hero Image"
                     className="-ml-4 h-[300px] sm:h-[400px] lg:h-[400px] xl:w-[70%] cursor-pointer"
                     height={100}
                     width={200}
                  />
               </Draggable>

               <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
                  <p className="text-[#FFFFFF] text-center lg:text-[18px]">
                     Join us in spreading the gospel across the world
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
