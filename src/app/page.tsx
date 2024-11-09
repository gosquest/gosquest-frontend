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
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Cta } from "@/components/home/Cta";
import VerseCarousel from "@/components/VerseCarousel";

const fadeIn = {
   hidden: { opacity: 0, y: 50 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
   },
};

const LandingPage: React.FC = () => {
   return (
      <>
      <PublicNavbar/>
      <div className="mt-[100px]">
      <Hero />
      <VerseCarousel/>
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        
         <Features/>
        <Cta/>
        <Footer />
      </div>
      </div>
    </>
   );
};

export default LandingPage;
