/** */
class customError extends Error {
    /**
     * 
     * @param {number} status - HTTP status code 
     * @param {string} message - Error message
     */
    constructor(status, message) {
        super(message);
        this.status = status;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default customError;