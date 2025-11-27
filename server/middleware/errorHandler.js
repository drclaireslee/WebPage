function errorHandler(err, req, res, next) {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Internal Server Error';

    //Log the error stack for debugging purposes
    console.error(err.stack);

    res.status(errorStatus).json({
        status: errorStatus,
        message: errorMessage,
    });
}

export default errorHandler;