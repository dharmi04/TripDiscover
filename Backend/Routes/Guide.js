const express = require('express'); 
const router = express.Router();

const {
    addGuide
} = require('../Controllers/GuideController');

router.post('/add-guide', addGuide);
// router.get('/users', getAllUsers);
// router.put('/update-user/:id', updateUser);
// router.delete('/delete-user/:id', deleteUser);
// router.get('/search-user', searchUser);

module.exports = router; 



