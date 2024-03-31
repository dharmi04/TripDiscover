// Destinations.jsx
import React, { useState, useEffect, useHistory } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
 // const history = useHistory(); // Use useHistory hook

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/all-destinations');
        setDestinations(response.data.destinations);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }); // Include history in the dependency array



  return (
    <div className="bg-black p-4">
      <h2 className="text-white mb-4">All Destinations</h2>
      <div className="flex flex-wrap text-white">
        {destinations.map(destination => (
          <div 
            className="card m-2 border-[2px] border-white rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer" 
            key={destination.ID} 
            style={{ width: '18rem' }}
            onClick={() => handleDestinationClick(destination)}
          >
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
