const http = require('http')
const express = require('express')

const app = express()

app.use(express.static('client'))


const PORT = 5000

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})