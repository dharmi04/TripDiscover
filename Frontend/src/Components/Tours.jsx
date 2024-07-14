import React from 'react'
import image from '../assets/tourist.jpeg'

const Tours = () => {
  return (
    <div className='w-3/4 mx-auto flex md:flex-row flex-col md:pt-8 md:pb-8 mt-20 mb-30 ' id="tours" >
      <div className='md:w-1/2 md:mr-4 md:block hidden '>
        <img src={image} className='md:rounded-xl md:h-[700px] h-[250px] w-full shadow-md shadow-gray-700 ' />
      </div>
      <div className='md:w-1/2'>

    <div className="container mx-auto px-4 ">
      <h1 className="md:text-5xl text-3xl font-semibold md:ml-2  mb-8 font-Poppins md:mt-0 mt-6 ">How it Works</h1>
      <div className="grid grid-cols-1 grid-rows-3 gap-6 md:ml-2">
        <div className="flex flex-col p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="md:text-xl font-bold mb-2 text-sm">Find your destination</h2>
          <p className="text-gray-700 md:text-sm text-xs ">Embark on a journey to find your dream destination, where adventure and relaxation await, creating unforgettable memories along the way.</p>
          <p className='pt-3'><a href="/destinations" className='text-accent underline'>Explore Destinations</a></p>
          {/* <button className="mt-4 px-4 py-2 bg-accent text-white rounded-md hover:bg-primary focus:outline-none">Explore destination</button> */}
        </div>
        <div className="flex flex-col p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="md:text-xl font-bold mb-2 text-sm">Reviews and Ratings</h2>
          <p className="text-gray-700 md:text-sm text-xs "> Trip Discover aggregates reviews and ratings from verified users, enabling travelers to make informed decisions when selecting accommodations, restaurants, and attractions.</p>
          <p className='pt-3'><a href="/destinations" className='text-accent underline'>See Reviews</a></p>
          {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none">Book a ticket</button> */}
        </div>
        <div className="flex flex-col p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="md:text-xl font-bold mb-2 text-sm">Book a ticket</h2>
          <p className="text-gray-700 md:text-sm text-xs ">Book your ticket quickly and easily through our secure platform. No hidden fees, just the best deals for your dream vacation.</p>
          <p className='pt-3'><a href="/alltours" className='text-accent underline'>Explore Tours</a></p>
          {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none">Book a ticket</button> */}
        </div>
        {/* <div className="flex flex-col  p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="md:text-xl font-bold mb-2 text-sm">Travel Safety Tips</h2>
          <p className="text-gray-700 md:text-sm text-xs  "> Trip Discover provides comprehensive travel safety tips and resources, including health advisories, emergency contacts, and safety guidelines, to ensure travelers have a safe and enjoyable experience.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none">Make payment</button>
        </div> */}
      </div>
    </div>
      </div>
    </div>


  )
}

export default Tours
