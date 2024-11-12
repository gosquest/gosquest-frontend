import React from 'react'
import { Button } from './ui/button'

const HandleFailed = () => {
    return (
        <main className="flex flex-col justify-center">
            <p className="text-center text-red-500 mb-3">Failed to fetch projects</p>
            <Button variant={"destructive"} onClick={() => location.reload()} className='w-fit mx-auto px-[4rem]'>
                Reload
            </Button>
        </main>
    )
}

export default HandleFailed