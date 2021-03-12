const { prisma } = require('../utils/config')
const bcrypt = require("bcrypt")
const { role } = require('../utils/globals')

const initialUsers = [
    {
        email: "testuser1@gmail.com",
        username: "testuser1",
        matric: "AUL/SCI/19/00417",
        gender: "MALE",
        role: role.USER,
        passwordHash: bcrypt.hashSync("testpassword123", 12),
        posts: [],
    },
    {
        email: "testuser2@gmail.com",
        username: "testuser2",
        matric: "AUL/HMU/17/00497",
        gender: "FEMALE",
        role: role.USER,
        passwordHash: bcrypt.hashSync("testpassword123", 12),
        posts: [],
    }
]

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