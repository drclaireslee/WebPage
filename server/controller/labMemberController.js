const jwt =  require("jsonwebtoken");
const zod = require("zod");
const mongoose = require("mongoose");

const baseController = require("./baseController.js");
const labMemberModel = require("../model/labMemberModel.js");

function labMemberController() {
	baseController.call(this, process.env.SECRET, labMemberModel.model, labMemberModel.zodObject);
};

labMemberController.prototype = Object.create(baseController.prototype);
labMemberController.prototype.constructor = labMemberController;

module.exports = labMemberController;
