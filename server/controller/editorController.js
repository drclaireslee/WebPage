import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import zod from "zod";
import baseController from "./baseController.js";
import {editorModel, editorZod} from "../model/editorModel.js"
import dotenv from "dotenv";
dotenv.config();

export default class editorController extends baseController {
	constructor() {
		super(process.env.SECRET, editorModel, editorZod);
		this.updateZodCreator = zod.object({passhash: zod.string()});
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

	isAdmin(token) {
		const payload = this.verifyToken(token);
		const editorInfo = this.model.findOne({username: payload.username}).exec();
		return editorInfo.role == "admin";
	}

	async read(req, res) {
		try {
			if (!this.isAdmin(req.headers["x-auth"])) {
				return res.status(403).json({error: "Forbidden: Admin only operation"});
			}
			req.body.passhash = bcrypt.hashSync(req.body.passhash, this.secret);
			super.read(req, res);
		} catch(ex) {
			this.errorHandler(res, ex);	
		}
	}

	async readFiltered(req, res) {
		try {
			if (!this.isAdmin(req.headers["x-auth"])) {
				return res.status(403).json({error: "Forbidden: Admin only operation"});
			}
			req.body.passhash = bcrypt.hashSync(req.body.passhash, this.secret);
			super.readFiltered(req, res);
		} catch(ex) {
			this.errorHandler(res, ex);	
		}
	}


	//Assume req.body.passhash contains the plain text password
	async create(req, res) {
		try {
			if (!this.isAdmin(req.headers["x-auth"])) {
				return res.status(403).json({error: "Forbidden: Admin only operation"});
			}
			req.body.passhash = bcrypt.hashSync(req.body.passhash, this.secret);
			super.create(req, res);
		} catch(ex) {
			this.errorHandler(res, ex);	
		}
	}

	async delete(req, res) {
		try {
			if (!this.isAdmin(req.headers["x-auth"])) {
				return res.status(403).json({error: "Forbidden: Admin only operation"});
			}
			super.delete(req, res);
		} catch(ex) {
			this.errorHandler(res, ex);
		}
	}

	//Assume req.body.passhash contains the plain text password
	async update(req, res) {
		try {
			const token = this.verifyToken(req.headers["x-auth"]);
			const userInfo = await this.model.findOne({username: token.username}).exec();
			if (!this.isAdmin(token) &&  req.params._id != userInfo._id) {
				return res.status(403).json({error: "Forbidden: Not the same creator or admin"});
			} 
			if (req.params._id != userInfo._id) {
				this.updateZodCreator.parse(req.body);
			}
			req.body.passhash = bcrypt.hashSync(req.body.passhash, this.secret);
			super.update(req, res);
		} catch(ex) {	
			this.errorHandler(res, ex);
		}	
	}
}

