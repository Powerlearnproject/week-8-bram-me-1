const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Assumes "Bearer <token>" format

    if (!token) {
        return res.status(403).json({ message: 'Token is required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use secret from environment variable
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid Token' });
    }
};

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Assumes "Bearer <token>" format

    if (!token) {
        return res.status(403).json({ message: 'Token is required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use secret from environment variable
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid Token' });
    }
};

// Middleware to check user role (if applicable)
const checkRole = (role) => {
    return (req, res, next) => {
        // Fetch user role from your database or other sources
        const userRole = req.userRole; // Set userRole after authentication

        if (userRole !== role) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        next();
    };
};

module.exports = { verifyToken, isAuthenticated, checkRole };
