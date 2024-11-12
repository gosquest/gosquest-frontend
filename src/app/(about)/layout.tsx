import Footer from "@/components/Footer";
import PublicNavbar from "@/components/PublicNavbar";
import React from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <PublicNavbar />
         <div className="mt-[100px] pt-4">{children}</div>
         <Footer />
      </>
   );
};

export default AboutLayout;
