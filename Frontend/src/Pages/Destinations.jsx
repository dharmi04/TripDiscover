import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
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
    <div className="bg-black p-4">
      <h1 className='font-Montserrat uppercase text-accent text-center justify-center font-semibold text-5xl pt-20 pb-5'>Destinations</h1>
      <div className="flex flex-wrap text-white w-3/4 mx-auto items-center justify-center">
        {destinations.map(destination => {
          console.log('Destination ID:', destination.id); // Log destination ID
          return (
            <div
              className="card m-2 border-[2px] border-white rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
              key={destination.id}
              style={{ width: '18rem', height: '20rem' }}
              onClick={() => handleDestinationClick(destination.id)}
            >
              <div className="card-body h-full">
                <h5 className="card-title text-accent text-center text-xl pb-4 pt-2">{destination.name}</h5>
                <p className="card-text px-3">{destination.description}</p>
                <p className="card-text px-3 pt-4 text-accent font-bold">Location:</p>
                <p className="card-text px-3 pt-2"> {destination.location}</p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Destinations;
