const authRoute = require('express').Router();
const Auth = require('../controllers/Auth');
const validation = require('../middlewares/validation');

const auth = new Auth();
authRoute.post('/login', validation.login, auth.login);
authRoute.post('/register', validation.register, auth.register);

module.exports = authRoute;
