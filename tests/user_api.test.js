const { prisma } = require('../utils/config');
const helper = require('./test_helper');
const { role } = require('../utils/globals')
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);


beforeEach(async () => {
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();
    await prisma.$transaction(helper.initialUsers.map((user) => prisma.user.create({ data: user })));
});

describe('when there is initially some users saved', () => {
    test('users are returned as json', async () => {
        await api
            .get('/api/users')
            .expect(200)
            .expect('Content-Type', /application\/json/);
    });

    test('all users are returned', async () => {
        const response = await api.get('/api/users');
        expect(response.body).toHaveLength(helper.initialUsers.length);
    });
    test('a specific user is within the returned users', async () => {
        const response = await api.get('/api/users');
        const usernames = response.body.map((u) => u.username);
        expect(usernames).toContain(helper.initialUsers[1].username);
    });
});

describe('while authenticated as admin', () => {
    let token = ''
    beforeEach(async () => {
        const admin = await helper.createAdmin()
        const response = await api.post('/api/auth/login').send({
            username: admin.username,
            password: admin.password
        }).expect(200)
        token = response.body.token
    })
    test('a valid user can be added', async () => {
        const newUser = {
            email: 'test1user@gmail.com',
            username: 'test1user',
            matric: 'AUL/SMS/19/00418',
            gender: 'FEMALE',
            role: role.USER,
            password: 'tekena123',
            confirmPass: 'tekena123',
        }
        await api
            .post('/api/users')
            .set('Authorization', `Bearer ${token}`)
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const response = await api.get('/api/users')

        const emails = response.body.map(r => r.email)

        expect(response.body).toHaveLength(helper.initialUsers.length + 1)
        expect(emails).toContain(
            newUser.email
        )
    })
})

/**
 * TODO:
 *      a single user can be returned: GET /api/users/:id
 *      a user can be deleted by admin: DELETE /api/users/:id
 *      a user can update his profile and no one else except admin: PUT /api/users/:id
 */

afterAll((done) => {
    prisma.$disconnect();
    done();
});
