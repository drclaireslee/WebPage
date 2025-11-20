import baseController from "./baseController.js";
import {labMemberModel, labMemberZod} from "../model/labMemberModel.js"
import fs from "node:fs/promises";
import dotenv from "dotenv";
dotenv.config();

export default class labMemberController extends baseController {
	constructor() {
		super(process.env.SECRET, labMemberModel, labMemberZod);
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
		try {
	    	this.verifyToken(req.headers["x-auth"]);
	    	const doc = this.validateDocument(req.body);
	    	const createdDoc = await this.model.create(doc);

	    	//rename the uploaded image file if it exists
	    	if (req.file) {
	    		const oldPath = `${req.file.destination}/${req.file.filename}`;
	    		const newPath = `${req.file.destination}/${createdDoc._id}`;
	    		fs.rename(oldPath, newPath);
	    	}

	    	res.status(201).json(createdDoc);
	    } catch(ex) {
	    	this.errorHandler(res, ex);
	    }
	}


	async delete(req, res) {
		super.delete(req, res);
		try {
			fs.rm(`./public/img/${req.params._id}`);
		} catch(ex) {
			console.log(ex);
		}
	}

	async update(req, res) {
		super.update(req, res);
		try {
			//Replace the old picture with the new picture if it exists
			const oldPath = `${req.file.destination}/${req.file.filename}`;
		    const newPath = `${req.file.destination}/${req.params._id}`;
		    await fs.rename(oldPath, newPath);
		} catch(ex) {
			console.log(ex);
		}
	}

	async readFiltered(req, res) {
	    try {
	    	const doc = this.validateDocument(req.query);
	    	const memberList = await this.model.find(doc).lean().exec();
	    	await this.appendImagePath(memberList);
	    	return res.status(200).json(memberList);
	    } catch(ex) {
	    	this.errorHandler(res, ex);
	    }
	}

	async readAll(req, res) {
		try {
	    	const memberList = await this.model.find({}).lean().exec(); 
	    	await this.appendImagePath(memberList);
	    	res.status(200).json(memberList);
	    } catch(ex) {
	    	this.errorHandler(res, ex);
	    }
	}
}
