import Image from 'next/image'
import React from 'react'
import notfound from "../../../../../public/images/notfound.png"
import MobileNav from '@/components/MobileNav'

const page = () => {
  return (
    <>
    <MobileNav/>
    <div className='p-8 flex min-h-screen items-center justify-center'>
      <div className="bg-white items-center justify-center p-6 md:p-10 w-full min-h-[60vh] ">
        <div className="flex flex-col items-center justify-center gap-6">
        <Image src={notfound} alt='notfound'/>
        <h5 className='text-main'>Coming Soon</h5>
        </div>
      </div>
    </div>
    </>
  )
}

export default page
