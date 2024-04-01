import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookNow = () => {
  
  const [travelerName, setTravelerName] = useState('');
  const [travelerAge, setTravelerAge] = useState('');
  const [travelerGender, setTravelerGender] = useState('');
  const [travelerAadharNumber, setTravelerAadharNumber] = useState('');
  const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);
  const { tourId } = useParams(); // Get the tourId from URL params
  const [tourDetails, setTourDetails] = useState(null);
 

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to add booking
      const response = await axios.post('http://localhost:8000/api/add-booking', {
        tour_id: tourId,
        traveler_name: travelerName,
        traveler_age: travelerAge,
        traveler_gender: travelerGender,
        traveler_aadhar_number: travelerAadharNumber
      });

      // If booking is successful, set state to true
      setIsBookingSuccessful(true);
    } catch (error) {
      console.error('Error adding booking:', error);
      // Handle error
    }
  };

  return (
    <div className="bg-black p-4">
      <h2 className="font-Montserrat uppercase text-accent text-center justify-center font-semibold text-5xl pt-20 pb-5">Book Now</h2>

      <form className="w-3/4 mx-auto" onSubmit={handleBookingSubmit}>
       
        <div className="mb-4">
          <label htmlFor="travelerName" className="block text-white">Traveler Name</label>
          <input type="text" id="travelerName" value={travelerName} onChange={(e) => setTravelerName(e.target.value)} className="block w-full rounded-md p-2 text-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="travelerAge" className="block text-white">Traveler Age</label>
          <input type="text" id="travelerAge" value={travelerAge} onChange={(e) => setTravelerAge(e.target.value)} className="block w-full rounded-md p-2 text-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="travelerGender" className="block text-white">Traveler Gender</label>
          <input type="text" id="travelerGender" value={travelerGender} onChange={(e) => setTravelerGender(e.target.value)} className="block w-full rounded-md p-2 text-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="travelerAadharNumber" className="block text-white">Traveler Aadhar Number</label>
          <input type="text" id="travelerAadharNumber" value={travelerAadharNumber} onChange={(e) => setTravelerAadharNumber(e.target.value)} className="block w-full rounded-md p-2 text-black" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
      </form>
      {isBookingSuccessful && <p className="text-green-500 mt-4">Booking Successful!</p>}
    </div>
  );
};

export default BookNow;
