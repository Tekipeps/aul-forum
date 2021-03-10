const errorHandler = (error, _, res, next) => {
    console.log(error.message);
    if (error.name === 'ValidationError') {
        return res.status(400).json({ err: error.message });
    }
    if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ err: error.message });
    }
    next(error);
};

module.exports = errorHandler;
