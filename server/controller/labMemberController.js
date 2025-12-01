import baseController from "./baseController.js";
import {labMemberZod} from "../model/labMemberModel.js"
import customError from "../middleware/customError.js";
import { put, del } from '@vercel/blob';
import mongoose from "mongoose";
import {origin} from "../helper/config.js";

export default class labMemberController extends baseController {
	constructor() {
		super("LabMember", labMemberZod);
		this.defaultURL = "https://drclaireslee-backend.vercel.app/img/labMembers/default.jpg";
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
		const _id = new mongoose.Types.ObjectId();
		if (req.file) {
			const fileExtension = await this.getFileExtension(req.file.mimetype);
			const url = `${origin}/img/labMembers/${_id}.${fileExtension}`;
			put(url, req.file.buffer, {
				access: "public",
				allowOverwrite: true,
				addRandomSuffix: false
			});
			req.body.imageURL = url;
		} else {
			req.body.imageURL = this.defaultURL;
		}
		const model = await this.getModel();
	    const doc = this.validateDocument(req.body);
		doc["_id"] = _id;
	    const createdDoc = await model.create(doc);
		return res.status(201).json(createdDoc);
	}

	async delete(req, res) {
		const model = await this.getModel();
	    const result = await model.findById(req.params._id).exec();
		if (result.imageURL != this.defaultURL) {
			del(result.imageURL);
		}
		super.delete(req, res);
	}

	async update(req, res) {
		if (req.file) {
			const fileExtension = await this.getFileExtension(req.file.mimetype);
			put(`${origin}/img/labMembers/${req.params._id}.${fileExtension}`, req.file.buffer, {
				access: "public",
				allowOverwrite: true,
				addRandomSuffix: false
			})
		}
		super.update(req, res);
	}
}
