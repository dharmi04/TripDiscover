const express = require('express'); 
const router = express.Router();
const verifyToken = require('../Middleware/verifytokenmiddleware');

const {
    addTour,
    deleteTour,
    viewToursForDestination,
    getAllToursWithNames,
    getToursByDestinationId,
    getTourById
} = require('../Controllers/TourController');

router.post('/add-tour', addTour);
router.delete('/delete-tour/:tour_id', deleteTour);
router.get('/view-tours-for-destination/:destination_id', viewToursForDestination);
router.get('/all-tours', getAllToursWithNames);
router.get('/tours/:destinationId', getToursByDestinationId);
router.get('/tours/:tourId',getTourById)
// router.get('/users', getAllUsers);
// router.put('/update-user/:id', updateUser);
// router.delete('/delete-user/:id', deleteUser);
// router.get('/search-user', searchUser);

module.exports = router; 



