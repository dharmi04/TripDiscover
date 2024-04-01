const Tour = require('../Models/Tour');
const Destination = require('../Models/Destination');
const Guide = require('../Models/Guide');

// Controller function to add a tour for a specific destination
exports.addTour = async (req, res) => {
  try {
    const { destination_id,tour_name, start_date, duration, price } = req.body;

    // Find the destination ID based on the provided name
    // const destination = await Destination.findOne({ where: { name: destination_id } });

    // if (!destination) {
    //   return res.status(404).json({ message: 'Destination not found' });
    // }

    // Create the tour
    const tour = await Tour.create({ destination_id, tour_name, start_date, duration, price });

    res.status(201).json({ tour });
  } catch (error) {
    console.error('Error adding tour:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Controller function to delete a tour
exports.deleteTour = async (req, res) => {
  try {
    const { tour_id } = req.params;

    // Delete the tour
    await Tour.destroy({ where: { tour_id } });

    res.status(204).send(); // No content to send back
  } catch (error) {
    console.error('Error deleting tour:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Controller function to view tours for a specific destination
exports.viewToursForDestination = async (req, res) => {
  try {
    const { destination_name } = req.params;

    // Find the destination ID based on the provided name
    const destination = await Destination.findOne({ where: { name: destination_name } });

    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    // Find all tours for the specific destination
    const tours = await Tour.findAll({ where: { destination_id: destination.id } });

    res.status(200).json({ tours });
  } catch (error) {
    console.error('Error fetching tours:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getAllToursWithNames = async (req, res) => {
  try {
    const tours = await Tour.findAll({
      include: [
        { model: Destination, attributes: ['name', 'description', 'location'] }
      ],
      attributes: ['tour_id', 'start_date', 'duration', 'price'] // Specify the attributes to include from the Tour model
    });

    res.status(200).json({ tours });
  } catch (error) {
    console.error('Error fetching tours:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};



  exports.getToursByDestinationId = async (req, res) => {
    try {
      const { destinationId } = req.params;
      const tours = await Tour.findAll({
        where: { destination_id: destinationId },
        include: [Destination] // Include the Destination model to get the destination data
      });
  
      // Map tours data to include destination name
      const toursWithDestinationName = tours.map(tour => ({
        tour_id: tour.tour_id,
        destination_id: tour.destination_id,
        tour_name: tour.tour_name,
        destination_name: tour.Destination.name, // Access destination name through the included Destination model
        start_date: tour.start_date,
        duration: tour.duration,
        price: tour.price
      }));
  
      res.status(200).json({ tours: toursWithDestinationName });
    } catch (error) {
      console.error('Error fetching tours:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  

  // Controller function to fetch details of a tour by tour ID
exports.getTourById = async (req, res) => {
  try {
    const { tour_id } = req.params;

    // Find the tour by its ID and include the destination information
    const tour = await Tour.findByPk(tour_id, {
      include: [Destination] // Include the Destination model to get the destination data
    });

    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }

    // Construct the response including tour details and destination information
    const tourDetails = {
      tour_id: tour.tour_id,
      destination_id: tour.destination_id,
      tour_name: tour.tour_name,
      destination_name: tour.Destination.name, // Access destination name through the included Destination model
      start_date: tour.start_date,
      duration: tour.duration,
      price: tour.price
      // Add more attributes as needed
    };

    res.status(200).json({ tour: tourDetails });
  } catch (error) {
    console.error('Error fetching tour details:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
