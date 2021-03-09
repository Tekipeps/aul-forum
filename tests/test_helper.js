const { MATRIC_REGEX, prisma } = require('../utils/config')
const faker = require("faker")
const bcrypt = require("bcrypt")
const RandExp = require('randexp')

const initialUsers = new Array(2).fill(null).map(() => {
    return {
        email: faker.internet.email(),
        username: faker.name.firstName(),
        matric: new RandExp(MATRIC_REGEX).gen(),
        gender: (Math.random() > 0.5 ? 'MALE' : 'FEMALE'),
        role: (Math.random() > 0.4 ? 'USER' : 'ADMIN'),
        passwordHash: bcrypt.hashSync("testpassword123", 12),
        posts: [],
    }
})


const usersInDb = async () => {
    const users = await prisma.user.findMany()
    return users.map((u) => u.toJSON())
}

module.exports = {
    initialUsers,
    usersInDb
}