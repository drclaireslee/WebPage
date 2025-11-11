const editorModel = require("../model/editorModel.js");
const labMemberModel = require("../model/labMemberModel.js");
const publicationModel = require("../model/publicationModel.js");
const researchModel = require("../model/researchModel.js");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

async function auth(req, res) {
	try {
		if (await editorModel.verify(req.body)) {
			const tk = jwt.sign({username: req.body.username}, secret);
			res.json({token: tk});
		} else {
			//Unauthorized access
			res.status(401).json({error: "Bad username/password"});
		}
	} catch(ex) {
		res.status(401).json({error: ex.message});
	}
}


//Create
async function createLabMember(req, res) {
	try {
		payload = jwt.verify(req.headers["x-auth"], secret);
		await labMemberModel.create(req.body);
		res.send("OK");
	} catch(ex) {
		res.send("NOT OK");
	}
}

async function createPublication(req, res) {
	try {
		payload = jwt.verify(req.headers["x-auth"], secret);
		await publicationModel.create(req.body);
		res.send("OK");
	} catch(ex) {
		res.send("NOT OK");
	}
}

async function createResearch(req, res) {
	try {
		payload = jwt.verify(req.headers["x-auth"], secret);
		await researchModel.create(req.body);
		res.send("OK");
	} catch(ex) {
		res.send("NOT OK");
	}
}




//Delete
async function deleteLabMember(req, res) {
	try {
		payload = jwt.verify(req.headers["x-auth"], secret);
		await labMemberModel.deleteById(req.params.id);
		res.send("OK");
	} catch(ex) {
		res.send("NOT OK");
	}
}

async function deletePublication(req, res) {
	try {
		payload = jwt.verify(req.headers["x-auth"], secret);
		await publicationModel.deleteById(req.params.id);
		res.send("OK");
	} catch(ex) {
		res.send("NOT OK");
	}
}

async function deleteResearch(req, res) {
	try {
		payload = jwt.verify(req.headers["x-auth"], secret);
		await researchModel.deleteById(req.params.id);
		res.send("OK");
	} catch(ex) {
		res.send("NOT OK");
	}
}




//Modify
async function updateLabMember(req, res) {
	try {
		payload = jwt.verify(req.headers["x-auth"], secret);
		labMemberModel.updateById(req.params.id, req.body);
		res.send("OK");
	} catch(ex) {
		res.send("NOT OK");
	}
}

async function updatePublication(req, res) {
	try {
		payload = jwt.verify(req.headers["x-auth"], secret);
		publicationModel.updateById(req.params.id, req.body);
		res.send("OK");
	} catch(ex) {
		res.send("NOT OK");
	}
}

async function updateResearch(req, res) {
	try {
		payload = jwt.verify(req.headers["x-auth"], secret);
		researchModel.updateById(req.params.id, req.body);
		res.send("OK");
	} catch(ex) {
		res.send("NOT OK");
	}
}


module.exports = {auth, createLabMember, createPublication, createResearch, 
	deleteLabMember, deletePublication, deleteResearch, 
	updateLabMember, updateResearch, updatePublication};
