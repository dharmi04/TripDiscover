// ToursPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/tours/${id}`);
        setTours(response.data.tours);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };

    fetchTours();
  }, [id]);

  return (
    <div>
      <h2>Tours</h2>
      <ul>
        {tours.map(tour => (
          <li key={tour.id}>{tour.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tours;
