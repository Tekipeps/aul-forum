const yup = require('yup');

module.exports = ({ shape, path = 'body' }) => async (req, res, next) => {
    const schema = yup.object().shape(shape);

    try {
        const validData = await schema.validate(req[path]);
        req.body = validData;
        return next();
    } catch (err) {
        next(err);
    }
};
