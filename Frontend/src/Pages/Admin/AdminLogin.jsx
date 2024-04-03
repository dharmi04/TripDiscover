import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/admin/login", formData)
      .then(response => {
        console.log(response);
        // Navigate to admin dashboard upon successful login
        navigate('/admin/dashboard');
      })
      .catch(error => {
        console.error("Admin Login error:", error);
        // Handle login error here, such as displaying an error message to the user
      });
  };

  return (
    <div className="bg-white flex justify-center items-center min-h-screen">
      <div className="bg-accent rounded-lg p-10 shadow-lg w-[400px]">
        <h1 className="font-Montserrat uppercase text-center text-white text-2xl font-semibold mb-5">Admin Panel</h1>
        <h2 className="text-white text-xl font-bold mb-6 text-center uppercase font-Montserrat">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-white">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" required  />
          </div>
          <button
            type="submit"
            className="bg-white text-black p-2 rounded-md w-full"
          >
            Login
          </button>
          <p className="text-white text-lg text-center mt-4">Don't have an account? <a href="/admin/signup" className="text-white">Sign Up</a></p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
