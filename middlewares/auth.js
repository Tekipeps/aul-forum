const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const authAsAdmin = (req, res, next) => {
    try {
        const authHeader = String(req.get('Authorization'));
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401);

        const payload = jwt.verify(token, JWT_SECRET);
        if (payload.role !== 'ADMIN') return res.status(401).json({ errr: 'route only accesible by admins' });
        req.user = payload;
        next();
    } catch (error) {
        next(error);
    }
};
const authUser = (req, res, next) => {
    try {
        const authHeader = String(req.get('Authorization'));
        const token = authHeader && authHeader.split(' ')[1];

        if (token == null) return res.sendStatus(401);
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    authAsAdmin,
    authUser,
};
