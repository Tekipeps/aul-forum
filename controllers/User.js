const { prisma } = require('../utils/config')
const bcrypt = require('bcrypt')

const pubUserData = {
    id: true,
    username: true,
    email: true,
    matric: true,
    gender: true,
    role: true,
    posts: true
}

class User {
    async getUser(req, res, next) {
        try {
            const { id } = req.params
            const user = await prisma.user.findUnique({ where: { id }, select: pubUserData })

            return res.json(user)
        } catch (error) {
            next(error)
        }
    }
    async getUsers(_, res, next) {
        try {
            const users = await prisma.user.findMany({ select: pubUserData })
            res.json(users)
        } catch (error) {
            next(error)
        }
    }
    async createUser(req, res, next) {
        try {
            const { username, email, matric, gender, role, password, confirmPass } = req.body
            if (!username || !email || !matric || !gender || !role) {
                return res.status(400).json({ err: "username, email, matric, password, gender, role, is required" })
            }
            if (String(password).length < 8) {
                return res.status(400).json({ err: "password too short, 8 or more characters" })
            }
            if (password !== confirmPass) {
                return res.status(400).json({ err: "passwords not the same" })
            }

            const passwordHash = await bcrypt.hash(password, 12)
            const user = { username, email, matric, gender, role, passwordHash }
            const savedUser = await prisma.user.create({ data: user, select: pubUserData })
            res.json(savedUser)
        } catch (error) {
            next(error)
        }
    }
    async updateUser(req, res, next) {
        try {

            const { id } = req.params
            const data = req.body

            const user = await prisma.user.findUnique({ where: { id }, select: pubUserData })
            if (!user) {
                return res.status(401).json({ err: "User not available" })
            }
            const updatedUser = await prisma.user.update({ where: { id: user.id }, data })
            res.json({ updatedUser })
        } catch (error) {
            next(error)
        }
    }
    async deleteUser(req, res, next) {
        try {
            const { id } = req.params
            await prisma.user.delete({ where: { id } })
            res.status(204).end()
        } catch (error) {
            next(error)
        }
    }
}

module.exports = User