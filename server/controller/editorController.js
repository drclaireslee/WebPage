const jwt =  require("jsonwebtoken");
const zod = require("zod");
const mongoose = require("mongoose");

const baseController = require("./baseController.js");
const editorModel = require("../model/editorModel.js");


function editorController() {
	baseController.call(this, process.env.SECRET, editorModel.model, editorModel.zodObject);
};

editorController.prototype = Object.create(baseController.prototype);
editorController.prototype.constructor = editorController;

//Returns true if the username and password match, otherwise return false
editorController.prototype.verifyLogin = async function(editorInput) {
	const doc = await this.model.findOne({username: editorInput.username}).exec();
    return (doc.passhash != undefined && bcrypt.compareSync(editorInput.password, doc.passhash));
};

editorController.prototype.auth = async function(req, res, next) {
	try {
		const doc = this.validateDocument(req.body);
		if (await this.verifyLogin(doc)) {
			const tk = jwt.sign({username: doc.username}, this.secret);
			res.json({token: tk});
		} else {
			//Unauthorized access
			res.status(401).json({error: "Bad username/password"});
		}
	} catch(ex) {
		res.status(401).json({error: ex.message});
	} finally {
		next();
	}
};




module.exports = editorController;