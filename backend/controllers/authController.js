const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/authModel');

const registerUser = asyncHandler(async (req, res) => {
    try {
        const { name, email, password, confirm_password } = req.body;

        if (!name || !email || !password || !confirm_password) {
            res.status(400).json({ message: 'Please enter all fields' });
        }

        const isEmailRegistered = await User.findOne({ email });
        if (isEmailRegistered) {
            res.status(400).json({ message: 'This email is already registered' });
        }

        if (password !== confirm_password) {
            res.status(400).json({ message: 'Password and confirm password must match' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            confirm_password: hashedPassword
        });

        res.status(201).json({ _id: user.id, name: user.name, email: user.email });

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


const loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: 'Please enter email and password' });
        }

        const user = await User.findOne({ email });

        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        },
            process.env.ACCESS_TOKEN,
            {
                expiresIn: '10m'
            });

        res.status(200).json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

const logoutUser = asyncHandler(async (req, res) => {
    try {
        // Get the JWT token from the request headers
        const token = req.headers.authorization;
        console.log("token", token);
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        res.status(200).json({ message: 'Logout successful' });

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

const currentUser = async (req, res) => {

    try {
        res.json(req.user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { registerUser, loginUser, logoutUser, currentUser };