import customError from "../middleware/customError.js";
import connectionHelper from "../helper/connectionHelper.js";
import jwt from "jsonwebtoken";
import {secret} from "../config/config.js"


/** 
 * @external express 
 * @see {@link https://expressjs.com/}
 * 
 */

/** 
 * @external jsonwebtoken
 * @see {@link https://www.npmjs.com/package/jsonwebtoken}
 */

/**
 * Check the req.header["x-auth"] if it has a valid signed jwt token
 * and if the username of the payload of jwt token exists within the editor table and is an admin. 
 * If all condition are met then it will go the next middleware.
 * Else make a new custom error for express error handler to handle.
 * @function accessAdmin
 * @param {external:express.req} req - an express request object
 * @param {external:express.res} res - an express response object
 * @param {external:express.next} next - an express next object
 * @example
 * 
 * const controller = new editorController();
 * app.post("/", access, controller.read.bind(controller));
 * 
 * //Before we can read all of document in the editor table, we first have to get through the accessAdmin function
 */
async function accessAdmin(req, res, next) {
    try {
        const token = req.headers["x-auth"];
        if (!token) {
            next(new customError(400, "Bad request: Token does not exist"));
        } 
        const payload = jwt.verify(token, secret);

		const conn = await connectionHelper();
		const model = await conn.model("Editor");
		const editor = await model.findOne({username: payload.username}).exec();
        if (!editor || editor.role != "admin") {
            next(new customError(403, "Forbidden: User does not have access to database"));
        }
        next();
    } catch {
        next(new customError(403, "Forbidden: User does not have access to database"));
    }
}
export default accessAdmin;