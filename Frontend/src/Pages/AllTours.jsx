import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllTours = () => {
  const [tours, setTours] = useState([]);

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

  return (
    <div className="bg-black p-4">
      <h2 className="font-Montserrat uppercase text-accent text-center justify-center font-semibold text-5xl pt-20 pb-5">All Tours</h2>
      <div className="flex flex-wrap text-white w-3/4 mx-auto items-center justify-center">
        <ul>
          {tours.map(tour => (
            <li key={tour.tour_id} className="card m-2 border-[2px] border-white rounded-xl transition-transform duration-300 transform hover:scale-105">
              <div className="card-body">
                <p>Tour ID: {tour.tour_id}</p>
                <p>Start Date: {tour.start_date}</p>
                <p>Duration: {tour.duration} days</p>
                <p>Price: ${tour.price}</p>
                <p>Destination: {tour.Destination.name}</p>
                <p>Description: {tour.Destination.description}</p>
                <p>Location: {tour.Destination.location}</p>
                <div className=' p-3 text-white'>
                <Link to={`/book/${tour.tour_id}`}>Book Now</Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllTours;
