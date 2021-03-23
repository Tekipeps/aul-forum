const authRoute = require('express').Router();
const Auth = require('../controllers/Auth');
const { authUser } = require('../middlewares/auth');
const validation = require('../middlewares/validation');

const auth = new Auth();
authRoute.post('/login', validation.login, auth.login);
authRoute.post('/register', validation.register, auth.register);
authRoute.get('/isValidToken', authUser, auth.isValidToken);

module.exports = authRoute;
