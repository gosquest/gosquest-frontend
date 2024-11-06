"use client";
import React from "react";
import { motion } from "framer-motion";
import PublicNavbar from "@/components/PublicNavbar";
import SceneComponents from "@/components/SceneComponents";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import baby from "../../public/images/baby.jpeg";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import RecommendedWebsites from "@/components/RecommendedWebsites";
import RecommendedYoutube from "@/components/RecommendedYoutube";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const LandingPage: React.FC = () => {
  return (
    <>
      <PublicNavbar />
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-900 via-purple-800 to-black"
      >
        <motion.div
          className="relative z-10 text-white"
          variants={fadeIn}
        >
          <h1 className="text-5xl font-extrabold">GosQuest</h1>
          <p className="text-lg mt-2">The Ultimate Quiz Adventure</p>
          <Button className="mt-6">Start the Quest</Button>
        </motion.div>
        {/* <SceneComponents /> */}
      </motion.div>

      {/* About Section */}
      <motion.div
        className="min-h-screen mt-[100vh] py-6 border-t shadow z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
      >
        <div className="flex flex-col md:flex-row gap-6 mt-10 container">
          <div className="flex flex-col gap-4 justify-center">
            <h2 className="text-main text-3xl font-semibold">Yaratwimanye</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              dolorem? Ipsam nemo soluta natus officia, quasi quis.
            </p>
            <p className="text-gray-700">
              Ullam cum expedita consequatur officia? Saepe consequuntur,
              laborum adipisci fugiat molestias inventore veritatis.
            </p>
            <Button className="w-fit p-6">Play</Button>
          </div>
          <Image src={baby} alt="gosquest" className="md:w-[500px]" />
        </div>
      </motion.div>

      {/* New Content Section with Animations */}
      <motion.section
        className="min-h-screen bg-gray-50 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Why Choose GosQuest?</h2>
          <p className="mb-8 text-lg text-gray-700">
            GosQuest is designed to entertain, educate, and inspire! Embark on an adventure of knowledge and fun.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {["Educational", "Engaging", "Rewarding", "Fun for All Ages"].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg w-64"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">Explore this unique feature of GosQuest that makes it truly one of a kind.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Recommended and FAQ Sections */}
      <motion.div
        className="container py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
      >
        <RecommendedWebsites />
        <RecommendedYoutube />
        <Faqs />
      </motion.div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
