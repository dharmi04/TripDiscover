import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

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
      setError('Email and password are required');
      return;
    }

    axios.post('http://localhost:8000/api/login-user', formData)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/home'); // Redirect to home page
      })
      .catch(error => {
        setError('Invalid email or password'); // Display error message
        console.error("Login error:", error);
      });
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-500 to-black flex items-center justify-center min-h-screen">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-10 shadow-lg w-[600px]">
        <h1 className="font-Montserrat uppercase text-center text-black text-2xl font-semibold mb-5">Trip Discover</h1>
        <h2 className="text-black text-xl font-bold mb-6 text-center uppercase font-Montserrat">Login</h2>
       
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-black">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-black">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" />
          </div>
          <button type="submit" className="bg-white text-black p-2 rounded-md w-full">Log In</button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <p className="text-black text-lg text-center mt-4">Don't have an account? <a href="/" className="text-black underline">Signup</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
