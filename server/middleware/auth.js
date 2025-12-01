import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {secret} from "../config/config.js"
import customError from "../middleware/customError.js";
import connectionHelper from "../helper/connectionHelper.js";

async function auth(req, res, next) {
    try {
        const conn = await connectionHelper();
		const model = await conn.model("Editor");
        const doc = await model.findOne({username: req.body.username}).exec();
        if (!bcrypt.compareSync(req.body.passhash, doc.passhash)) {
            next(new customError(403, "Forbidden: Bad username/password"));
        }
        const tk = jwt.sign({username: doc.username}, secret, {expiresIn: '1d'});
        return res.status(200).json({token: tk});
    } catch {
        next(new customError(403, "Forbidden: Bad username/password"));
    }
}

export default auth;