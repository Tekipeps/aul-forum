const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');

const ENV = process.env.NODE_ENV;
if (ENV === 'development') dotenv.config({ path: '../.env' });
if (ENV === 'test') dotenv.config({ path: '../.env.test.local' });

const DB_URI = process.env.DB_URL;
const PORT = Number(process.env.PORT) || 5000;

const JWT_SECRET = String(process.env.JWT_SECRET);

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: DB_URI
        }
    }
});

module.exports = { PORT, DB_URI, ENV, prisma, JWT_SECRET };
