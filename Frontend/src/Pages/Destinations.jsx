import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { Link, useParams } from 'react-router-dom';
import image1 from '../assets/nature1.jpeg'
import image2 from '../assets/Taj.jpeg'
import image3 from '../assets/temple1.jpeg'
import image4 from '../assets/gateway.jpeg'
import image5 from '../assets/kerela2.jpeg'
import image6 from '../assets/tea.jpeg'


const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/all-destinations');
        setDestinations(response.data.destinations);
        console.log('Destinations:', response.data.destinations); // Log destinations array
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/search-destinations?query=${searchQuery}`);
      setDestinations(response.data.destinations);
    } catch (error) {
      console.error('Error searching destinations:', error);
    }
  };

  const handleInputChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    try {
      const response = await axios.get(`http://localhost:8000/api/suggestions?query=${query}`);
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleDestinationClick = async (destinationId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/tours/${destinationId}`);
      const tours = response.data.tours;
      // Handle fetched tours (e.g., update state, navigate to tour page)
      navigate(`/tours/${destinationId}`, { tours })
      console.log('Tours:', tours);
    } catch (error) {
      console.error('Error fetching tours:', error);
    }
  };

  const { destinationId } = useParams(); // Extract destinationId from URL params
  console.log('Destination ID:', destinationId);

  return (
    <div className="">
      <div class="bg-primary p-4">
        <div class="overflow-hidden">
          <div class="animate-marquee flex flex-row space-x-7">
            <p class="text-lg text-white">Explore the vibrant culture of India!</p>
            <p class="text-lg text-white">Experience the majestic beauty of the Taj Mahal!</p>
            <p class="text-lg text-white">Discover the serene backwaters of Kerala!</p>
            <p class="text-lg text-white">Trek through the breathtaking Himalayas!</p>
            <p class="text-lg text-white">Indulge in the spicy flavors of Indian cuisine!</p>
            <p class="text-lg text-white">Witness the spectacular festivals of India!</p>
            <p class="text-lg text-white">Marvel at the architectural wonders of Rajasthan!</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row w-full'>
        <img src={image1} alt="Nature" className=" h-96 w-auto " />
        <img src={image2} alt="Nature" className=" h-96 w-auto " />
        <img src={image3} alt="Nature" className=" h-96 w-auto " />
        <img src={image4} alt="Nature" className=" h-96 w-auto " />
        <img src={image5} alt="Nature" className=" h-96 w-auto " />
        <img src={image6} alt="Nature" className=" h-96  w-[300px]" />

      </div>

      <div className='flex flex-row w-3/4 mx-auto p-8'>
        <div className="w-1/2">
          <p className='font-Montserrat md:text-xl text-xl font-semibold text-black pb-5'>Embark on a captivating journey through India's kaleidoscope of culture, history, and natural wonders.a</p>
        </div>
      <div className="w-1/2 ml-4">
      <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search destinations..."
          className="p-2 border border-black rounded-md w-1/2 h-15"
        />
        <button onClick={handleSearch} className='bg-accent ml-4 text-white px-4 py-2  rounded-md shadow-md shadow-gray-500 '>Search</button>
      </div>
      </div>
      <div  className='w-3/4 mx-auto'>

      <h1 className='font-Montserrat uppercase text-accent text-center justify-center font-semibold text-5xl pt-20 pb-5'>Destinations</h1>
      <div className="flex flex-wrap text-black items-center justify-center">
        {destinations.map(destination => {
          console.log('Destination ID:', destination.id); // Log destination ID
          return (
            <div
              className="card m-2 border-[2px] border-black rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
              key={destination.id}
              style={{ width: '18rem', height: '20rem' }}
              onClick={() => handleDestinationClick(destination.id)}
            >
              <div className="card-body h-full">
                <h5 className="card-title text-primary font-bold text-center text-xl pb-4 pt-2">{destination.name}</h5>
                <p className="card-text px-3">{destination.description}</p>

                {/* Location Section */}
                <div className="location-info px-3 py-4">
                  <p className="card-text text-accent font-bold mb-2">Location:</p>
                  <p className="card-text">{destination.location}</p>
                </div>

                {/* Rating Section */}
                <div className="rating-info px-3 py-4">
                  <p className="card-text text-accent font-bold mb-2">Rating:</p>
                  <div className="flex items-center">

                    <div className="flex">
                      {[...Array(destination.rating)].map((_, index) => (
                        <svg key={index} className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 1l2.55 5.62L18 7.25l-4.65 4.5.99 5.86L10 15.75l-5.34 2.86.99-5.86L2 7.25l5.45-.63z" />
                        </svg>
                      ))}
                    </div>
                    <p className="card-text mr-2">{destination.rating}</p>
                  </div>
                </div>
                <p className="pl-3 underline">Book Tour Now</p>
              </div>
            </div>
          );
        })}

      </div>
      </div>
    </div>
  );
};

export default Destinations;
