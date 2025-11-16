import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import baseController from "./baseController.js";
import {editorModel, editorZod} from "../model/editorModel.js"
import dotenv from "dotenv";
dotenv.config();

export default class editorController extends baseController {
	constructor() {
		super(process.env.SECRET, editorModel, editorZod);
	}

	async verifyLogin(editorInput) {
		const doc = await this.model.findOne({username: editorInput.username}).exec();
	    return (doc.passhash != undefined && bcrypt.compareSync(editorInput.passhash, doc.passhash));
	}

	async auth(req, res) {
		try {
			const doc = this.validateDocument(req.body);
			if (await this.verifyLogin(doc)) {
				const tk = jwt.sign({username: doc.username}, this.secret);
				return res.json({token: tk});
			} else {
				//Unauthorized access
				return res.status(401).json({error: "Bad username/password"});
			}
		} catch(ex) {
			this.errorHandler(res, ex);
		}
	}
}

