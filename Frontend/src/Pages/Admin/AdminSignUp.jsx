import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    department: '',
    contact: '',
    personal_mail_id: ''
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
      .post("http://localhost:8000/api/admin/signup", formData)
      .then(response => {
        console.log(response);
        navigate('/admin/dashboard'); // Redirect to admin dashboard after signup
      })
      .catch(error => {
        console.error("Admin Signup error:", error);
      });
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-500 to-black flex justify-center items-center min-h-screen">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-10 shadow-lg w-[600px]">
        <h1 className="font-Montserrat uppercase text-center text-black text-2xl font-semibold mb-5">Admin Panel</h1>
        <h2 className="text-black text-xl font-bold mb-6 text-center uppercase font-Montserrat">Admin Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-black">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-black">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" required  />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-black">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" required  />
          </div>
          <div>
            <label htmlFor="department" className="block text-lg font-medium text-black">Department</label>
            <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" required  />
          </div>
          <div>
            <label htmlFor="contact" className="block text-lg font-medium text-black">Contact</label>
            <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" required  />
          </div>
          <div>
            <label htmlFor="personal_mail_id" className="block text-lg font-medium text-black">Personal Email ID</label>
            <input type="email" id="personal_mail_id" name="personal_mail_id" value={formData.personal_mail_id} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" required  />
          </div>
          <button
            type="submit"
            className="bg-white text-black p-2 rounded-md w-full"
          >
            Sign Up
          </button>
          <p className="text-black text-lg text-center mt-4">Already have an account? <a href="/admin/login" className="text-black underline">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default AdminSignUp;
