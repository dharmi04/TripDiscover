import React, { useState } from 'react';
import axios from 'axios';

const AddTours = () => {
  const [formData, setFormData] = useState({
    destination_id: '',
    tour_name: '',
    start_date: '',
    duration: '',
    price: '',
    image: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tourData = new FormData();
    tourData.append('destination_id', formData.destination_id);
    tourData.append('tour_name', formData.tour_name);
    tourData.append('start_date', formData.start_date);
    tourData.append('duration', formData.duration);
    tourData.append('price', formData.price);
    tourData.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:8000/api/add-tour', tourData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error adding tour:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="bg-white">
      <div className="  w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Add Tour</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="destination_id" className="block text-lg font-medium text-black">Destination ID:</label>
            <input type="text" id="destination_id" name="destination_id" value={formData.destination_id} onChange={handleChange} className="mt-1 p-2 text-black w-full  border-gray-300 rounded-md focus:outline-none focus:border-primary" required />
          </div>
          <div>
            <label htmlFor="tour_name" className="block text-lg font-medium text-black">Tour Name:</label>
            <input type="text" id="tour_name" name="tour_name" value={formData.tour_name} onChange={handleChange} className="mt-1 p-2 text-black w-full border-gray-300 rounded-md focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="start_date" className="block text-lg font-medium text-black">Start Date:</label>
            <input type="date" id="start_date" name="start_date" value={formData.start_date} onChange={handleChange} className="mt-1 p-2 text-black w-full  border-gray-300 rounded-md focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="duration" className="block text-lg font-medium text-black">Duration:</label>
            <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} className="mt-1 p-2 text-black w-full  border-gray-300 rounded-md focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="price" className="block text-lg font-medium text-black">Price:</label>
            <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} className="mt-1 p-2 text-black w-full border-gray-300 rounded-md focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="image" className="block text-lg font-medium text-black">Image:</label>
            <input type="file" id="image" onChange={handleImageChange} className="mt-1 p-2 text-black w-full rounded-md" />
          </div>
          <button type="submit" className="bg-black text-black p-2 rounded-md w-full">Add Tour</button>
        </form>
      </div>
    </div>
  );
};

export default AddTours;
