import baseController from "./baseController.js";
import {labMemberZod} from "../model/labMemberModel.js"
import customError from "../middleware/customError.js";
import { put, del } from '@vercel/blob';
import mongoose from "mongoose";


/**
 * @extends baseController
 */
class labMemberController extends baseController {
	/**
	 * create a labMemberController
     */
	constructor() {
		super("LabMember", labMemberZod);
		this.defaultURL = "https://iprahoo86xomtazb.public.blob.vercel-storage.com/img/labMembers/default.jpg";
	}

	/**
	 * Returns the a file extension for a given string representation of a mimetype
	 * @param {string} mimetype - String representation of a mimetype
	 * @return {Promise<Object>} A JSON response object containing a message.
	 * @throws {customError} If mime type is not a valid type for labMemberController
	 * @example
	 * 
	 *  const controller = new labMemberController();
	 *  console.log(controller.getFileExtension("image/jpeg"));
	 *  //logs "jpg"
	 */
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
			const blob = await put(`/img/labMembers/${_id}.${fileExtension}`, req.file.buffer, {
				access: "public",
				allowOverwrite: true,
				addRandomSuffix: false
			});
			req.body.imageURL = blob.url;
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
		return super.delete(req, res);
	}

	async update(req, res) {
		if (req.file) {
			const fileExtension = await this.getFileExtension(req.file.mimetype);
			const blob = await put(`/img/labMembers/${req.params._id}.${fileExtension}`, req.file.buffer, {
				access: "public",
				allowOverwrite: true,
				addRandomSuffix: false
			});
			req.body.imageURL = blob.url;
		}
		return super.update(req, res);
	}
}


export default labMemberController;