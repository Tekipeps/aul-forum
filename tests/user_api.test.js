const { prisma } = require('../utils/config')
const faker = require("faker")
const bcrypt = require("bcrypt")
const supertest = require('supertest')
const app = require("../app")

const api = supertest(app)
const initialUsers = new Array(2).fill().map((u) => {
    return {
        email: faker.internet.email(),
        username: faker.name.firstName(),
        matric: faker.name.title(),
        gender: (Math.random() > 0.5 ? 'MALE' : 'FEMALE'),
        role: (Math.random() > 0.4 ? 'USER' : 'ADMIN'),
        passwordHash: bcrypt.hashSync("tekena123", 12),
        posts: [],
    }
})
beforeEach(async () => {
    await prisma.post.deleteMany()
    await prisma.user.deleteMany();
    await prisma.$transaction(initialUsers.map(u => prisma.user.create({ data: u })))
})
test('users are returned as json', async () => {
    await api.get("/api/users").expect(200)
        .expect('Content-Type', /application\/json/)
})

test('all users are returned', async () => {
    const response = await api.get('/api/users')
    expect(response.body).toHaveLength(initialUsers.length)
})

test('a valid user can be added', async () => {
    const newUser = {
        email: faker.internet.email(),
        username: faker.name.firstName(),
        matric: faker.name.title(),
        gender: (Math.random() > 0.5 ? 'MALE' : 'FEMALE'),
        role: (Math.random() > 0.4 ? 'USER' : 'ADMIN'),
        password: 'tekena123',
        confirmPass: 'tekena123',
    }
    await api
        .post('/api/users')
        .send(newUser)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/users')

    const emails = response.body.map(r => r.email)

    expect(response.body).toHaveLength(initialUsers.length + 1)
    expect(emails).toContain(
        newUser.email
    )
})

/**
 * TODO: 
 *      a single user can be returned: GET /api/users/:id
 *      a user can be deleted by admin: DELETE /api/users/:id
 *      a user can update his profile and no one else except admin: PUT /api/users/:id
 */

afterAll((done) => {
    prisma.$disconnect()
    done()
})