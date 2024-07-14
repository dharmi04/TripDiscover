const Booking = require('../Models/Booking');



exports.addBooking = async (req, res) => {
  try {
    const { user_id } = req.user.user_id; // Assuming user_id is available from authentication middleware
    const { tour_id, traveler_name, traveler_age, traveler_gender, traveler_aadhar_number } = req.body;

    if (!tour_id || !traveler_name || !traveler_age|| traveler_aadhar_number ) {
      return res.status(400).json({ error: 'Tour ID, traveler name, and traveler age are required' });
    }

     // Check if tour exists
     const tour = await Tour.findByPk(tour_id);
     if (!tour) {
       return res.status(404).json({ error: 'Tour not found' });
     }

    const booking = await Booking.create({
      user_id,
      tour_id,
      traveler_name,
      traveler_age,
      traveler_gender,
      traveler_aadhar_number
    });

     res.status(201).json({ message: 'Booking successful', booking });

  } catch (error) {
    console.error('Error booking tour:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};