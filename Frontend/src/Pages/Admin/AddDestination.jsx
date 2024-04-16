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
    <div className="bg-white flex justify-center items-center min-h-screen">

    <div className="bg-accent rounded-lg p-10 shadow-lg w-[400px] ">
       <h2 className="text-white text-xl font-bold mb-6 text-center uppercase font-Montserrat">Add Destination</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-lg font-medium text-white">Name</label>
        <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-1 p-2 text-black w-full rounded-md"
      />
      </div>
      
      <div>
      <label htmlFor="password" className="block text-lg font-medium text-white">Description</label>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mt-1 p-2 text-black w-full rounded-md"
      />
      </div>

      <div>
      <label htmlFor="password" className="block text-lg font-medium text-white">Location</label>

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="mt-1 p-2 text-black w-full rounded-md"
      />
      </div>

      <div>
      <label htmlFor="password" className="block text-lg font-medium text-white">Rating</label>
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="mt-1 p-2 text-black w-full rounded-md"
      />
      </div>
      <button type="submit" className="bg-white text-black p-2 rounded-md w-full">
        Add Destination
      </button>
    </form>
    </div>
    </div>
  );
};

export default AddDestination;
