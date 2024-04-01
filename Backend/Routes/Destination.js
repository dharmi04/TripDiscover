const express = require('express'); 
const router = express.Router();
const verifyToken = require('../Middleware/verifytokenmiddleware');

const {
    addDestination,
    getAllDestinations,
    getDestinationByid
} = require('../Controllers/DestinationController');

router.post('/add-destination',verifyToken, addDestination);
router.get('/all-destinations', getAllDestinations);
router.get('/destination/:id', getDestinationByid);


module.exports = router; 



