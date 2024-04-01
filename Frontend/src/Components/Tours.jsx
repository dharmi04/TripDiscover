import React from 'react'
import image from '../assets/tourist.jpeg'

const Tours = () => {
  return (
    <div className='md:w-3/4 md:mx-auto flex md:flex-row flex-col md:pt-8 md:pb-8 mt-10 ' >
      <div className='md:w-1/2 md:mr-4'>
        <img src={image} className='md:rounded-xl md:h-[700px] h-[200px] w-full shadow-md shadow-gray-700 ' />
      </div>
      <div className='md:w-1/2'>

    <div className="container mx-auto px-4 ">
      <h1 className="text-3xl font-bold md:ml-2  mb-8">How it Works</h1>
      <div className="grid grid-cols-1 grid-rows-3 gap-8 md:ml-2">
        <div className="flex flex-col p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Find your destination</h2>
          <p className="text-gray-700 ">Embark on a journey to find your dream destination, where adventure and relaxation await, creating unforgettable memories along the way.</p>
          {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none">Explore destination</button> */}
        </div>
        <div className="flex flex-col p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Book a ticket</h2>
          <p className="text-gray-700 ">Book your ticket quickly and easily through our secure platform. No hidden fees, just the best deals for your dream vacation.</p>
          {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none">Book a ticket</button> */}
        </div>
        <div className="flex flex-col  p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Make payment</h2>
          <p className="text-gray-700 ">Our secure payment gateway ensures a smooth and hassle-free payment process. Pay with your preferred method and get instant confirmation.</p>
          {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none">Make payment</button> */}
        </div>
      </div>
    </div>
      </div>
    </div>


  )
}

export default Tours
