import jwt from "jsonwebtoken";
import zod from "zod";
import mongoose from "mongoose";
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
			console.log(ex.message);
			res.status(401).json({error: ex.message});
		}
	}
}

