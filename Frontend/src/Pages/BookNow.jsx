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
    <div className=" p-4">
      <h2 className="font-Montserrat uppercase text-accent text-center justify-center font-semibold text-5xl pt-20 pb-5">Book Now</h2>

      <form className="w-3/4 mx-auto" onSubmit={handleBookingSubmit}>
       
        <div className="mb-4">
          <label htmlFor="travelerName" className="block text-black">Traveler Name</label>
          <input 
  type="text" 
  id="travelerName" 
  value={travelerName} 
  onChange={(e) => setTravelerName(e.target.value)} 
  className="block w-full rounded-md p-2 text-black border-primary border-2 border-opacity-50 focus:border-opacity-100 focus:outline-none focus:border-primary"
/>

        </div>
        <div className="mb-4">
  <label htmlFor="travelerAge" className="block text-black">Traveler Age</label>
  <select
    id="travelerAge"
    value={travelerAge}
    onChange={(e) => setTravelerAge(e.target.value)}
    className="block w-full rounded-md p-2 text-black border-primary border-2 border-opacity-50 focus:border-opacity-100 focus:outline-none focus:border-primary"
  >
    <option value="" disabled>Select age</option>
    {/* Generate options for ages 1 to 100 */}
    {Array.from({ length: 100 }, (_, i) => (
      <option key={i + 1} value={i + 1}>{i + 1}</option>
    ))}
  </select>
</div>

        <div className="mb-4">
  <label htmlFor="travelerGender" className="block text-black">Traveler Gender</label>
  <select
    id="travelerGender"
    value={travelerGender}
    onChange={(e) => setTravelerGender(e.target.value)}
    className="block w-full rounded-md p-2 text-black border-primary border-2 border-opacity-50 focus:border-opacity-100 focus:outline-none focus:border-primary"
  >
    <option value="" disabled>Select gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
</div>

        <div className="mb-4">
          <label htmlFor="travelerAadharNumber" className="block text-black">Traveler Aadhar Number</label>
          <input type="text" id="travelerAadharNumber" value={travelerAadharNumber} onChange={(e) => setTravelerAadharNumber(e.target.value)} className="block w-full rounded-md p-2 text-black border-primary border-2 border-opacity-50 focus:border-opacity-100 focus:outline-none focus:border-primary" />
        </div>
        <button type="submit" className="bg-primary hover:bg-accent  font-bold py-2 px-4 rounded text-white">Book Now</button>
      </form>
      {isBookingSuccessful && <p className="text-green-500 mt-4">Booking Successful!</p>}
    </div>
  );
};

export default BookNow;
