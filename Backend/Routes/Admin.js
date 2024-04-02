const express = require('express'); 
const router = express.Router();

const {
    login,
    signup
} = require('../Controllers/AdminController');

router.post('/admin/signup', signup);
router.get('/admin/login', login);

module.exports = router;