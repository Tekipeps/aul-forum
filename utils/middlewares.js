const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('./config')

const authAsAdmin = (req, res, next) => {
    try {
        const authHeader = req.headers['Authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.sendStatus(401);

        const payload = jwt.verify(token, JWT_SECRET)
        if (payload.role !== "ADMIN") return res.sendStatus(401)
        req.user = payload
    } catch (error) {
        next(error)
    }
}
const authUser = (req, res, next) => {
    try {
        const authHeader = req.headers['Authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.sendStatus(401);

        const payload = jwt.verify(token, JWT_SECRET)
        req.user = payload
    } catch (error) {
        next(error)
    }
}


module.exports = {
    authAsAdmin,
    authUser,
}