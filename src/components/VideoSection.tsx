import React from 'react'
import Image from 'next/image'
import videoplayer from "../../public/Video Player (1).png"

const VideoSection = () => {
  return (
    <section className='bg-gray-50 '>
    <div className='flex justify-center mt-11 h-96'>
      <div className='flex-1 flex flex-col gap-4 justify-center items-center pt-9'>
        <h1 className='pr-14 text-bold font-bold text-[#1E0E62]'>Many Blocks and Components</h1>
        <p className='w-72 text-[#4c4b76]'>Startup Framework contains components and complex blocks which can easily be integrated into almost any design. </p>
        <button className='w-28 rounded-full top-[48px]  text-[#4c4b76] shadow-md border-2 p-2 mt-6 mr-40'>Explore</button>  
      </div>
      <div className='flex-1 pt-14'>
 <Image src="/Video Player (1).png" alt='video player' width={400} height={400} />
      </div>
    </div>
    </section>
  )
}

export default VideoSection
