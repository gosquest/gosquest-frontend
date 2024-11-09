import Image from "next/image";
import BlurArrow from "../../../public/assets/blue-button.svg";
import Gradient from "../../../public/assets/Gradient.svg";
import Google from "../../../public/assets/Google.svg";
import Slack from "../../../public/assets/Slack.svg";
import Truspilot from "../../../public/assets/Trustpilot.svg";
import Cnn from "../../../public/assets/CNN.svg";
import Cluth from "../../../public/assets/Clutch.svg";
import { Button } from "../ui/button";
import HeroImage from "../../../public/assets/hero.svg"

export function Hero() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
         Welcome to GosQuest - A Gospel content ocean
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>

        <div className="flex w-full pt-8 justify-center gap-x-6 ">
          <Button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            Join Us
          </Button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
            View Pricing
            <span>
              <Image src={BlurArrow} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="hero image"
            className="-ml-4 h-[300px]  sm:h-[400px]  lg:h-[400px] xl:w-[70%]"
            height={100}
            width={200}
          />

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px]">
             Praise the Lord Almighty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
