const Destination = require('../Models/Destination');

exports.addDestination = async (req, res) => {
  try {
    const { name, description, location, rating } = req.body;

    // Create the destination
    const destination = await Destination.create({ name, description, location, rating });

    res.status(201).json({ destination });
  } catch (error) {
    console.error('Error adding destination:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

