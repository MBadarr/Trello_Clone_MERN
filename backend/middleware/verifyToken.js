const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken');

const verifyToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHandler = req.headers.Authorization || req.headers.authorization;
    if (authHandler && authHandler.startsWith('Bearer')) {
        token = authHandler.split(" ")[1];

        if (token) {
            try {
                const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
                req.user = decoded.user;
                next();
            } catch (error) {
                res.status(401).json({ message: 'User is not Authorized' });
            }
            next()
        }
    }
});

module.exports = verifyToken;