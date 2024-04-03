const Booking = require('../Models/Booking');

// Controller function to add a booking


// Controller function to add a booking
// exports.addBooking = async (req, res) => {
//   try {
//     const { tour_id, user_id, traveler_name, traveler_age, traveler_gender, traveler_aadhar_number } = req.body;

//     // Check if tour_id is provided
//     if (!tour_id) {
//       return res.status(400).json({ message: 'Tour ID is required' });
//     }

//     // Create the booking
//     const booking = await Booking.create({ tour_id, user_id, traveler_name, traveler_age, traveler_gender, traveler_aadhar_number });

//     res.status(201).json({ booking });
//   } catch (error) {
//     console.error('Error adding booking:', error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };


// Controller function to add a booking
exports.addBooking = async (req, res) => {
  try {
    // Extract user_id from authenticated user (assuming it's stored in req.user)
    const { user_id } = req.user;
    const { traveler_name, traveler_age, traveler_gender, traveler_aadhar_number } = req.body;

    // Create the booking with associated user_id
    const booking = await Booking.create({ user_id, traveler_name, traveler_age, traveler_gender, traveler_aadhar_number });

    res.status(201).json({ booking });
  } catch (error) {
    console.error('Error adding booking:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

