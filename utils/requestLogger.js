const { ENV } = require("./config")
const requestLogger = (request, _, next) => {
    if (ENV !== "test") {
        console.log('Method:', request.method);
        console.log('Path:  ', request.url);
        console.log('Body:  ', request.body);
        console.log('---');
    }
    next();
}
module.exports = requestLogger