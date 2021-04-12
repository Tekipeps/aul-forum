const { prisma } = require('../utils/config');
const { MATRIC_REGEX } = require('../utils/globals');
const bcrypt = require('bcrypt');
const faker = require('faker');
const RandExp = require('randexp');

const len = 5;
const posts = [];
const users = [];

const setupUsers = () => {
    for (i = 0; i < len; i++) {
        const user = {
            email: faker.internet.email(),
            username: faker.name.firstName(),
            matric: new RandExp(MATRIC_REGEX).gen(),
            gender: Math.random() > 0.5 ? 'MALE' : 'FEMALE',
            role: Math.random() > 0.3 ? 'USER' : 'ADMIN',
            posts: [],
            avatar: `/assets/images/noavatar${Math.round(Math.random() * 4)}.png`,
            passwordHash: bcrypt.hashSync('testpassword123', 12),
            comments: []
        };
        users.push(user);
    }
    const save = async () => {
        try {
            console.log('saving users...');
            const data = await prisma.$transaction(users.map((p) => prisma.user.create({ data: p })));
            setupPosts(data);
            console.log('saved users...');
        } catch (error) {
            console.log(error);
            prisma.$disconnect();
        }
    };
    save();
};
setupUsers();

const setupPosts = (u) => {
    for (i = 0; i < len; i++) {
        const post = {
            title: faker.random.word(),
            content: faker.lorem.words(100),
            authorId: u[i].id,
            comments: []
        };
        posts.push(post);
    }
    const save = async () => {
        try {
            console.log('saving posts...');
            await prisma.$transaction(posts.map((p) => prisma.post.create({ data: p })));
            console.log('saved posts...');
            prisma.$disconnect();
        } catch (error) {
            console.log(error);
            prisma.$disconnect();
        }
    };
    save();
};
