import React from 'react'
import Image from "next/image";

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=" px-4 md:px-0 flex items-center min-h-screen justify-center gap-6 flex-col  text-main">
    <h2 className="text-center max-w-[540px] text-xl font-medium sm:text-2xl relative z-10 md:w-3/4 lg:w-[50%]">
       Welcome to GosQuest
    </h2>
    {children}
 </div>
  )
}

export default AuthLayout
