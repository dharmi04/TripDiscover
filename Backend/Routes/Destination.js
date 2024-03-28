const express = require('express'); 
const router = express.Router();

const {
    addDestination
} = require('../Controllers/DestinationController');

router.post('/add-destination', addDestination);
// router.get('/users', getAllUsers);
// router.put('/update-user/:id', updateUser);
// router.delete('/delete-user/:id', deleteUser);
// router.get('/search-user', searchUser);

module.exports = router; 



