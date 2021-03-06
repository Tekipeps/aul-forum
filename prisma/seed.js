const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcrypt")
const faker = require('faker')

const prisma = new PrismaClient()

const len = 5
const posts = []
const users = []

const setupUsers = () => {
    for (i = 0; i < len; i++) {
        const user = {
            email: faker.internet.email(),
            username: faker.name.firstName(),
            matric: faker.name.title(),
            gender: (Math.random() > 0.5 ? 'MALE' : 'FEMALE'),
            role: (Math.random() > 0.3 ? 'USER' : 'ADMIN'),
            posts: [],
            passwordHash: bcrypt.hashSync("tekena123", 12)
        }
        users.push(user)
    }
    const save = async () => {
        try {
            console.log("saving users...")
            const promises = users.map((p) => prisma.user.create({ data: p }));
            const data = await Promise.all(promises);
            setupPosts(data)
            console.log("saved users...");
            prisma.$disconnect();
        } catch (error) {
            console.log(error);
            prisma.$disconnect();
        }
    }
    save()
}
setupUsers();


const setupPosts = (u) => {
    for (i = 0; i < len; i++) {
        const post = {
            title: faker.random.word(),
            content: faker.lorem.words(100),
            authorId: u[i].id
        }
        posts.push(post)
    }
    const save = async () => {
        try {
            console.log("saving posts")
            const promises = posts.map((p) => prisma.post.create({ data: p }));
            await Promise.all(promises);
            console.log("saved posts");
            prisma.$disconnect();
        } catch (error) {
            console.log(error);
            prisma.$disconnect();
        }
    }
    save()
}
