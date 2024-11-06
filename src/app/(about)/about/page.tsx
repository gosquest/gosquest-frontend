"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import joy from "../../../../public/images/joy.png";
import values from "../../../../public/images/values.png";
import charity from "../../../../public/images/charity.png";

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

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const AboutPage = () => {
  return (
    <>
      <div
        className="bg-center bg-cover bg-white min-h-[35vh] flex flex-col justify-center -mt-6"
        style={{
          backgroundImage: "url('/images/about.png')",
        }}
      >
        <div className="container mx-auto text-white text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl font-semibold"
          >
            ABOUT US
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl font-bold"
          >
            SERVING THE WORLD AROUND US!
          </motion.h2>
        </div>
      </div>

      <motion.div className="container mx-auto py-10" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div className="py-4 flex flex-col items-center justify-center gap-4" variants={staggerContainer}>
          <motion.p className="text-center text-gray-600" variants={fadeInUp}>
            OUR MISSION & VISION
          </motion.p>
          <motion.h3 className="text-center text-2xl font-semibold" variants={fadeInUp}>
            SPREADING THE GOSPEL TO ALL CORNERS OF THE WORLD
          </motion.h3>
          <motion.p className="text-center md:w-5/6 text-gray-700" variants={fadeInUp}>
            Our goal is to connect people to the truth and love of the Gospel, bringing hope and purpose to lives around
            the globe. We share Gospel teachings, inspire faith, and foster community, transforming lives one soul at a
            time.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-4 justify-center"
            variants={fadeInUp}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={"/images/about2.png"}
                alt="About Gosquest"
                width={300}
                height={400}
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={"/images/about2.png"}
                alt="About Gosquest"
                width={300}
                height={400}
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={"/images/about2.png"}
                alt="About Gosquest"
                width={300}
                height={400}
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>

          <div className="flex mt-8 md:mt-12 flex-wrap gap-8 md:gap-40 justify-center">
            <motion.div className="flex flex-col gap-4 max-w-[400px]" variants={fadeInUp}>
              <p className="text-primary font-semibold">OUR PURPOSE</p>
              <h4 className="text-xl font-bold">BUILDING A COMMUNITY OF FAITH</h4>
              <small className="text-gray-600">
                We strive to empower believers with spiritual resources, guide them on their faith journey, and foster
                an environment of love and understanding, paving the way for a brighter, faith-filled tomorrow.
              </small>
            </motion.div>
            <motion.div className="flex flex-col gap-4 max-w-[400px]" variants={fadeInUp}>
              <p className="text-primary font-semibold">WHAT WE DO</p>
              <h4 className="text-xl font-bold">SPREADING JOY AND PEACE</h4>
              <small className="text-gray-600">
                Through our community and various outreach programs, we spread joy and bring the message of the Gospel
                to uplift, comfort, and inspire.
              </small>
            </motion.div>
            <motion.div className="flex flex-col gap-4 max-w-[400px]" variants={fadeInUp}>
              <p className="text-primary font-semibold">OUR MISSION</p>
              <h4 className="text-xl font-bold">LEADING WITH LOVE</h4>
              <small className="text-gray-600">
                Guided by the teachings of Christ, we lead with love and compassion, offering support to those in need
                and fostering a welcoming space for all.
              </small>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="flex flex-col items-center justify-center gap-4 mt-10" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p className="text-primary font-semibold" variants={fadeInUp}>
            BENEFITS
          </motion.p>
          <motion.h4 className="text-center text-2xl font-semibold" variants={fadeInUp}>
            DISCOVER THE BENEFITS OF JOINING OUR COMMUNITY
          </motion.h4>

          {/* Benefit Sections with Scroll Animations */}
          <motion.div
            className="flex gap-6 flex-col md:flex-row items-center justify-center mt-8"
            variants={fadeInUp}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <div className="md:w-1/2 text-center md:text-left">
              <h5 className="mb-3 text-xl font-semibold text-primary">FIND JOY AND PURPOSE</h5>
              <p className="text-gray-700">
                By joining us, you will find a renewed sense of purpose and joy, connected with a community that
                encourages personal growth and spiritual fulfillment.
              </p>
            </div>
            <motion.div className="xl:w-1/2" variants={zoomIn}>
              <Image className="rounded-lg shadow-lg" src={joy} alt="Joy" />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex gap-6 flex-col md:flex-row items-center justify-center mt-8"
            variants={fadeInUp}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="xl:w-1/2" variants={zoomIn}>
              <Image className="rounded-lg shadow-lg" src={values} alt="Values" />
            </motion.div>
            <div className="md:w-1/2 text-center md:text-left">
              <h5 className="mb-3 text-xl font-semibold text-primary">SHARED VALUES</h5>
              <p className="text-gray-700">
                We uphold values rooted in faith, compassion, and unity, offering a sense of belonging and shared purpose
                in our journey together.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-6 flex-col md:flex-row items-center justify-center mt-8"
            variants={fadeInUp}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <div className="md:w-1/2 text-center md:text-left">
              <h5 className="mb-3 text-xl font-semibold text-primary">GIVING BACK</h5>
              <p className="text-gray-700">
                We provide opportunities for charitable giving, where your acts of kindness contribute to the well-being
                of others.
              </p>
            </div>
            <motion.div className="xl:w-1/2" variants={zoomIn}>
              <Image className="rounded-lg shadow-lg" src={charity} alt="Charity" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutPage;
