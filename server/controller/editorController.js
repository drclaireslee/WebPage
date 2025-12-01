import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import zod from "zod";
import baseController from "./baseController.js";
import {editorZod} from "../model/editorModel.js"
import customError from "../middleware/customError.js";
import dotenv from "dotenv";
dotenv.config();

export default class editorController extends baseController {
	constructor() {
		super(process.env.SECRET, "Editor", editorZod);
		this.updateZodCreator = zod.object({passhash: zod.string()});
	}

	//Assume editorInput.passhash contains a plain text password
	async verifyLogin(editorInput) {
		try {
			const model = await this.getModel();
			const doc = await model.findOne({username: editorInput.username}).exec();
	    	return (doc != null && bcrypt.compareSync(editorInput.passhash, doc.passhash));
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

	async authAdmin(req, res) {
		const model = await this.getModel();
		const editorInfo = await model.findOne({username: req.body.username}).exec();
		if (editorInfo.role != "admin") {
			throw new customError(403, "Forbidden: Not an admin");
		}
		return this.auth(req, res);
	}


	async isAdmin(req) {
		const token = req.headers["x-auth"];
		const payload = this.verifyToken(token);
		const model = await this.getModel();
		const editorInfo = await model.findOne({username: payload.username}).exec();
		return editorInfo.role == "admin";
	}

	async readAll(req, res) {
		if (!(await this.isAdmin(req))) {
			throw new customError(403, "Forbidden: Admin only operation");
		}
		super.readAll(req, res);
	}

	async readFiltered(req, res) {
		if (!(await this.isAdmin(req))) {
			throw new customError(403, "Forbidden: Admin only operation");
		}
		super.readFiltered(req, res);
	}

	async createVerification(req, res) {
		if (!(await this.isAdmin(req))) {
			throw new customError(403, "Forbidden: Admin only operation");
		}
	}
	
	//Assume req.body.passhash contains a plain text password
	async createAction(req, res) {
		req.body.passhash = bcrypt.hashSync(req.body.passhash, bcrypt.genSaltSync(10));
		super.createAction(req, res);
	}

	async deleteVerification(req, res) {
		if (!(await this.isAdmin(req))) {
			throw new customError(403, "Forbidden: Admin only operation");
		}
	}

	async deleteByUsername(req, res) {
		this.deleteVerification(req, res);
		const model = await this.getModel();
		const result = await model.findOne({username: req.params.username}).deleteOne().exec();
		if (result.deletedCount == 0) {
			throw new customError(404, "Not Found: Document does not exist");
		} else {
			return res.status(200).json({message: "Document deleted successfully"});
		}
	}

	async updateVerification(req, res) {
		const editor = await this.getAccess(req);
		if (!editor) {
			throw new customError(403, "Forbidden: Access denied");
		} 
		if (!((await this.isAdmin(req)) ||  req.params._id == editor._id)) {
			throw new customError(403, "Forbidden: Not the same creator or admin");
		}
	}

	async updateAction(req, res) {
		this.updateZodCreator.parse(req.body);
		req.body.passhash = bcrypt.hashSync(req.body.passhash, bcrypt.genSaltSync(10));
		super.updateAction(req, res);
	}


	async updateByUsername(req, res) {
		const editor = await this.getAccess(req);
		if (!editor) {
			throw new customError(403, "Forbidden: Access denied");
		} 
		if (!((await this.isAdmin(req)) ||  req.params.username == editor.username)) {
			throw new customError(403, "Forbidden: Not the same creator or admin");
		} 
		this.updateZodCreator.parse(req.body);
		const model = await this.getModel();
		const result = await model.findOne({username: req.params.username}).updateOne({$set: {passhash: bcrypt.hashSync(req.body.passhash, bcrypt.genSaltSync(10))}}).exec();
		if (result.matchedCount == 0) {
			throw new customError(404, "Not Found: Document does not exist");
		} else {
			return res.status(200).json({message: "Document updated successfully"});
		}
	}
}

