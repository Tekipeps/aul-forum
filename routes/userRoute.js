const userRoute = require('express').Router()
const User = require("../controllers/User")
const { authAsAdmin, authUser } = require('../utils/middlewares')

const user = new User()
userRoute.get("/", user.getUsers)
userRoute.get('/:id', user.getUser)
userRoute.post("/", authAsAdmin, user.createUser)
userRoute.put('/:id', authUser, user.updateUser)
userRoute.delete("/:id", authUser, user.deleteUser)

module.exports = userRoute