const dotenv = require('dotenv')
const  { PrismaClient } = require('@prisma/client');


const ENV = process.env.NODE_ENV;

if (ENV != "production") dotenv.config();
let DB_URI = process.env.DEV_DB_URL;
const PORT = Number(process.env.PORT) || 5000;

if (ENV === "production") {
    DB_URI = process.env.PROD_DB_URL;
} else if (ENV === "test") {
    DB_URI = process.env.TEST_DB_URL;
}

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: DB_URI,
        },
    },
})

module.exports = { PORT, DB_URI, ENV, prisma };