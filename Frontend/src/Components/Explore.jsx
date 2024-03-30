import React from 'react'
import Statue from "../assets/Statue_of__Unity.jpeg"
import Hawamahal from '../assets/hAWAmAHAL.jpeg'
import Baghabeach from '../assets/Bagha_Beach.jpeg'
import Ooty from '../assets/Ooty.jpeg'
import Darjeeling from '../assets/Darjeeling.jpeg'

import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Explore = () => {
  const places = [
    {
      name: 'Statue of Unity, Gujarat',
      image: Statue,
      info: 'The Statue of Unity is a colossal statue of Indian statesman and independence activist Vallabhbhai Patel, who was the first Deputy Prime Minister and Home minister of independent India.',
      link: '/statue-of-unity',
    },
    {
      name: 'Hawa Mahal, Rajasthan',
      image: Hawamahal,
      info: 'Hawa Mahal, also known as "Palace of Winds" or "Palace of the Breeze", is a palace in Jaipur, India. It is constructed of red and pink sandstone.',
      link: '/hawa-mahal',
    },
    // {
    //   name: 'Bagha Beach',
    //   image: Baghabeach,
    //   info: 'Bagha Beach is a popular beach destination located in North Goa, India. It is known for its vibrant nightlife, water sports activities, and shacks serving delicious seafood.',
    //   link: '/bagha-beach',
    // },
    // {
    //   name: 'Ooty',
    //   image: Ooty,
    //   info: 'Ooty, also known as Udagamandalam, is a hill station in the state of Tamil Nadu, India. It is famous for its picturesque landscapes, tea gardens, and pleasant weather.',
    //   link: '/ooty',
    // },
    {
      name: 'Darjeeling',
      image: Darjeeling,
      info: 'Darjeeling is a town and a district in the Indian state of West Bengal. It is known for its tea industry, panoramic views of the Himalayas, and the Darjeeling Himalayan Railway.',
      link: '/darjeeling',
    },
  ];


  return (
    <div className='bg-black'>
    <div className='w-3/4 mx-auto '>
      <h1 className='font-Montserrat uppercase text-accent text-center justify-center font-semibold text-5xl pt-20 pb-5'>Explore</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-3 md:grid-rows-1 text-white md:space-x-5 md:mb-0 mb-6 md:space-y-0 space-y-6">
        {places.map((place, index) => (
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border-white border-[1px] ransition-transform duration-300 transform hover:scale-105" key={index}>
            <img src={place.image} alt={place.name} className="w-full h-[350px]" />
            <div className="px-3 py-4">
              <div className="text-2xl font-serif">{place.name}</div>
              <p className="text-gray-400 text-base">{place.info}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="/destinations"><p className='font-Montserrat text-accent text-center  font-normal text-2xl pt-4 pb-6'>Explore More</p></a>
    </div>
  </div>
  );
  
};

export default Explore;

 {/* <div className="px-6 pt-4 pb-2">
          <Link to={place.link} className="inline-block text-black font-bold py-2 px-4 rounded">
            Explore
          </Link>
        </div> */}