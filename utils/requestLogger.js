
const requestLogger = (request, _, next) => {
    console.log('Method:', request.method);
    console.log('Path:  ', request.url);
    console.log('Body:  ', request.body);
    console.log('---');
    next();
}
module.exports = requestLogger