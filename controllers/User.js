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
    avatar: true
};

class User {
    async getAdmin(req, res, next) {
        try {
            const { id } = req.params;
            const admin = await prisma.user.findUnique({
                where: { id },
                select: pubUserData
            });
            if (admin.role !== role.ADMIN)
                return res.status(400).json({
                    err: `user ${admin.username} is not an ADMIN`
                });
            return res.json(admin);
        } catch (error) {
            next(error);
        }
    }
    async getAdmins(_, res, next) {
        try {
            const admins = await prisma.user.findMany({
                select: pubUserData,
                where: { role: role.ADMIN }
            });
            res.json(admins);
        } catch (error) {
            next(error);
        }
    }
    async getAllUsers(_, res, next) {
        try {
            const users = await prisma.user.findMany({
                select: pubUserData
            });
            res.json(users);
        } catch (error) {
            next(error);
        }
    }
    async getUser(req, res, next) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({
                where: { id },
                select: pubUserData
            });
            if (!user) return res.status(404).json({ err: 'user not found' });
            if (user.role !== role.USER)
                return res.status(400).json({
                    err: `user ${user.username} is an ADMIN`
                });
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }
    async getUsers(_, res, next) {
        try {
            const users = await prisma.user.findMany({
                select: pubUserData,
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
            const user = {
                username,
                email,
                matric,
                gender,
                role,
                passwordHash,
                avatar: `/assets/images/noavatar${Math.round(Math.random() * 4)}.png`
            };
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
            if (!user) return res.status(400).json({ err: 'user not available' });
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
            if (!user) return res.status(400).json({ err: 'cannot delete, user not in database' });
            if (user.id === authenticatedUser.id || authenticatedUser.role === role.ADMIN) {
                await prisma.post.deleteMany({ where: { authorId: id } });
                await prisma.user.delete({ where: { id } });
                return res.status(204).end();
            }
            return res.status(401).json({ err: 'unauthorized' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = User;
