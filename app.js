const express = require("express");
const requestLogger = require("./utils/requestLogger");
const userRoute = require('./routes/userRoute');
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use(requestLogger)
app.use(express.static("client"));

app.get("/api", (_, res) => {
    res.json({
        msg: "Welcome to AUL forum API"
    })
})

app.use("/api/users", userRoute)

app.use(errorHandler)

module.exports = app