



import React from 'react'
import  Image  from 'next/image';
 import herotext from "../../public/Learn More.png"
import joyfullguy from "../../public/joyful-guy-texting-message-smartphone2 1.png" 
import background from "../../public/Background Data (1).png"




export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-7">
        <div className="md:w-1/2  ml-14 space-y-6 ">
          <h1 className="text-4xl w-80 font-bold text-[#0B1B35] top-3">
            We boost growth for your startup business
          </h1>
          <p className="text-gray-600 w-96 text-lg">
            Our goal is top at the heart of creativity services industry as a digital creator.
            In has a after a comment.
          </p>
          <div className="flex space-x-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">
              Get Started
            </button>
            <div>
              <Image
                src="/Learn More.png"
                alt="Learn more"
                width={169}
                height={60}
                className="top-[610] left-[325]"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative mt-8 md:mt-0">
          <Image
            src="/Group 10.png"
            alt="Background Design"
            width={1000}
            height={500}
            className="absolute top-0 left-0 w-full h-auto"
          />
          <Image
            src="/joyful-guy-texting-message-smartphone2 1.png"
            alt="user"
            width={500}
            height={500}
            className="relative z-10 w-2/3 mx-auto"
          />
          <Image
            src="/Background Data (1).png"
            alt="Growth Icon"
            width={349}
            height={462}
            className="absolute w-[349px] h-[462px] top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
}




