const express = require('express');
const path = require('path'); // Import path module
require('dotenv').config();
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/User.js');
const DestinationRoutes = require('./Routes/Destination.js');
const GuideRoutes = require('./Routes/Guide.js');
const TourRoutes = require('./Routes/Tours.js');
const BookingRoutes = require('./Routes/Booking.js');
const AdminRoutes = require('./Routes/Admin.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(session({
  secret: "Dharrrrrr",
  resave: false,
  saveUninitialized: true
}));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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

app.listen(process.env.PORT, () => {
  console.log('Listening to port', process.env.PORT);
});
