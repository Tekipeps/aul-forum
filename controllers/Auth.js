const { prisma, JWT_SECRET } = require('../utils/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class Auth {
    async login(req, res, next) {
        try {
            const { username, password } = req.body;
            if (!username || !password) return res.status(400).json({ err: 'username and password required' });
            const user = await prisma.user.findUnique({ where: { username } });
            if (!user) return res.status(400).json('user not available, please register');
            const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);
            if (!isCorrectPassword) return res.status(401).json({ err: 'incorrect username or password' });
            const pubUser = { username: user.username, email: user.email, role: user.role, id: user.id };
            const token = jwt.sign(pubUser, JWT_SECRET);
            res.json({ user: pubUser, token });
        } catch (error) {
            next(error);
        }
    }
    async register(req, res, next) {
        try {
            const { username, email, matric, gender, password, confirmPass } = req.body;
            if (!username || !email || !matric || !gender) {
                return res.status(400).json({ err: 'username, email, matric, password, gender, is required' });
            }
            if (String(password).length < 8) {
                return res.status(400).json({ err: 'password too short, 8 or more characters' });
            }
            if (password !== confirmPass) {
                return res.status(400).json({ err: 'passwords not the same' });
            }

            const passwordHash = await bcrypt.hash(password, 12);
            const user = { username, email, matric, gender, role: 'USER', passwordHash };
            const savedUser = await prisma.user.create({ data: user });
            const pubUser = {
                username: savedUser.username,
                email: savedUser.email,
                role: savedUser.role,
                id: savedUser.id
            };
            const token = jwt.sign(pubUser, JWT_SECRET);
            res.json({ user: pubUser, token });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Auth;
