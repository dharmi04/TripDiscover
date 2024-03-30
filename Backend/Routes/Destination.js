const express = require('express'); 
const router = express.Router();

const {
    addDestination,
    getAllDestinations
} = require('../Controllers/DestinationController');

router.post('/add-destination', addDestination);
router.get('/all-destinations', getAllDestinations);


module.exports = router; 



