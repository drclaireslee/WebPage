import bcrypt from "bcryptjs";
import zod from "zod";
import baseController from "./baseController.js";
import {editorZod} from "../model/editorModel.js"
import customError from "../middleware/customError.js";

export default class editorController extends baseController {
	constructor() {
		super("Editor", editorZod);
		this.updateZodCreator = zod.object({passhash: zod.string()});
	}

	//Assume req.body.passhash contains a plain text password
	async create(req, res) {
		req.body.passhash = bcrypt.hashSync(req.body.passhash, bcrypt.genSaltSync(10));
		super.create(req, res);
	}

	async deleteByUsername(req, res) {
		const model = await this.getModel();
		const result = await model.findOne({username: req.params.username}).deleteOne().exec();
		if (result.deletedCount == 0) {
			throw new customError(404, "Not Found: Document does not exist");
		} else {
			return res.status(200).json({message: "Document deleted successfully"});
		}
	}

	async update(req, res) {
		this.updateZodCreator.parse(req.body);
		req.body.passhash = bcrypt.hashSync(req.body.passhash, bcrypt.genSaltSync(10));
		super.update(req, res);
	}


	async updateByUsername(req, res) {
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

