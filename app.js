const express = require("express");
const requestLogger = require("./utils/requestLogger");
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute')
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use(express.json())
app.use(requestLogger)
app.use(express.static("client"));

app.get("/api", (_, res) => {
    res.json({
        msg: "Welcome to AUL forum API"
    })
})

app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use(errorHandler)

module.exports = app