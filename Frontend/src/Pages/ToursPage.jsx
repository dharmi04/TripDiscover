import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom

const ToursPage = () => {
  const [tours, setTours] = useState([]);
  const { destinationId } = useParams(); // Extract destinationId from URL params
  console.log('Destination ID:', destinationId); // Log destinationId
   

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/tours/${destinationId}`);
      
        setTours(response.data.tours);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };

    fetchTours();
  }, [destinationId]);

  return (
    <div className="bg-black p-4">
      <h2 className="font-Montserrat uppercase text-accent text-center justify-center font-semibold text-5xl pt-20 pb-5">Tours</h2>
      <div className="flex flex-wrap text-white w-3/4 mx-auto items-center justify-center">
        <ul>
          {tours.map(tour => (
            <li key={tour.tour_id} className="card m-2 border-[2px] border-white rounded-xl transition-transform duration-300 transform hover:scale-105">
              <div className="card-body">
                <p>Tour Name: {tour.tour_name}</p>
                <p>Destination Name: {tour.destination_name}</p>
                <p>Start Date: {tour.start_date}</p>
                <p>Duration: {tour.duration} days</p>
                <p>Price: ${tour.price}</p>
                <div className='bg-accent p-3 text-white'>
                  {/* Use Link component to navigate to BookNow page */}
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

export default ToursPage;
