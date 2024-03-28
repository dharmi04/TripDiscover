const Guide = require('../Models/Guide');

exports.addGuide = async (req, res) => {
  try {
    const { name, email, contact_info } = req.body;

    // Create the guide
    const guide = await Guide.create({ name, email, contact_info});

    res.status(201).json({ guide });
  } catch (error) {
    console.error('Error adding guide:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
