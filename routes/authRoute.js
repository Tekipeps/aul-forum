const authRoute = require('express').Router()
const Auth = require("../controllers/Auth")

const auth = new Auth()
authRoute.post("/login", auth.login)
authRoute.post("/register", auth.register)

module.exports = authRoute