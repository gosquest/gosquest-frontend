import React from 'react'
import Image from "next/image";

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=" px-4 md:px-0 flex items-center min-h-screen justify-center gap-6 flex-col bg-main text-white">
    {/* <Image src={"/svg/flow.svg"} alt="flowers" style={{ objectFit: "cover" }} fill className="absolute top-0 left-0 z-0"
    /> */}
    {/* <img src={'/svg/logo.svg'} alt="welcome" className="relative z-10 mx-auto h-[12rem]" /> */}
    <h2 className="text-center max-w-[540px] text-xl font-medium sm:text-2xl relative z-10 md:w-3/4 lg:w-[50%]">
       Welcome to GosQuest
    </h2>
    {children}
 </div>
  )
}

export default AuthLayout
