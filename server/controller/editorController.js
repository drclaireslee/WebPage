const editorModel = require("../model/editorModel.js");
const jwt = require("jwt-simple");
const secret = process.env.SECRET;

async function auth(req, res) {
	try {
		if (await editorModel.verify(req.body.username, req.body.password)) {
			const tk = jwt.encode({username: req.body.username}, secret);
			res.json({token: tk});
		} else {
			//Unauthorized access
			res.json({error: "Bad username/password"});
		}
	} catch(ex) {
		res.send(ex.message)
	}
}

async function deleteLabMember(req, res) {
	try {

	} catch(ex) {
		console.log();
	}
}

async function createLabMember(req, res) {
	try {

	} catch(ex) {
		console.log();
	}
}

async function modifyLabMember(req, res) {
	try {

	} catch(ex) {
		console.log();
	}
}


module.exports = {auth, deleteLabMember};
