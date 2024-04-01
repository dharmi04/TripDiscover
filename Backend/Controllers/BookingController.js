const Booking = require('../Models/Booking');

// Controller function to add a booking
exports.addBooking = async (req, res) => {
  try {
    const {  traveler_name, traveler_age, traveler_gender, traveler_aadhar_number } = req.body;

    // Create the booking
    const booking = await Booking.create({ tour_id, user_id, traveler_name, traveler_age, traveler_gender, traveler_aadhar_number });

    res.status(201).json({ booking });
  } catch (error) {
    console.error('Error adding booking:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
