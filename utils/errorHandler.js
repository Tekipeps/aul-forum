const errorHandler = (error, _, res, next) => {
    console.log(error.message)
    /**
     * TODO: add error handling checks
     * eg: 
     * if (error.name === 'ValidationError') {
     *      return response.status(400).json({ error: error.message });
     * }
     */
    next(error)
}

module.exports = errorHandler