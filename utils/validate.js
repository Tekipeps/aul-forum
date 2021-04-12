const yup = require('yup');
const { reqDataPath } = require('./globals');

module.exports = ({ shape, path = reqDataPath.BODY }) => async (req, _, next) => {
    const schema = yup.object().shape(shape);
    console.log('passing here');
    try {
        const validData = await schema.validate(req[path]);
        console.log(validData);
        path === reqDataPath.BODY ? (req.body = validData) : (req.validData = validData);
        return next();
    } catch (err) {
        next(err);
    }
};
