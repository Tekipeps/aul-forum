const { prisma } = require('../utils/config')

// TODO: Finish CRUD functions for User model

class User {
    async getUser(req, res) {
        const { id } = req.params
        const user = await prisma.user.findUnique({ where: { id } })

        res.json(user)
    }
    async getUsers(req, res) {
        const users = await prisma.user.findMany()
        res.json(users)
    }
    async createUser(req, res) {

    }
    async updateUser(req, res) {

    }
    async deleteUser(req, res) {

    }
}

module.exports = User