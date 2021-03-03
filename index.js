const http = require("http");
const { PORT } = require('./utils/config')

const app = require("./app")

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
});