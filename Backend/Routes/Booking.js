const express = require('express'); 
const router = express.Router();
const verifyToken = require('../Middleware/verifytokenmiddleware');

const {
    addBooking
} = require('../Controllers/BookingController');
const { verify } = require('crypto');
const authenticateUser = require('../Middleware/authenticateUser');

router.post('/add-booking', authenticateUser, addBooking);
// router.get('/users', getAllUsers);
// router.put('/update-user/:id', updateUser);
// router.delete('/delete-user/:id', deleteUser);
// router.get('/search-user', searchUser);

module.exports = router; 



