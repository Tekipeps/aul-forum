const userRoute = require('express').Router();
const User = require('../controllers/User');
const { authAsAdmin, authUser } = require('../middlewares/auth');
const validation = require('../middlewares/validation');

const user = new User();
userRoute.get('/admins', user.getAdmins);
userRoute.get('/admins/:id', user.getAdmin);
userRoute.get('/all', user.getAllUsers);
userRoute.get('/', user.getUsers);
userRoute.get('/:id', user.getUser);
userRoute.post('/', authAsAdmin, validation.createUser, user.createUser);
userRoute.put('/:id', authUser, user.updateUser); // add validation for update user req.body
userRoute.delete('/:id', authUser, user.deleteUser);

module.exports = userRoute;
