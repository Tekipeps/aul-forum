const { prisma } = require('../utils/config')
const faker = require("faker")
const bcrypt = require("bcrypt")
const RandExp = require('randexp')
const { MATRIC_REGEX, role } = require('../utils/globals')

const initialUsers = new Array(2).fill(null).map(() => {
    return {
        email: faker.internet.email(),
        username: faker.name.firstName(),
        matric: new RandExp(MATRIC_REGEX).gen(),
        gender: (Math.random() > 0.5 ? 'MALE' : 'FEMALE'),
        role: role.USER,
        passwordHash: bcrypt.hashSync("testpassword123", 12),
        posts: [],
    }
})

const usersInDb = async () => {
    const users = await prisma.user.findMany({ where: { role: role.USER } })
    return users.map((u) => u.toJSON())
}
const adminsInDb = async () => {
    const admins = await prisma.user.findMany({ where: { role: role.ADMIN } })
    return admins.map((u) => u.toJSON())
}
const allUsersInDb = async () => {
    const users = await prisma.user.findMany()
    return users.map((u) => u.toJSON())
}
const createAdmin = async () => {
    const admin = await prisma.user.create({
        data: {
            username: 'admin',
            passwordHash: bcrypt.hashSync('testpassword123', 12),
            email: "admin@admin.com",
            gender: 'FEMALE',
            role: 'ADMIN'
        }
    })
    return { ...admin, password: 'testpassword123' }
}
module.exports = {
    initialUsers,
    usersInDb,
    adminsInDb,
    allUsersInDb,
    createAdmin
}