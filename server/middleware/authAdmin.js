import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {secret} from "../config/config.js"
import customError from "../middleware/customError.js";
import connectionHelper from "../helper/connectionHelper.js";

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
 * Checks if the req.body.passhash is the password to login into
 * the editor account specified by req.body.username.
 * If it a valid password to the username that exists within editor and is an admin then it 
 * sends an JSON response with a token property that contains the value 
 * of a signed jsonwebtoken for that username. Else it goes the express error handler.
 * @function authAdmin
 * @param {external:express.req} req - an express request object
 * @param {external:express.res} res - an express response object
 * @param {external:express.next} next - an express next object
 * @example
 * 
 * app.get("/auth", auth)
 * 
 * //Assume the editor table has {{username: Bob, passhash:asdjhfasdf, role: admin}, {{username: Jerry, passhash:dsfwert, role: editor}}} the original password being 12345 for both
 * //If req.body has {username: Bob, passhash:12345} 
 * //then the JSON response will be {token: somejwttoken}
 * //Else if req.body has {username: Jerry, passhash:12345}
 * //then it will go to express error handler
 */
async function authAdmin(req, res, next) {
    try {
        const conn = await connectionHelper();
        const model = await conn.model("Editor");
        const doc = await model.findOne({username: req.body.username}).exec();
        if (!bcrypt.compareSync(req.body.passhash, doc.passhash)) {
            next(new customError(403, "Forbidden: Bad username/password"));
        }
        if (doc.role != "admin") {
            next(new customError(403, "Forbidden: Not an admin"));
        }
        const tk = jwt.sign({username: doc.username}, secret, {expiresIn: '1d'});
        return res.status(200).json({token: tk});
    } catch {
        next(new customError(403, "Forbidden: Bad username/password"));
    }
}

export default authAdmin;