const jwt =  require("jsonwebtoken");
const zod = require("zod");
const mongoose = require("mongoose");

//class
function baseController(secret, model, zodSchema) {
	this.secret = secret;
	this.model = model;
	this.zodSchema = zodSchema;

	let x = "Bob"
}

//methods
baseController.prototype.verifyToken = function (token) {
	parsedToken = zod.jwt().parse(token);
 	return jwt.verify(parsedToken, secret);
};

baseController.prototype.validateDocument = function (doc) {
	let newDoc = {};
	for (let attr in this.zodSchema) {
		if (attr in doc) {
			newDoc[attr] = zodSchema.attr.parse(doc.attr);
		}
	}
	return newDoc;
};

baseController.prototype.readAll = async function(req, res, next) {
	try {
    	res.json(await this.model.find({}).exec());
    } catch(ex) {
    	res.json({error: ex.message});
    } finally {
    	next();
    }	
};

baseController.prototype.readFiltered = async function(req, res, next) {
    try {
    	const doc = this.validateDocument(req.query);
    	res.json(await this.model.find(doc).exec());
    } catch(ex) {
    	res.json({error: ex.message});
    } finally {
    	next();
    }
};

baseController.prototype.create = async function(req, res, next) {
	try {
    	this.verifyToken(req.headers["x-auth"]);
    	const doc = this.validateDocument(req.body);
    	await this.model.create(doc);
    	res.send("OK");
    } catch(ex) {
    	res.send("NOT OK");
    } finally {
    	next();
    }
};

baseController.prototype.delete = async function(req, res, next) {
	try {
    	this.verifyToken(req.headers["x-auth"]);
    	if (!mongoose.isValidObjectId(req.params.id)) {
    		throw new Error("Not an object id");
    	}
    	await this.findById(req.params.id).deleteOne().exec();
    	res.send("OK");
    } catch(ex) {
    	res.send("NOT OK");
    } finally {
    	next();
    }
}

baseController.prototype.update = async function(req, res, next) {
	try {
    	this.verifyToken(req.headers["x-auth"]);
    	if (!mongoose.isValidObjectId(req.params.id)) {
    		throw new Error("Not an object id");
    	}
    	const doc = this.validateDocument(req.body);
    	await this.findById(req.params.id).updateOne({$set: doc}).exec();
    	res.send("OK");
    } catch(ex) {
    	res.send("NOT OK");
    } finally {
    	next();
    }
}


baseController.prototype.print = function() {
	console.log("x");
}

let x  = base