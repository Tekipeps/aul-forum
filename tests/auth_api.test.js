const { prisma } = require('../utils/config');
const helper = require('./test_helper');
const { role } = require('../utils/globals');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

beforeEach(async () => {
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();
    await prisma.$transaction(helper.initialUsers.map((user) => prisma.user.create({ data: user })));
});

describe('authentication by a valid user', () => {
    test('can login', async () => {
        const user = helper.initialUsers[1];
        const response = await api
            .post('/api/auth/login')
            .send({
                username: user.username,
                password: 'testpassword123'
            })
            .expect(200)
            .expect('Content-Type', /application\/json/);
        expect(response.body).toEqual({
            user: expect.any(Object),
            token: expect.any(String)
        });
    });

    test('can register', async () => {
        const newUser = {
            email: 'testuser909@gmail.com',
            username: 'test909',
            matric: 'AUL/SMS/19/00909',
            gender: 'FEMALE',
            role: role.USER,
            password: 'testpassword123',
            confirmPass: 'testpassword123'
        };

        const response = await api
            .post('/api/auth/register')
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/);
        expect(response.body).toEqual({
            user: expect.any(Object),
            token: expect.any(String)
        });
    });
});

afterAll((done) => {
    prisma.$disconnect();
    done();
});
