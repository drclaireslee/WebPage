const editorModel = require("../model/editorModel.js");
const jwt = require("jwt-simple");
const secret = process.env.SECRET;

function auth(res, req) {
	try {
		if (editorModel.verify(req.body.username, req.body.password)) {
			const tk = jwt.encode({username: req.body.username}, secret);
			res.json({token: tk});
		} else {
			//Unauthorized access
			res.status(401).json({error: "Bas username/password"});
		}
	} catch(ex) {
		//respond with an error code
		console.log("Error has occured within editorController");
	}
}

async function deleteLabMember(res, req) {
	res.status(401);
}

module.exports = {auth, deleteLabMember};
