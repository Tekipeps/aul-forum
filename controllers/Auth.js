const { prisma, JWT_SECRET } = require('../utils/config');
const { role } = require('../utils/globals');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class Auth {
    async isValidToken(req, res, next) {
        try {
            const user = await prisma.user.findUnique({
                where: { id: req.user.id },
                select: {
                    username: true,
                    avatar: true,
                    email: true,
                    role: true,
                    id: true
                }
            });
            if (!user) {
                return res.status(401).json({ err: 'User not available' });
            }
            res.json({ user });
        } catch (error) {
            next(error);
        }
    }
    async login(req, res, next) {
        try {
            const { username, password } = req.body;
            const user = await prisma.user.findUnique({
                where: { username },
                select: {
                    username: true,
                    avatar: true,
                    email: true,
                    role: true,
                    id: true,
                    passwordHash: true
                }
            });
            if (!user)
                return res.status(400).json({
                    err: 'User not available, please register'
                });
            const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);
            if (!isCorrectPassword)
                return res.status(401).json({
                    err: 'Incorrect username or password'
                });
            delete user.passwordHash;
            const token = jwt.sign(user, JWT_SECRET);
            res.json({ user, token });
        } catch (error) {
            next(error);
        }
    }
    async register(req, res, next) {
        try {
            const { username, password, email, matric, gender } = req.body;

            const passwordHash = await bcrypt.hash(password, 12);
            const savedUser = await prisma.user.create({
                data: {
                    username,
                    email,
                    matric,
                    gender,
                    role: role.USER,
                    passwordHash,
                    avatar: `/assets/images/noavatar${Math.round(Math.random() * 4)}.png`
                },
                select: {
                    username: true,
                    avatar: true,
                    email: true,
                    role: true,
                    id: true
                }
            });
            const token = jwt.sign(savedUser, JWT_SECRET);

            res.json({
                user: savedUser,
                token
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Auth;
