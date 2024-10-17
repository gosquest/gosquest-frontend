import React from "react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Button } from "./ui/button";
import Image from "next/image";


const Footer = () => {
   const Links = [
      {
         title: "Pages",
         links: [
            {
               name: "Home",
               link: "/",
            },
            {
               name: "About",
               link: "/about",
            },
            {
               name: "Contact Us",
               link: "/contact",
            },
            {
               name: "Join Us",
               link: "/login",
            },
         ],
      },
      {
         title: "Company",
         links: [
            {
               name: "About Us",
               link: "/about",
            },
            {
               name: "Blogs",
               link: "/blogs",
            },
            {
               name: "Partnership",
               link: "/partnership",
            },
            {
               name: "Careers",
               link: "/careers",
            },
         ],
      },
      {
         title: "Developers",
         links: [
            {
               name: "Api-docs",
               link: "/api-docs/start/introduction",
            },
         ],
      },
      {
         title: "Support",
         links: [
            {
               name: "Help Center",
               link: "/help-center",
            },
            {
               name: "Contact",
               link: "/contact",
            },
            {
               name: "FAQs",
               link: "/help-center/ziba-pay-security",
            },
         ],
      },
   ];
   return (
      <div
         className="bg-center bg-cover mt-40 h-auto bg-main"
        //  style={{
        //     backgroundImage: "url('/images/footer.png')",
        //  }}
      >
         <div className="h-full py-20">
            <div className="flex flex-col gap-4 p-[52px] w-5/6 bg-white/80 mx-auto rounded-md my-2 relative items-center md:items-start">
               <h3 className="py-6 text-[32px]">Ready to get started ?</h3>
               <p className="text-center md:text-start md:w-5/6">
                  Create an account instantly and start accepting payments. Feel
                  free to reach out to us for tailored solutions designed
                  specifically for your business needs.
               </p>
               <div className="flex gap-6 py-6 flex-col items-center md:flex-row md:items-start w-full">
                  <Button variant="outline" className="w-[60%] md:w-[130px] p-6">
                     <Link href="/login">Login</Link>
                  </Button>

                  <Button className="w-[60%] md:w-[130px] p-6">
                     <Link href="/sign-up">Signup </Link>
                  </Button>
               </div>
               {/* <Image
                  src={zp}
                  alt="zp"
                  className="absolute w-[50px] md:w-[78px] top-2 right-2 md:top-16 md:right-16"
               /> */}
            </div>
            <div className="container mx-auto px-4 border-b border-white py-6 flex items-start text-white">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center items-start mt-4">
                  <div className="flex flex-col justify-between h-full">
                     <div className="md:mr-8">
                       <h4>GosQuest</h4>
                        <p>
                           <span className="text-submain">
                              Simplifying gospel
                           </span>{" "}
                          life
                        </p>
                     </div>
                     <div className="flex gap-2">
                        <Link href="">
                           <FaFacebook />
                        </Link>
                        <Link href="">
                           <FaInstagram />
                        </Link>
                        <Link href="">
                           <FaGithub />
                        </Link>
                     </div>
                  </div>
                  {Links.map((link, index) => (
                     <div key={index}>
                        <h3 className="font-medium mb-4">{link.title}</h3>
                        <ul className="space-y-3">
                           {link.links.map((text, subIndex) => (
                              <li key={subIndex}>
                                 <Link
                                    href={text.link}
                                    target={text.name === "Api-docs" ? "_blank" : undefined}
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
            <p className="text-center my-3 mt-6 text-submain">
               &copy;<span className="mx-2">Copyright 2024</span>All rights
               reserved by GosQuest
            </p>
         </div>
      </div>
   );
};

export default Footer;
