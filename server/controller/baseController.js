import jwt from "jsonwebtoken";
import zod from "zod";
import mongoose from "mongoose";
import {editorModel, editorZod} from "../model/editorModel.js"

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
		try {
			const payload = this.verifyToken(req.headers["x-auth"]);
			const editor = await editorModel.findOne({username: payload.username}).exec();
			return (editor != null)
		} catch (ex) {
			return false;
		}
	}

	errorHandler(res, ex) {
		if (ex instanceof zod.ZodError) {
			return res.status(400).json({error: "Bad Request: Invalid document"});
		}
		return res.status(500).json({error: `Internal Server Error: ${ex.message}`});
	}

	async readAll(req, res) {
		try {
	    	return res.status(200).json(await this.model.find({}).exec());
	    } catch(ex) {
	    	this.errorHandler(res, ex);
	    }
	}

	async readFiltered(req, res) {
	    try {
	    	const doc = this.validateDocument(req.query);
	    	return res.status(200).json(await this.model.find(doc).exec());
	    } catch(ex) {
	    	this.errorHandler(res, ex);
	    }
	}

	async create(req, res) {
		try {
	    	if (!(await this.hasAccess(req))) {
				return res.status(403).json({error: "Forbidden: Access denied"})
			}
	    	const doc = this.validateDocument(req.body);
	    	const createdDoc = await this.model.create(doc);
	    	return res.status(201).json(createdDoc);
	    } catch(ex) {
	    	this.errorHandler(res, ex);
	    }
	}

	async delete(req, res) {
		try {
			if (!(await this.hasAccess(req))) {
				return res.status(403).json({error: "Forbidden: Access denied"})
			}
	    	if (!mongoose.isValidObjectId(req.params._id)) {
	    		return res.status(400).json({error: "Not an object id"});
	    	} 

	    	const result = await this.model.findById(req.params._id).deleteOne().exec();
	    	if (result.deletedCount == 0) {
	    		return res.status(404).json();
	    	} else {
	    		return res.status(200).send("OK");
	    	}
	    } catch(ex) {
	    	this.errorHandler(res, ex);
	    } 
	}

	async update(req, res) {
		try {
	    	if (!(await this.hasAccess(req))) {
				return res.status(403).json({error: "Forbidden: Access denied"})
			}
	    	if (!mongoose.isValidObjectId(req.params._id)) {
	    		return res.status(400).json({error: "Not an object id"});
	    	}

	    	const doc = this.validateDocument(req.body);
	    	const result = await this.model.findById(req.params._id).updateOne({$set: doc}).exec();
	    	if (result.matchedCount == 0) {
	    		return res.status(404).send("NOT FOUND");
	    	} else {
	    		return res.status(200).send("OK");
	    	}
	    } catch(ex) {
	    	this.errorHandler(res, ex);
	    } 
	}
}
