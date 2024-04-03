import './App.css'
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Destinations from './Pages/Destinations';

import BookNow from './Pages/BookNow';


import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ToursPage from './Pages/ToursPage';
import AllTours from './Pages/AllTours';
import Roles from './Pages/Roles';
import AdminSignUp from './Pages/Admin/AdminSignUp';
import AdminLogin from './Pages/Admin/AdminLogin';
import Dashboard from './Pages/Admin/Dashboard';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import AddDestination from './Pages/Admin/AddDestination';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element= {<Roles />} />
        <Route path="/home" element={<Home />} />
        {/* <PrivateRoute path="/home" element={<Home />} isAuthenticated={isAuthenticated} /> */}

        <Route path="/destinations" element={<Destinations />} />
        {/* <PrivateRoute path="/destinations" element={<Destinations />} isAuthenticated={isAuthenticated} /> */}

        <Route path="/tours/:destinationId" element={<ToursPage />} />
        {/* <PrivateRoute path="/tours/:destinationId" element={<ToursPage />} isAuthenticated={isAuthenticated} /> */}

        <Route path="/book/:tourId" element={<BookNow />} />
        {/* <PrivateRoute path="/book/:tourId" element={<BookNow />} isAuthenticated={isAuthenticated} /> */}

        <Route path="/usersignup" element={<SignUp />} />

        <Route path="/userlogin" element={<Login />} />
       {/* <PrivateRoute path="/userlogin" element={<Login />} isAuthenticated={isAuthenticated} /> */}


        <Route path="/alltours" element={<AllTours />} />
        {/* <PrivateRoute path="/alltours" element={<AllTours />} isAuthenticated={isAuthenticated} /> */}
        
        <Route path="/admin/signup" element={<AdminSignUp />} />

        {/* <PrivateRoute path="/admin/signup" element={<AdminSignUp />} isAuthenticated={isAuthenticated} /> */}


        <Route path="/admin/login" element={<AdminLogin />} />


        <Route path="/admin/dashboard" element={<Dashboard />} />
        {/* <PrivateRoute path="/admin/dashboard" element={<Dashboard />} isAuthenticated={isAuthenticated} /> */}

        <Route path="/admin/add-destination" element={<AddDestination />} />
        </Routes>
      </Router>

    </>
  )
}

export default App