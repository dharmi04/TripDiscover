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
    <div className=" p-4">
      <h2 className="font-Montserrat uppercase text-accent text-center justify-center font-semibold text-5xl pt-20 pb-5">All Tours</h2>
      <div className="flex flex-wrap text-black w-3/4 mx-auto items-center justify-center p-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {tours.map(tour => (
            <li key={tour.tour_id} className="card m-2 border-[2px] border-black rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
              <div className="card-body text-black p-4">
                <p className="font-bold text-lg mb-2">Tour Name: {tour.tour_name}</p>
                <p>Start Date: {tour.start_date}</p>
                <p>Duration: {tour.duration} days</p>
                <p>Price: ${tour.price}</p>
                <p>Destination: {tour.Destination.name}</p>
                <p>Description: {tour.Destination.description}</p>
                <p>Location: {tour.Destination.location}</p>
                <div className=" text-center py-2 mt-4">
                  <Link to={`/book/${tour.tour_id}`} className="text-white font-bold hover:underlinec bg-primary rounded-md p-3">Book Now</Link>
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
