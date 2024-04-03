const express = require('express'); 
const router = express.Router();
const verifyToken = require('../Middleware/verifytokenmiddleware');

const {
    addTour,
    deleteTour,
    viewToursForDestination,
    getAllToursWithNames,
    getToursByDestinationId,
    getTourById,
    searchTours
} = require('../Controllers/TourController');

router.post('/add-tour', addTour);
router.delete('/delete-tour/:tour_id',  deleteTour);
router.get('/view-tours-for-destination/:destination_id', viewToursForDestination);
router.get('/all-tours', getAllToursWithNames);
router.get('/tours/:destinationId', getToursByDestinationId);
router.get('/tours/:tourId', getTourById)
router.get('/search-tours', searchTours);

module.exports = router; 



