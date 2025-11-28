import baseController from "./baseController.js";
import {labMemberZod} from "../model/labMemberModel.js"
import fs from "node:fs/promises";
import dotenv from "dotenv";
import customError from "../middleware/customError.js";
import { put, list, del } from '@vercel/blob';
import path from "path";
dotenv.config();

export default class labMemberController extends baseController {
	constructor() {
		super(process.env.SECRET, "LabMember", labMemberZod);
	}

	//expects a list of object with _id attributes
	//appends a key named "imageURL" with a value of the path of an image relating to the _id in each object
	//If the path of image can't be found a default will be assigned instead
	async appendImageURL(memberList) {
		const defaultURL = await this.getImageURL("default.jpg");
		const blobList = await list({prefix: `img/labMembers/`});
		const map = new Map();
		blobList.blobs.forEach(({pathname, url}) => {
			map.set(path.basename(pathname, path.extname(pathname)), url);
		});

		memberList.forEach((member) => {
			const imageBlobURL = map.get(member["_id"].toString());
			if (imageBlobURL) {
				member["imageURL"] = imageBlobURL;
			} else {
				member["imageURL"] = defaultURL;
			}
		});
	}

	async getImageURL(FileNameWithExtension) {
		const blobList = await list({
			prefix: `img/labMembers/${FileNameWithExtension}`,
			limit: 1,
		});
		if (blobList.blobs.length > 0) {
			return blobList.blobs[0].url;	
		}	
	}

	//Expects a mimetype string
	//Returns the appropriate file extension for that mimetype
	//Throws an error if the mimetype is unsupported
	async getFileExtension(mimetype) {
		switch (mimetype) {
		case "image/jpeg":
			return "jpg";
		case "image/png":
			return "png";
		case "image/webp":
			return "webp";
		default:
			throw new customError(400, "Bad Request: Unsupported image type");
		}
	}


	async create(req, res) {
	    if (!(await this.hasAccess(req))) {
			throw new customError(403, "Forbidden: Access denied");
		}
	    const doc = this.validateDocument(req.body);
		const model = await this.getModel();
	    const createdDoc = await model.create(doc);
		const fileExtension = await this.getFileExtension(req.file.mimetype);
		if (req.file) {
			put(`img/labMembers/${createdDoc._id}.${fileExtension}`, req.file.buffer, {
				access: "public",
				allowOverwrite: true,
				addRandomSuffix: false
			});
		}
	    res.status(201).json(createdDoc);
	}


	async delete(req, res) {
		const blobList = await list({
			prefix: `img/labMembers/${req.params._id}.`,
			limit: 1,
		});
		if (blobList.blobs.length > 0) {
			del(blobList.blobs[0].url);	
		}
		super.delete(req, res);
	}

	async update(req, res) {
		if (req.file) {
			const fileExtension = await this.getFileExtension(req.file.mimetype);
			put(`img/labMembers/${req.params._id}.${fileExtension}`, req.file.buffer, {
				access: "public",
				allowOverwrite: true,
				addRandomSuffix: false
			});
		}
		super.update(req, res);
	}

	async readFiltered(req, res) {
		const doc = this.validateDocument(req.query);
		const model = await this.getModel();
		const memberList = await model.find(doc).lean().exec();
		await this.appendImageURL(memberList);
		return res.status(200).json(memberList);
	}

	async readAll(req, res) {
		const model = await this.getModel();
		const memberList = await model.find({}).lean().exec(); 
		await this.appendImageURL(memberList);
		res.status(200).json(memberList);
	}
}
