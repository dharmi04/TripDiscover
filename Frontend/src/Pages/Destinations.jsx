import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import image1 from '../assets/nature1.jpeg';
import image2 from '../assets/Taj.jpeg';
import image3 from '../assets/temple1.jpeg';
import image4 from '../assets/gateway.jpeg';
import image5 from '../assets/kerela2.jpeg';
import image6 from '../assets/tea.jpeg';

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

  const handleDestinationClick = async (destinationId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/tours/${destinationId}`);
      const tours = response.data.tours;
      // Handle fetched tours (e.g., update state, navigate to tour page)
      navigate(`/tours/${destinationId}`, { state: { tours } });
      console.log('Tours:', tours);
    } catch (error) {
      console.error('Error fetching tours:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
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

      {/* /* Image Gallery Section */}
       <div className='flex flex-row w-full'>
       <img src={image1} alt="Nature" className=" h-96 w-auto " />
       <img src={image2} alt="Taj Mahal" className=" h-96 w-auto " />
        <img src={image3} alt="Temple" className=" h-96 w-auto " />
       <img src={image4} alt="Gateway" className=" h-96 w-auto " />
        <img src={image5} alt="Kerala" className=" h-96 w-56 " />
       <img src={image6} alt="Tea Plantation" className=" h-96 w-auto " /> 
       </div> 

      {/* Search Section */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 p-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search destinations..."
          className="p-2 border border-black rounded-md w-full md:w-1/2 h-15"
        />
        <button onClick={handleSearch} className="bg-accent text-white px-4 py-2 rounded-md shadow-md hover:bg-opacity-80">
          Search
        </button>
      </div>

      {/* Destination Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-accent text-5xl font-semibold text-center pt-20 pb-5">Destinations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {destinations.map(destination => (
            <div
              key={destination.id}
              className="card border-2 border-black rounded-xl overflow-hidden transition-transform duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => handleDestinationClick(destination.id)}
            >
              <img
                src={`http://localhost:8000/${destination.imagePath}`} // Adjust this based on your API response
                alt={destination.name}
                className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72"
              />
              <div className="p-4">
                <h5 className="card-title text-primary font-bold text-xl mb-2">{destination.name}</h5>
                <p className="card-text">{destination.description}</p>
                <p className="card-text text-accent font-bold mt-2">Location: {destination.location}</p>
                <div className="flex items-center">
                  <p className="card-text text-accent font-bold">Rating:</p>
                  <div className="ml-2">
                    {[...Array(destination.rating)].map((_, index) => (
                      <svg key={index} className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1l2.55 5.62L18 7.25l-4.65 4.5.99 5.86L10 15.75l-5.34 2.86.99-5.86L2 7.25l5.45-.63z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <button
                  className="mt-4 bg-primary text-white px-4 py-2 rounded-md shadow-md hover:bg-opacity-80"
                  onClick={() => handleDestinationClick(destination.id)}
                >
                  Book Tour
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;



