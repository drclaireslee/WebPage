import jwt from "jsonwebtoken";
import zod from "zod";
import mongoose from "mongoose";

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
		parsedToken = zod.jwt().parse(token);
	 	return jwt.verify(parsedToken, this.secret);
	}

	//returns a parsed doc that is a subset of zodSchema
	//Throws an error if doc cannot be parsed
	validateDocument(doc) {
		let newDoc = {};
		for (let attr in this.zodSchema) {
			if (attr in doc) {
				newDoc[attr] = this.zodSchema[attr].parse(doc[attr]);
			}
		}
		return newDoc;
	}

	async readAll(req, res, next) {
		try {
	    	res.json(await this.model.find({}).exec());
	    } catch(ex) {
            console.log(ex.message);
	    	res.json({error: ex.message});
	    }
	}

	async readFiltered(req, res, next) {
	    try {
	    	const doc = this.validateDocument(req.query);
	    	res.json(await this.model.find(doc).exec());
	    } catch(ex) {
	    	res.json({error: ex.message});
	    }
	}

	async create(req, res, next) {
		try {
	    	this.verifyToken(req.headers["x-auth"]);
	    	const doc = this.validateDocument(req.body);
	    	await this.model.create(doc);
	    	res.send("OK");
	    } catch(ex) {
	    	res.send("NOT OK");
	    }
	}

	async delete(req, res, next) {
		try {
	    	this.verifyToken(req.headers["x-auth"]);
	    	if (!mongoose.isValidObjectId(req.params.id)) {
	    		throw new Error("Not an object id");
	    	}
	    	await this.model.findById(req.params.id).deleteOne().exec();
	    	res.send("OK");
	    } catch(ex) {
	    	res.send("NOT OK");
	    } 
	}

	async update(req, res, next) {
		try {
	    	this.verifyToken(req.headers["x-auth"]);
	    	if (!mongoose.isValidObjectId(req.params.id)) {
	    		throw new Error("Not an object id");
	    	}
	    	const doc = this.validateDocument(req.body);
	    	await this.model.findById(req.params.id).updateOne({$set: doc}).exec();
	    	res.send("OK");
	    } catch(ex) {
	    	res.send("NOT OK");
	    } 
	}
}
