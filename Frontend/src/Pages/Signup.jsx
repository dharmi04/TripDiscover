import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import navigate from react-router-dom
import tourism from '../assets/Toursim1.jpeg';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormaData] = useState({
    name: '',
    email: '',
    password: '',
    bio: ''
  });

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormaData((prevData) =>({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit= (e) =>{
    e.preventDefault();
    // Add your signup logic here
    axios
      .post("http://localhost:8000/api/add-user", formData)
      .then(response => {
        console.log(response);
        navigate('/');
      })
      .catch(error => {
        console.error("Signup error:", error);
      });

    console.log('Form submitted:', formData);
  };
  return (
    <div className="bg-indigo">
      <div className="flex items-center justify-center md:p-3 p-20">
        <div className='border-white rounded-xl border-[3px] bg-transparent shadow-lg shadow-white'>
          <h1 className='font-Montserrat uppercase text-center justify-center text-white font-semibold pt-5 md:text-4xl text-2xl'>Trip Discover</h1>
          <div className='flex md:flex-row flex-col'>
            <div className="md:w-1/2">
              <img src={tourism} alt="Tourism Image" className="w-full h-auto p-20 align-middle" />
            </div>
            <div className="md:w-1/2 p-20">
              <h2 className="md:text-3xl text-xl font-bold mb-6 text-center text-white uppercase font-Montserrat">Sign Up</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-white">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 w-full text-white border-[3px] border-accent bg-transparent rounded-md" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 text-white  w-full border-[3px] border-accent bg-transparent rounded-md" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-lg font-medium text-white">Password</label>
                  <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 text-white  w-full border-[3px] border-accent bg-transparent rounded-md" />
                </div>
                <div>
                  <label htmlFor="bio" className="block text-lg font-medium text-white">Bio</label>
                  <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} className="mt-1 p-2 w-full border-[3px] border-accent text-white  bg-transparent rounded-md"></textarea>
                </div>
                <button
            type="submit"
            className="bg-transperant text-white p-2 rounded-md w-full border-white border-[3px] text-2xl"
          >
            Sign Up
          </button>
          <div className='flex flex-row text-white space-x-96 text-xl '>
           <p className='flex-start text-sm'>Already have an account?</p>
            <p className=''><a href="/login"> Login</a></p>

          </div>
        
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
