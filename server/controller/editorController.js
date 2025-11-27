import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import zod from "zod";
import baseController from "./baseController.js";
import {editorModel, editorZod} from "../model/editorModel.js"
import customError from "../middleware/customError.js";
import dotenv from "dotenv";
dotenv.config();

export default class editorController extends baseController {
	constructor() {
		super(process.env.SECRET, editorModel, editorZod);
		this.updateZodCreator = zod.object({passhash: zod.string()});
	}

	async verifyLogin(editorInput) {
		try {
			const doc = await this.model.findOne({username: editorInput.username}).exec();
	    	return (doc.passhash != undefined && bcrypt.compareSync(editorInput.passhash, doc.passhash));
		} catch {
			throw new customError(400, "Bad Request: Bad username/password");
		}
	}

	async auth(req, res) {
		const doc = this.validateDocument(req.body);
		if (await this.verifyLogin(doc)) {
			const tk = jwt.sign({username: doc.username}, this.secret, {expiresIn: '1d'});
			return res.status(200).json({token: tk});
		} else {
			throw new customError(403, "Forbidden: Bad username/password");
		}
	}

	isAdmin(req) {
		const token = req.headers["x-auth"];
		const payload = this.verifyToken(token);
		const editorInfo = this.model.findOne({username: payload.username}).exec();
		return editorInfo.role == "admin";
	}

	async read(req, res) {
		if (!this.isAdmin(req)) {
			throw new customError(403, "Forbidden: Admin only operation");
		}
		req.body.passhash = bcrypt.hashSync(req.body.passhash, this.secret);
		super.read(req, res);
	}

	async readFiltered(req, res) {
		if (!this.isAdmin(req)) {
			throw new customError(403, "Forbidden: Admin only operation");
		}
		req.body.passhash = bcrypt.hashSync(req.body.passhash, this.secret);
		super.readFiltered(req, res);
	}


	//Assume req.body.passhash contains the plain text password
	async create(req, res) {
		if (!this.isAdmin(req)) {
			throw new customError(403, "Forbidden: Admin only operation");
		}
		req.body.passhash = bcrypt.hashSync(req.body.passhash, this.secret);
		super.create(req, res);
	}

	async delete(req, res) {
		if (!this.isAdmin(req)) {
			throw new customError(403, "Forbidden: Admin only operation");
		}
		super.delete(req, res);
	}

	//Assume req.body.passhash contains the plain text password
	async update(req, res) {
		const token = this.verifyToken(req);
		const userInfo = await this.model.findOne({username: token.username}).exec();
		if (!this.isAdmin(req) &&  req.params._id != userInfo._id) {
			throw new customError(403, "Forbidden: Not the same creator or admin");
		} 
		if (req.params._id != userInfo._id) {
			this.updateZodCreator.parse(req.body);
		}
		req.body.passhash = bcrypt.hashSync(req.body.passhash, this.secret);
		super.update(req, res);
	}
}

