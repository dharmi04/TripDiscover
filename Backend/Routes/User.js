const express = require('express'); 
const router = express.Router();
const verifyToken = require('../Middleware/verifytokenmiddleware');

const {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
    loginUser
} = require('../Controllers/UserController');

router.post('/add-user', createUser);
router.get('/users', getAllUsers);
router.put('/update-user/:id', updateUser);
router.delete('/delete-user/:id', deleteUser);
router.post('/login-user',verifyToken, loginUser);
// router.get('/search-user', searchUser);

module.exports = router; 


// router.get('/users', UserController.getAllUsers);
// router.post('/users', UserController.createUser);
// router.put('/users/:id', UserController.updateUser);
// router.delete('/users/:id', UserController.deleteUser);

// // Route for searching users
// router.get('/users/search', UserController.searchUser);