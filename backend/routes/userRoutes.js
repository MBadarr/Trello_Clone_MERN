const express = require('express');
const { registerUser, loginUser, currentUser, logoutUser } = require('../controllers/authController');
const verifyToken = require('../middleware/verifyToken');


const router = express.Router();

router.post('/signup', registerUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.get('/user', verifyToken, currentUser);


module.exports = router;







