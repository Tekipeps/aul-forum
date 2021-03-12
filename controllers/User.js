const { prisma } = require('../utils/config');
const bcrypt = require('bcrypt');
const { role } = require('../utils/globals');

const pubUserData = {
    id: true,
    username: true,
    email: true,
    matric: true,
    gender: true,
    role: true,
    posts: true
};

class User {
    async getUser(req, res, next) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({
                where: { id, role: role.USER },
                select: { ...pubUserData, posts: false }
            });

            return res.json(user);
        } catch (error) {
            next(error);
        }
    }
    async getUsers(_, res, next) {
        try {
            const users = await prisma.user.findMany({
                select: { ...pubUserData, posts: false },
                where: { role: role.USER }
            });
            res.json(users);
        } catch (error) {
            next(error);
        }
    }
    async createUser(req, res, next) {
        try {
            const { username, email, matric, gender, role, password } = req.body;

            const passwordHash = await bcrypt.hash(password, 12);
            const user = { username, email, matric, gender, role, passwordHash };
            const savedUser = await prisma.user.create({ data: user, select: pubUserData });
            res.json(savedUser);
        } catch (error) {
            next(error);
        }
    }
    async updateUser(req, res, next) {
        try {
            const { id } = req.params;
            const authenticatedUser = req.user;
            const data = req.body;

            const user = await prisma.user.findUnique({
                where: { id },
                select: pubUserData
            });
            if (!user) return res.status(400).json({ err: 'User not available' });
            if (user.id != authenticatedUser.id || authenticatedUser.role != 'ADMIN') return res.sendStatus(401);

            const updatedUser = await prisma.user.update({ where: { id }, data });
            res.json({ updatedUser });
        } catch (error) {
            next(error);
        }
    }
    async deleteUser(req, res, next) {
        try {
            const { id } = req.params;
            const authenticatedUser = req.user;

            const user = await prisma.user.findUnique({ where: { id }, select: { id: true } });
            if (!user) return res.status(400).json({ err: 'Cannot delete, user not in database' });
            if (user.id === authenticatedUser.id || authenticatedUser.role === role.ADMIN) {
                await prisma.post.deleteMany({ where: { authorId: id } });
                await prisma.user.delete({ where: { id } });
                return res.status(204).end();
            }
            return res.status(401).json({ err: 'Unauthorized' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = User;
