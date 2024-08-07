import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px]" id="hero">
      {/* Background image with blur effect */}
      {/* style={{ filter: 'blur(3px)', WebkitFilter: 'blur(8px)' }} */}
      <div className="absolute inset-0" >
        <div className="bg-hero-pattern bg-cover h-full"></div>
      </div>
      {/* Content */}
      <div className='flex flex-col justify-center items-center text-primary font-Montserrat md:text-xl text-sm p-8 relative z-10'>
        <div className="flex md:space-x-20 space-x-4 uppercase">
          <a href="#hero">Home</a>
          <a href="/alltours">Tours</a>
          <a href="/destinations">Destination</a>
          <a href="#gallery">Gallery</a>
        </div>
        <div className="text-center mt-20 pt-20 font-PlayfairDisplay font-bold text-5xl text-primary mb-3">
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
