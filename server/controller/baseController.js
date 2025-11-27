import jwt from "jsonwebtoken";
import zod from "zod";
import mongoose from "mongoose";
import {editorModel} from "../model/editorModel.js"
import customError from "../middleware/customError.js";

//class
export default class baseController {

	constructor(secret, model, zodSchema) {
		this.secret = secret;
		this.model = model;
		this.zodSchema = zodSchema;
	}

	//returns payload of the token
	//throws an error if it's unable to parse the token as a valid jwt token signed by the secret
	verifyToken(token) {
		let parsedToken = zod.jwt().parse(token);
	 	return jwt.verify(parsedToken, this.secret);
	}

	//returns a parsed doc that is a subset of zodSchema
	//Throws an error if doc cannot be parsed
	validateDocument(doc) {
		return this.zodSchema.partial().parse(doc);
	}

	//returns true if the editor associated with the token exists and false otherwise
	async hasAccess(req) {
		const payload = this.verifyToken(req.headers["x-auth"]);
		const editor = await editorModel.findOne({username: payload.username}).exec();
		return (editor != null)
	}
	
	async readAll(req, res) {
	    return res.status(200).json(await this.model.find({}).exec());
	}

	async readFiltered(req, res) {
	    const doc = this.validateDocument(req.query);
	    return res.status(200).json(await this.model.find(doc).exec());
	}

	async create(req, res) {
	    if (!(await this.hasAccess(req))) {
			throw new customError(403, "Forbidden: Access denied");
		}
	    const doc = this.validateDocument(req.body);
	    const createdDoc = await this.model.create(doc);
	    return res.status(201).json(createdDoc);
	}

	async delete(req, res) {
		if (!(await this.hasAccess(req))) {
			throw new customError(403, "Forbidden: Access denied");
		}
	    if (!mongoose.isValidObjectId(req.params._id)) {
			throw new customError(400, "Bad Request: Not a valid object id");
	    } 
	    const result = await this.model.findById(req.params._id).deleteOne().exec();
	    if (result.deletedCount == 0) {
			throw new customError(404, "Not Found: Document does not exist");
	    } else {
	    	return res.status(200).json({message: "Document deleted successfully"});
	    }
	}

	async update(req, res) {
	    if (!(await this.hasAccess(req))) {
			throw new customError(403, "Forbidden: Access denied");
		}
	    if (!mongoose.isValidObjectId(req.params._id)) {
	    	throw new customError(400, "Bad Request: Not a valid object id");
	    }
	    const doc = this.validateDocument(req.body);
	    const result = await this.model.findById(req.params._id).updateOne({$set: doc}).exec();
	    if (result.matchedCount == 0) {
	    	throw new customError(404, "Not Found: Document does not exist");
	    } else {
	    	return res.status(200).json({message: "Document updated successfully"});
	    }
	}
}
