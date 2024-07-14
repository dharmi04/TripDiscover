import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookNow = () => {
  const [tourDetails, setTourDetails] = useState(null);
  const [formData, setFormData] = useState({
    traveler_name: '',
    traveler_age: '',
    // Add other fields as needed
  });

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/tours/${tourId}`);
        setTourDetails(response.data.tour);
      } catch (error) {
        console.error('Error fetching tour details:', error);
      }
    };
    fetchTourDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/booking', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log('Booking successful:', response.data);
      // Handle success, e.g., show confirmation message
    } catch (error) {
      console.error('Booking error:', error);
    }
  };

  if (!tourDetails) {
    return <p>Loading tour details...</p>;
  }

  return (
    <div>
      <h2>Book Now</h2>
      <p>Tour Name: {tourDetails.tour_name}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="traveler_name" value={formData.traveler_name} onChange={handleChange} />
        <input type="number" name="traveler_age" value={formData.traveler_age} onChange={handleChange} />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookNow;
