import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import tourism from '../assets/Toursim1.jpeg';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      // Handle form validation errors
      return;
    }

    axios.post('http://localhost:8000/api/login-user', formData)
      .then(response => {
        navigate('/home'); // Redirect to home page
      })
      .catch(error => {
        console.error("Login error:", error);
      });
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <div className="bg-accent rounded-lg p-10 shadow-lg  w-[600px]">
        <h1 className="font-Montserrat uppercase text-center text-white text-2xl font-semibold mb-5">Trip Discover</h1>
        <h2 className="text-white text-xl font-bold mb-6 text-center uppercase font-Montserrat">Login</h2>
       
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" />
              </div>
              <button type="submit" className="bg-white text-black p-2 rounded-md w-full">Log In</button>
              <p className="text-white text-lg text-center mt-4">Don't have an account? <a href="/" className="text-white">Signup</a></p>
            </form>
    
          </div>
        </div>
      
  );
};

export default Login;
