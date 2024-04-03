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
    <div className="bg-white flex justify-center items-center min-h-screen">
      <div className="bg-accent rounded-lg p-10 shadow-lg w-[600px]">
        <h1 className="font-Montserrat uppercase text-center text-white text-2xl font-semibold mb-5">Admin Panel</h1>
        <h2 className="text-white text-xl font-bold mb-6 text-center uppercase font-Montserrat">Admin Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" required  />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-white">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" required  />
          </div>
          <div>
            <label htmlFor="department" className="block text-lg font-medium text-white">Department</label>
            <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" required  />
          </div>
          <div>
            <label htmlFor="contact" className="block text-lg font-medium text-white">Contact</label>
            <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" required  />
          </div>
          <div>
            <label htmlFor="personal_mail_id" className="block text-lg font-medium text-white">Personal Email ID</label>
            <input type="email" id="personal_mail_id" name="personal_mail_id" value={formData.personal_mail_id} onChange={handleChange} className="mt-1 p-2 text-black w-full rounded-md" required  />
          </div>
          <button
            type="submit"
            className="bg-white text-black p-2 rounded-md w-full"
          >
            Sign Up
          </button>
          <p className="text-white text-lg text-center mt-4">Already have an account? <a href="/admin/login" className="text-white">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default AdminSignUp;
