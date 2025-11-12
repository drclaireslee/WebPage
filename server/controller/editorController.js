import {editorModel, editorZod} from "../model/editorModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {baseController} from "./baseController.js";

export default class editorController extends baseController {
    
    constructor() {
    	super(process.env.SECRET, editorModel, editorZod);
    }

    async verifyLogin(editorInput) {
    	const doc = await this.model.findOne({username: editorInput.username}).exec();
    	return (doc.passhash != undefined && bcrypt.compareSync(editorInput.password, doc.passhash));
    }

    async auth(req, res, next) {
		try {
			const doc = this.validateDocument(req.body);
			if (await this.verifyLogin(doc)) {
				const tk = jwt.sign({username: doc.username}, this.secret);
				res.json({token: tk});
			} else {
				//Unauthorized access
				res.status(401).json({error: "Bad username/password"});
			}
		} catch(ex) {
			res.status(401).json({error: ex.message});
		} finally {
			next();
		}
	}

}

