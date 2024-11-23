import React from 'react';

const TeamSection = () => {
  return (
    <section className="bg-gray-50 h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
      
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Our Team</p>
          <h2 className="text-3xl font-extrabold text-gray-800">Meet The Team</h2>
        </div>
        <div className=' flex justify-center items-center gap-14'>
          <div className=' w-64 h-64'>
          <img
              src="/Members.png"
              alt="Members"
              className="w-64 h-64"
            />
          </div>
          <div className='w-64 h-64'>
          <img
              src="/Members (0).png"
              alt="Members"
              className="w-64 h-64"
            />
          </div>
          <div className='w-64 h-64'>
          <img
              src="/Members (1).png"
              alt="Members"
              className="w-64 h-64"
            />
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default TeamSection;
