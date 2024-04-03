import React, { useState } from 'react';
import axios from 'axios';

const AddDestination= () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/add-destination', {
        name,
        description,
        location,
        rating,
      });
      console.log('Destination added:', response.data.destination);
      // Optionally, you can redirect the user or show a success message
    } catch (error) {
      console.error('Error adding destination:', error);
      // Handle error: show error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 mt-10 rounded-md shadow-md">
      <h2 className="text-xl mb-4">Add Destination</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mb-3"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mb-3"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mb-3"
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mb-3"
      />
      <button type="submit" className="w-full bg-indigo-500 text-black rounded-md py-2 px-4 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
        Add Destination
      </button>
    </form>
  );
};

export default AddDestination;
