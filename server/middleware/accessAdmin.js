import customError from "../middleware/customError.js";
import connectionHelper from "../helper/connectionHelper.js";
import jwt from "jsonwebtoken";
import {secret} from "../helper/config.js"

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