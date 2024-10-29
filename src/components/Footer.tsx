import React from "react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Button } from "./ui/button";

const Footer = () => {
   const Links = [
      {
         title: "Pages",
         links: [
            { name: "Home", link: "/" },
            { name: "About", link: "/about" },
            { name: "Contact Us", link: "/contact" },
            { name: "Join Us", link: "/login" },
         ],
      },
      {
         title: "Company",
         links: [
            { name: "About Us", link: "/about" },
            { name: "Blogs", link: "/blogs" },
            { name: "Partnership", link: "/partnership" },
            { name: "Careers", link: "/careers" },
         ],
      },
      {
         title: "Developers",
         links: [{ name: "Api-docs", link: "/api-docs/start/introduction" }],
      },
      {
         title: "Support",
         links: [
            { name: "Help Center", link: "/help-center" },
            { name: "Contact", link: "/contact" },
            { name: "FAQs", link: "/help-center/ziba-pay-security" },
         ],
      },
   ];

   return (
      <div className="bg-center bg-cover mt-40 h-auto  text-main">
         <div className="h-full py-20">
            <div className="flex flex-col gap-4 p-8 w-11/12 bg-main mx-auto rounded-md my-2 items-center text-center text-white">
               <h3 className="py-4 text-[28px]">Ready to get started?</h3>
               <p className="text-center md:text-start md:w-4/6">
                  Create an account instantly and start accepting payments. Feel
                  free to reach out to us for tailored solutions designed
                  specifically for your business needs.
               </p>
               <div className="flex flex-col gap-4 py-6 items-center w-full md:flex-row md:justify-center">
                  <Button
                     variant="outline"
                     className="w-[60%] md:w-[130px] p-4"
                  >
                     <Link href="/login">Login</Link>
                  </Button>
                  <Button className="w-[60%] md:w-[130px] p-4 bg-white text-main border hover:border-white hover:text-white ">
                     <Link href="/sign-up">Signup</Link>
                  </Button>
               </div>
            </div>
            <div className="container mx-auto px-4 border-b border-white py-6 flex flex-col md:flex-row items-center md:items-start text-white text-center md:text-left">
               <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mt-4 w-full justify-center text-black">
                  <div className="flex flex-col items-center md:items-start">
                     <h4 className="text-lg font-bold">GosQuest</h4>
                     <p className="mt-2">
                        <span className="text-submain">Simplifying gospel</span>{" "}
                        life
                     </p>
                     <div className="flex gap-4 mt-4 justify-center">
                        <Link href="">
                           <FaFacebook className="text-xl" />
                        </Link>
                        <Link href="">
                           <FaInstagram className="text-xl" />
                        </Link>
                        <Link href="">
                           <FaGithub className="text-xl" />
                        </Link>
                     </div>
                  </div>
                  {Links.map((link, index) => (
                     <div
                        key={index}
                        className="flex flex-col items-center md:items-start"
                     >
                        <h3 className="font-medium mb-4">{link.title}</h3>
                        <ul className="space-y-3">
                           {link.links.map((text, subIndex) => (
                              <li key={subIndex}>
                                 <Link
                                    href={text.link}
                                    target={
                                       text.name === "Api-docs"
                                          ? "_blank"
                                          : undefined
                                    }
                                    className="hover:underline"
                                 >
                                    {text.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>
            <p className="text-center my-6 text-submain">
               &copy;<span className="mx-2">Copyright 2024</span>All rights
               reserved by GosQuest
            </p>
         </div>
      </div>
   );
};

export default Footer;
