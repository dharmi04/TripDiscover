import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from '../Components/Slider';

const AllTours = () => {
  const [tours, setTours] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/all-tours'); // Adjust the URL according to your backend route
        setTours(response.data.tours);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };
    fetchTours();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/search-tours?query=${searchQuery}`);
      setTours(response.data.tours);
    } catch (error) {
      console.error('Error searching tours:', error);
    }
  };

  return (
    <div className="">
      <div class="bg-primary p-4">
        <div class="overflow-hidden">
          <div class="animate-marquee flex flex-row space-x-7">
            <p class="text-lg text-white">"Limited time offer: Book now and unlock special discounts on our top-rated tours. Don't miss out</p>
            <p class="text-lg text-white">Experience luxury redefined with our VIP tour packages. Elevate your journey to extraordinary!</p>
            <p class="text-lg text-white">Embark on an adventure of a lifetime with our exclusive tours! Unforgettable memories await</p>
            <p class="text-lg text-white">Ready for an adventure? Our tours combine excitement, comfort, and authenticity for the ultimate travel experience</p>
            <p class="text-lg text-white">Indulge in the spicy flavors of Indian cuisine!</p>
          </div>
        </div>
      </div>
      <Slider />
      <div>
        <div className='flex flex-row w-3/4 mx-auto p-8'>
          <div className="w-1/2">
            <p className='font-Montserrat md:text-xl text-xl font-semibold text-black pb-5'>Experince amazing tours to Incredible India </p>
          </div>
          <div className="w-1/2 ml-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tours or destinations..."
              className="p-2 border border-black rounded-md w-1/2 h-15"
            />
            <button onClick={handleSearch} className='bg-accent ml-4 text-white px-4 py-2  rounded-md shadow-md shadow-gray-500 '>Search</button>
          </div>
        </div>
      </div>
      <div className='w-3/4 mx-auto'>

        <h2 className="font-Montserrat uppercase text-accent text-center justify-center font-semibold text-5xl pt-20 pb-5">All Tours</h2>
        <div className="flex flex-wrap text-black w-3/4 mx-auto items-center justify-center p-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {tours.map(tour => (
              <li key={tour.tour_id} className="card m-2 border-[2px] border-black rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
                <div className="card-body text-black p-4">
                  <h3 className="font-bold text-lg mb-2">{tour.tour_name}</h3>
                  <p className="text-sm mb-2"><span className='font-bold'>Destination:</span> {tour.Destination.name}</p>
                  <p className="text-sm mb-2"><span className='font-bold'>Start Date: </span> {new Date(tour.start_date).toLocaleDateString()}</p>
                  <p className="text-sm mb-2"><span className='font-bold'>Duration:</span> {tour.duration} days</p>
                  <p className="text-sm mb-2"> <span className='font-bold'>Price: </span> ${tour.price}</p>
                  <p className="text-sm mb-2"> <span className='font-bold'>Description:  </span>{tour.Destination.description}</p>
                  <p className="text-sm mb-2"><span className='font-bold'>Location:  </span>{tour.Destination.location}</p>
                  <div className="flex justify-center mt-4">
                    <Link to={`/book/${tour.tour_id}`} className="text-white font-bold bg-primary rounded-md py-2 px-4 hover:bg-primary-dark transition-colors duration-300">Book Now</Link>
                  </div>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllTours;
