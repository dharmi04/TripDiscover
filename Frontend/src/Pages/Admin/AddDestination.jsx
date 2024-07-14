import React, { useState } from 'react';
import axios from 'axios';

const AddDestination = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('rating', rating);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8000/api/add-destination', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Destination added:', response.data.destination);
      // Optionally, you can redirect the user or show a success message
    } catch (error) {
      console.error('Error adding destination:', error.response ? error.response.data : error.message);
      // Handle error: show error message to the user
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side content (if any) */}
      
      {/* Right side content */}
      <div className=" ">
        <div className="">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Destination</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
  <label htmlFor="name" className="block text-lg font-medium text-gray-800">
    Name
  </label>
  <input
    type="text"
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary"
    required
  />
</div>

<div>
  <label htmlFor="description" className="block text-lg font-medium text-gray-800">
    Description
  </label>
  <textarea
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary"
    rows="3"
    required
  ></textarea>
</div>

<div>
  <label htmlFor="location" className="block text-lg font-medium text-gray-800">
    Location
  </label>
  <input
    type="text"
    placeholder="Location"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary"
    required
  />
</div>

<div>
  <label htmlFor="rating" className="block text-lg font-medium text-gray-800">
    Rating
  </label>
  <input
    type="number"
    placeholder="Rating"
    value={rating}
    onChange={(e) => setRating(e.target.value)}
    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary"
    required
  />
</div>

<div>
  <label htmlFor="image" className="block text-lg font-medium text-gray-800">
    Image
  </label>
  <input
    type="file"
    onChange={(e) => setImage(e.target.files[0])}
    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary"
    required
  />
</div>


            <div>
              <label htmlFor="rating" className="block text-lg font-medium text-gray-800">Rating</label>
              <input
                type="number"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-lg font-medium text-gray-800">Image</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                required
              />
            </div>

            <button type="submit" className="bg-primary text-white p-3 rounded-md w-full mt-4 hover:bg-primary-dark transition-colors duration-300">
              Add Destination
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDestination;
