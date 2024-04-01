import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Destinations from './Pages/Destinations';

import BookNow from './Pages/BookNow';


import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ToursPage from './Pages/ToursPage';
import AllTours from './Pages/AllTours';



function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tours/:destinationId" element={<ToursPage />} />
        <Route path="/book/:tour_id" element={<BookNow />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alltours" element={<AllTours />} />
        </Routes>
      </Router>

    </>
  )
}

export default App