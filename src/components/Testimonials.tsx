import { secureHeapUsed } from 'crypto'
import React from 'react'

const Testimonials = () => {
  return (
    <section className="bg-gray-50 h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Testimonials</p>
          <h2 className="text-3xl font-extrabold text-gray-800">What Clients say about us</h2>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-6 m-20'>
          <div className=' w-96 h-48 flex'>
            <div className='w-24'>
            <img
              src="/Userpic.png"
              alt="Gene Whitfield"
              className="w-16 h-16 rounded-lg object-cover shadow-md"
            />
            </div>
            <div className='w-72 p-4 font-sans'>
              <p >Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more
              gorgeous on devices with retina display support.</p>
            <h1 className='pt-3 text-gray-400'>RAYHAN CURRAN</h1>
            </div>
          </div>
          <div className=' w-96 h-48 flex'>
          <div className='w-24 '> 
             <img
              src="/Userpic (1).png"
              alt="Gene Whitfield"
              className="w-16 h-16 rounded-lg object-cover shadow-md"
            /></div>
            <div className='w-72 p-4 font-sans'>
              <p> As a business targeting high net worth individuals, we were looking for a slick, cool, and minimalist
              design for our website.</p>
            <h1 className='pt-3 text-gray-400'>Kayley Frame</h1>
            </div>
          </div>
          <div className=' w-96 h-48 flex'>
          <div className='w-24 '>
          <img
              src="/Userpic (2).png"
              alt="Gene Whitfield"
              className="w-16 h-16 rounded-lg object-cover shadow-md"
            />
          </div>
            <div className='w-72 p-4 font-sans'>
              <p>The most important part of the Startup Framework is the samples.</p>
            <h1 className='pt-3 text-gray-400'>Gene Whitfield</h1>
            </div>
          </div>
          <div className=' w-96 h-48 flex'>
            <div className='w-24 '>
            <img
              src="/Userpic (3).png"
              alt="Gene Whitfield"
              className="w-16 h-16 rounded-lg object-cover shadow-md"
            />
            </div>
            <div className='w-72 p-4 font-sans'>
              <p>I’ve built my website with Startup in just one day, and it was ready-to-go.</p>
            <h1 className='pt-3 text-gray-400'>Allan Kim</h1>
            </div></div>
        </div>
        
        </div>
     
    </section>
  );
};

export default Testimonials;




