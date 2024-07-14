const Destination = require('../Models/Destination');
const { Op } = require('sequelize');
const multer = require('multer');
const path = require('path');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Update addDestination function to use multer
exports.addDestination = [
  upload.single('image'),
  async (req, res) => {
    try {
      console.log('Request body:', req.body);
      console.log('File:', req.file);

      const { name, description, location, rating } = req.body;
      const imagePath = req.file ? req.file.path : null;

      // Create the destination
      const destination = await Destination.create({ name, description, location, rating, imagePath });

      res.status(201).json({ destination });
    } catch (error) {
      console.error('Error adding destination:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
];


exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.findAll();
    res.status(200).json({ destinations });
  } catch (error) {
    console.error('Error fetching destinations:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.getDestinationByid = async(req, res) =>{
  try{
    const {id} = req.params;
    const destination = await Destination.findOne({where: {id}});
    res.status(200).json({destination});
  }
  catch(error){
    console.error('Error fetching destination:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}


exports.searchDestinations = async (req, res) => {
  const { query } = req.query;
  try {
    const destinations = await Destination.findAll({
      where: {
        name: {
          [Op.like]: `%${query}%` // Search for destinations containing the query
        }
      }
    });
    res.json({ destinations });
  } catch (error) {
    console.error('Error searching destinations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

