
/** 
 * @external express 
 * @see {@link https://expressjs.com/}
 * 
 */

/**
 * Sends a json response object containing a status property with a value of a 
 * HTTP status code and a message property.
 * @function errorHandler
 * @param {external:express.err} err - an express error object
 * @param {external:express.req} req - an express request object
 * @param {external:express.res} res - an express response object
 * @param {external:express.next} next - an express next object
 */
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