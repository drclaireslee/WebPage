import baseController from "./baseController.js";
import {labMemberZod} from "../model/labMemberModel.js"
import fs from "node:fs/promises";
import dotenv from "dotenv";
import customError from "../middleware/customError.js";
dotenv.config();

export default class labMemberController extends baseController {
	constructor() {
		super(process.env.SECRET, "LabMember", labMemberZod);
	}

	//expects a list of object with _id attributes
	//appends a key named "imagePath" with a value of the path of an image relating to the _id in each object
	//If the path of image can't be found a default will be assigned instead
	async appendImagePath(memberList) {
		await Promise.allSettled(memberList.map(async (member) => {
			try {
				await fs.access(`./public/img/${member["_id"]}`);
				member["imagePath"] = `img/${member["_id"]}`;
			} catch {
				member["imagePath"] = "img/undefined";
			}
		})); 
	}

	async create(req, res) {
	    if (!(await this.hasAccess(req))) {
			throw new customError(403, "Forbidden: Access denied");
		}
	    const doc = this.validateDocument(req.body);
		const model = await this.getModel();
	    const createdDoc = await model.create(doc);
	    //rename the uploaded image file if it exists
	    if (req.file) {
	    	const oldPath = `${req.file.destination}/${req.file.filename}`;
	    	const newPath = `${req.file.destination}/${createdDoc._id}`;
	    	fs.rename(oldPath, newPath);
	    }
	    res.status(201).json(createdDoc);
	}


	async delete(req, res) {
		super.delete(req, res);
		fs.rm(`./public/img/${req.params._id}`, {force: true});
	}

	async update(req, res) {
		super.update(req, res);
		//Replace the old picture with the new picture if it exists
		if (req.file) {
			const oldPath = `${req.file.destination}/${req.file.filename}`;
			const newPath = `${req.file.destination}/${req.params._id}`;
			await fs.rename(oldPath, newPath);
		}
	}

	async readFiltered(req, res) {
		const doc = this.validateDocument(req.query);
		const model = await this.getModel();
		const memberList = await model.find(doc).lean().exec();
		await this.appendImagePath(memberList);
		return res.status(200).json(memberList);
	}

	async readAll(req, res) {
		const model = await this.getModel();
		const memberList = await model.find({}).lean().exec(); 
		await this.appendImagePath(memberList);
		res.status(200).json(memberList);
	}
}
