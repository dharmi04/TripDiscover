const express = require('express');
require('dotenv').config();
const cors = require('cors'); // Import cors package

const bodyParser = require('body-parser');
const userRoutes = require('./Routes/User.js'); // Import the router
const DestinationRoutes = require('./Routes/Destination.js'); 
const GuideRoutes = require('./Routes/Guide.js');
const TourRoutes = require('./Routes/Tours.js');
const BookingRoutes = require('./Routes/Booking.js');
const AdminRoutes = require('./Routes/Admin.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // Enable CORS for all routes

app.use('/api', userRoutes);
app.use('/api', DestinationRoutes);
app.use('/api', GuideRoutes);
app.use('/api', TourRoutes);
app.use('/api', BookingRoutes);
app.use('/api', AdminRoutes);



app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// syncModels(); // If this is an asynchronous operation, handle it properly before starting the server

app.listen(process.env.PORT, () => {
  console.log('Listening to port', process.env.PORT);
});