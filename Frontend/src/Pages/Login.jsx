import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { Navigate } from 'react-router-dom';
import tourism from '../assets/Toursim1.jpeg';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target; // Corrected: Use name instead of email
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.get('http://localhost:8000/api/login-user', {
            headers: {
                'Authorization': `Bearer ${token}` // Include the token in the 'Authorization' header
            }
        })
            .then(response => {
                Navigate('/')
            })
            .catch(error => {
                console.error("Login error:", error);
            });
    };

    return (
        <div className="bg-indigo">
            <div className="flex items-center justify-center p-20">
                <div className='border-white rounded-xl border-[3px] bg-transparent shadow-lg shadow-white'>
                    <h1 className='font-Montserrat uppercase text-center justify-center text-white font-semibold pt-5 text-4xl'>Trip Discover</h1>
                    <div className='flex md:flex-row flex-col'>
                        <div className="md:w-1/2">
                        <img src={tourism} alt="Tourism Image" className="w-full h-auto p-20 align-middle" />
                        </div>
                        <div className="md:w-1/2 p-20">
                            <h2 className="text-3xl font-bold mb-6 text-center text-white uppercase font-Montserrat">Log In</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 w-full border-[3px] border-accent bg-transparent rounded-md" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 w-full border-[3px] border-accent bg-transparent rounded-md" />
                                </div>
                                <button type="submit" className="bg-transparent text-white p-2 rounded-md w-full border-white border-[3px]">Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
