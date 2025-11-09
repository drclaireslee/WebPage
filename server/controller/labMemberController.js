const labMemberModel = require("../model/labMemberModel.js")

function getAll(req, res) {
	try {
		res.json(labMemberModel.getAll());
	} catch(ex) {
		console.log(ex.message);
	}
}

module.exports = {getAll};