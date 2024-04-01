import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import tourism from '../assets/Toursim1.jpeg';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormaData] = useState({
    name: '',
    email: '',
    password: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormaData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/add-user", formData)
      .then(response => {
        console.log(response);
        navigate('/home');
      })
      .catch(error => {
        console.error("Signup error:", error);
      });
  };

  return (
    <div className="bg-white flex justify-center items-center min-h-screen">
      <div className=" bg-accent rounded-lg p-10 shadow-lg  w-[600px]">
        <h1 className="font-Montserrat uppercase text-center text-white text-2xl font-semibold mb-5">Trip Discover</h1>
        <h2 className="text-white text-xl font-bold mb-6 text-center uppercase font-Montserrat">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-white">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" />
          </div>
          <div>
            <label htmlFor="bio" className="block text-lg font-medium text-white">Bio</label>
            <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} className="mt-1 p-2 w-full text-black rounded-md"></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-black p-2 rounded-md w-full"
          >
            Sign Up
          </button>
          <p className="text-white text-lg text-center mt-4">Already have an account? <a href="/login" className="text-accent">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
