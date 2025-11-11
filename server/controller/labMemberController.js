const labMemberModel = require("../model/labMemberModel.js")

async function getAll(req, res) {
	try {
		res.json(await labMemberModel.getAll());
	} catch(ex) {
		console.log(ex.message);
	}
}

module.exports = {getAll};
