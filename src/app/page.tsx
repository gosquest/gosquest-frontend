/** @format */
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import welcome from "../../public/svg/welcome.svg"

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 py-10'>
      <Image src={welcome} alt="welcome" width={500} />
      <h1 className='text-center'>Welcome to Rwanda Coding Academy Hackathon 😊</h1>
      <Button className='mt-6'>Login to continue</Button>
    </div>
  )
}

export default page
