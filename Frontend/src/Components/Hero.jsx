import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px]">
      {/* Background image with blur effect */}
      <div className="absolute inset-0" style={{ filter: 'blur(3px)', WebkitFilter: 'blur(8px)' }}>
        <div className="bg-hero-pattern bg-cover h-full"></div>
      </div>
      {/* Content */}
      <div className='flex flex-col justify-center items-center text-primary font-Montserrat text-xl p-8 relative z-10'>
        <div className="flex space-x-20 uppercase">
          <div>Home</div>
          <div>Tours</div>
          <div>Destination</div>
          <div>Gallery</div>
        </div>
        <div className="text-center mt-20 font-PlayfairDisplay font-bold text-5xl text-primary mb-3">
          Trip Discover
        </div>
        <div className='text-center  font-PlayfairDisplay font-bold text-2xl text-primary'>
          Your trip planner
        </div>
      </div>
    </div>
  );
};

export default Hero;
