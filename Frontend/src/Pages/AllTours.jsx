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
        const response = await axios.get('http://localhost:8000/api/all-tours');
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
      <div className="bg-primary p-4">
        <div className="overflow-hidden">
          <div className="animate-marquee flex flex-row space-x-7">
            <p className="text-lg text-white">"Limited time offer: Book now and unlock special discounts on our top-rated tours. Don't miss out</p>
            <p className="text-lg text-white">Experience luxury redefined with our VIP tour packages. Elevate your journey to extraordinary!</p>
            <p className="text-lg text-white">Embark on an adventure of a lifetime with our exclusive tours! Unforgettable memories await</p>
            <p className="text-lg text-white">Ready for an adventure? Our tours combine excitement, comfort, and authenticity for the ultimate travel experience</p>
            <p className="text-lg text-white">Indulge in the spicy flavors of Indian cuisine!</p>
          </div>
        </div>
      </div>
      <Slider />
      <div>
        <div className="flex flex-wrap text-black w-3/4 mx-auto items-center justify-center p-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {tours.map(tour => (
              <li key={tour.tour_id} className="card m-2 border-[2px] border-black rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
                <img
                  src={`http://localhost:8000/${tour.imagePath}`} // Adjust this based on your API response
                  alt={tour.name}
                  className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72"
                />
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
