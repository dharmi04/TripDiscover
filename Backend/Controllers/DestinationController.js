const Destination = require('../Models/Destination');
const { Op } = require('sequelize');
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



exports.getAllDestinations = async (req, res) => {
  try {
    // Retrieve all destinations with only name, description, and location attributes
    const destinations = await Destination.findAll({
      attributes: ['id','name', 'description', 'location', 'rating']
    });

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

