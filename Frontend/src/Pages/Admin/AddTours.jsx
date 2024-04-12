import React, { useState } from 'react';
import axios from 'axios';


const AddTours = () => {
  const [formData, setFormData] = useState({
    
    destination_name: '',
    tour_name: '',
    start_date: '',
    duration: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/add-tour', formData);
      console.log(response.data);
     // addToast('Tour added successfully!', { duration: 3000, type: 'success' });
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error adding tour:', error);
      //addToast('Error adding tour. Please try again later.', { duration: 3000, type: 'error' });
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className=''>
      <h2>Add Tour</h2>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label>
          Destination ID:
          <input type="text" name="destination_id" value={formData.destination_id} onChange={handleChange} required />
        </label>
        {/* <label>
          Destination Name:
          <input type="text" name="destination_name" value={formData.destination_name} onChange={handleChange} />
        </label> */}
        <label>
          Tour Name:
          <input type="text" name="tour_name" value={formData.tour_name} onChange={handleChange} />
        </label>
        <label>
          Start Date:
          <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} />
        </label>
        <label>
          Duration:
          <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={formData.price} onChange={handleChange} />
        </label>
        <button type="submit">Add Tour</button>
      </form>
    </div>
  );
};

export default AddTours;
