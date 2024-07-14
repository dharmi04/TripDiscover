import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    console.log("Form Data being sent:", formData);
    axios
      .post("http://localhost:8000/api/add-user", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log("User added successfully:", response);
        navigate('/userlogin');
      })
      .catch(error => {
        console.error("Signup error:", error);
        if (error.response) {
          console.error("Error response data:", error.response.data);
        }
      });
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-500 to-black flex p-8 justify-center items-center min-h-screen">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-10 shadow-lg w-[600px]">
        <h1 className="font-Montserrat uppercase text-center text-black text-2xl font-semibold mb-5">Trip Discover</h1>
        <h2 className="text-black text-xl font-bold mb-6 text-center uppercase font-Montserrat">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-black">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-black">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-black">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" />
          </div>
          <div>
            <label htmlFor="bio" className="block text-lg font-medium text-black">Bio</label>
            <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} className="mt-1 p-2 w-full text-black rounded-md"></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-black p-2 rounded-md w-full"
          >
            Sign Up
          </button>
          <p className="text-black text-lg text-center mt-4">Already have an account? <a href="/userlogin" className="text-black underline">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
