const userRoute = require('express').Router()
const User = require("../controllers/User")

const user = new User()
userRoute.get("/", user.getUsers)
userRoute.get('/:id', user.getUser)
userRoute.post("/", user.createUser)
userRoute.put('/:id', user.updateUser)
userRoute.delete("/:id", user.deleteUser)

module.exports = userRoute