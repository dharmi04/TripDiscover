import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Statue from "../assets/Statue_of__Unity.jpeg";
import Hawamahal from '../assets/hAWAmAHAL.jpeg';
import Baghabeach from '../assets/Bagha_Beach.jpeg';
import Ooty from '../assets/Ooty.jpeg';
import Darjeeling from '../assets/Darjeeling.jpeg';
import Kerela from '../assets/Kerela.png';

const Discover = () => {
  return (
    <div className='bg-black'>
      <div className='w-3/4 mx-auto flex md:flex-row flex-col '>
        <div className='md:w-1/2 '>
          <div className='pt-10'>
            <p className='font-Montserrat uppercase md:text-5xl text-3xl font-semibold text-accent pb-5'>DISCOVER INDIA</p>
            <p className='font-Montserrat uppercase  md:text-5xl text-3xl  font-semibold text-accent pb-5'> IN A</p>
            <p className='font-Montserrat uppercase  md:text-5xl text-3xl  font-semibold text-accent pb-5'>NEW WAY</p>
          </div>
          <p className='text-xl font-light text-white md:pr-4 pr-0 pt-5'>Embark on a journey with Trip Discover and experience India like never before. Our innovative approach offers you unique insights into the country's rich tapestry of culture, history, and breathtaking landscapes, making every adventure unforgettable.</p>
        </div>
        <div className='md:w-1/2'>
          <div className='space-y-4'>
            <div className="grid grid-cols-3 grid-row-1 space-y-8 ">
              {/* Empty divs for the first two columns */}
              <div></div>
              <div></div>
              {/* Image in the third column */}
              <div className="col-start-3">
                <img src={Statue} alt="Statue of Unity" className="w-full h-full" />
              </div>
            </div>

            <div className="grid grid-cols-3 grid-row-1 gap-4">
              <div></div>
              <div><img src={Hawamahal} alt="Hawa Mahal" className="w-full h-full" /></div>
              <div> <img src={Baghabeach} alt="Bagha Beach" className="w-full h-full" /></div>
            </div>

            <div className="grid grid-cols-3 grid-row-1 gap-4">
              <div><img src={Ooty} alt="Ooty" className="w-full h-full" /></div>
              <div> <img src={Darjeeling} alt="Darjeeling" className="w-full h-full" /></div>
              <div><img src={Kerela} alt="Statue of Unity" className="w-full h-full" /></div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer with social media links using react-icons */}
      <div className="flex justify-center items-center mt-10 pb-4 ">
        <a href="#" className="mr-4 text-white">
          <FaFacebookF className='w-[30px] h-[30px]' />
        </a>
        <a href="#" className="mr-4 text-white">
          <FaTwitter className='w-[30px] h-[30px]' />
        </a>
        <a href="#" className="mr-4 text-white">
          <FaInstagram className='w-[30px] h-[30px]'/>
        </a>
      </div>
    </div>
  );
}

export default Discover;
