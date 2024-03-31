import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ToursPage = () => {
  const [tours, setTours] = useState([]);
  const { destinationId } = useParams();

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
    <div>
      <h2>Tours</h2>
      <ul>
        {tours.map(tour => (
          <li key={tour.tour_id}>
            <p>Tour Name: {tour.tour_name}</p>
            <p>Destination ID: {tour.destination_id}</p>
            <p>Start Date: {tour.start_date}</p>
            <p>Duration: {tour.duration} days</p>
            <p>Price: ${tour.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToursPage;
