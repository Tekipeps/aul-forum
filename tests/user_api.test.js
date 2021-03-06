const { prisma } = require('../utils/config')
const supertest = require('supertest')
const app = require("../app")

const api = supertest(app)

test('users are returned as json', async () => {
    await api
        .get('/api/users')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

afterAll(() => {
    prisma.$disconnect()
})