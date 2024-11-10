import Image from "next/image";
import { motion } from "framer-motion";
import Feature1 from "../../../public/assets/feature-1.svg";
import Feature2 from "../../../public/assets/feature-2.svg";
import Feature3 from "../../../public/assets/feature-3.svg";
import Check from "../../../public/assets/check.svg";
import blueButton from "../../../public/assets/blue-button.svg";
import greenButton from "../../../public/assets/green-button.svg";
import pinkButton from "../../../public/assets/pink-button.svg";
import Link from "next/link";

// Define animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export function Features() {
  return (
    <motion.div
      className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Feature 1 */}
      <motion.div className="flex flex-col gap-x-6 sm:flex-row-reverse" variants={fadeInUp}>
        <motion.div
          className="w-full sm:w-1/2 lg:w-[50%] overflow-hidden"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
          }}
        >
          <Image src={Feature1} alt="Feature 1" layout="responsive" className="w-full h-auto" />
        </motion.div>
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px]">Explore Gospel Websites</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">
            Discover Rich Gospel Content
          </h1>
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Access a curated list of gospel websites to stay connected with spiritual content that enriches your faith journey.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            {["Daily devotionals and prayer guides", "Bible study resources for all ages", "Inspiring articles and gospel blogs"].map((text, index) => (
              <li key={index} className="flex items-center gap-x-2 text-[#36485C]">
                <Image src={Check} alt="Checkmark" />
                {text}
              </li>
            ))}
          </ul>
          <Link href="/gospel-websites">
          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
            Learn More
            <Image src={blueButton} alt="Learn more" />
          </p>
          </Link>
        </div>
      </motion.div>

      {/* Feature 2 */}
      <motion.div className="flex flex-col gap-x-6 sm:flex-row" variants={fadeInUp}>
        <motion.div
          className="w-full sm:w-1/2 lg:w-[50%] overflow-hidden"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
          }}
        >
          <Image src={Feature2} alt="Feature 2" layout="responsive" className="w-full h-auto" />
        </motion.div>
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium  lg:text-[18px]">Gospel YouTube Channels</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200 lg:text-[42px] lg:leading-[58px]">
            Watch Gospel Content Anytime
          </h1>
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Explore a variety of gospel channels on YouTube with GosQuest’s guidance, featuring sermons, music, and teachings.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            {["Popular worship channels and live-streamed services", "Access to gospel music playlists and artists", "Bible teaching series and discussions"].map((text, index) => (
              <li key={index} className="flex items-center gap-x-2 text-[#36485C]">
                <Image src={Check} alt="Checkmark" />
                {text}
              </li>
            ))}
          </ul>
          <Link href="/yt-channels">
          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-main lg:text-[18px]">
            Learn More
            <Image src={greenButton} alt="Learn more" />
          </p>
          </Link>
        </div>
      </motion.div>

      {/* Feature 3 */}
      <motion.div className="flex flex-col gap-x-6 sm:flex-row-reverse" variants={fadeInUp}>
        <motion.div
          className="w-full sm:w-1/2 lg:w-[50%] overflow-hidden"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
          }}
        >
          <Image src={Feature3} alt="Feature 3" layout="responsive" className="w-full h-auto" />
        </motion.div>
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px]">Faith-Based Games</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200 lg:text-[42px] lg:leading-[58px]">
            Engage with Gospel Games
          </h1>
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Discover games that reinforce Christian values, designed to entertain while deepening your understanding of faith.
          </p>
          <div className="flex w-full gap-x-[24px]">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
              <p className="text-[#36485C]">Christian trivia games</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">50+</h3>
              <p className="text-[#36485C]">Interactive Bible story games</p>
            </div>
          </div>
          <Link href="/games">
          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
            Learn More
            <Image src={pinkButton} alt="Learn more" />
          </p>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
