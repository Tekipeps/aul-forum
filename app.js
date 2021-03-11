const express = require("express");
const path = require('path')
const requestLogger = require("./utils/requestLogger");
const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute')
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use(express.json())
app.use(requestLogger)
app.use(express.static("client/build"));

app.get("/api", (_, res) => {
    res.send(`<code>Welcome to AUL forum API<code>`)
})

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use(errorHandler)

app.use("*", (_, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

module.exports = app