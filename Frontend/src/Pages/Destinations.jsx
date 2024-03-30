import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        // Make GET request to fetch all destinations
        const response = await axios.get('http://localhost:8000/api/all-destinations');

        // Set fetched destinations to state
        setDestinations(response.data.destinations);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []); // Run once on component mount

  return (
    <div className="bg-black p-4">
      <h2 className="text-white mb-4">All Destinations</h2>
      <div className="flex flex-wrap text-white ">
        {destinations.map(destination => (
          <div className="card m-2 border-[2px] border-white rounded-xl transition-transform duration-300 transform hover:scale-105" key={destination._id} style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title text-accent">{destination.name}</h5>
              <p className="card-text">{destination.description}</p>
              <p className="card-text">Location: {destination.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
