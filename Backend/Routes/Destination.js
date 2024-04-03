const express = require('express'); 
const router = express.Router();
const verifyToken = require('../Middleware/verifytokenmiddleware');

const {
    addDestination,
    getAllDestinations,
    getDestinationByid,
    searchDestinations
} = require('../Controllers/DestinationController');

router.post('/add-destination',addDestination);
router.get('/all-destinations', getAllDestinations);
router.get('/destination/:id', getDestinationByid);
router.get('/search-destinations', searchDestinations);


module.exports = router; 



