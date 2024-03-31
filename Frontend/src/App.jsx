import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Destinations from './Pages/Destinations';
import Tours from './Components/Tours';
import BookNow from './Pages/BookNow';


import Login from './Pages/Login';
//import SignUp from './Pages/Signup';



function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tours/:id" element={<Tours />} />
        <Route path="/booknow" element={<BookNow />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

    </>
  )
}

export default App