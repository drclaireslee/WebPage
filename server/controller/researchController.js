const jwt =  require("jsonwebtoken");
const zod = require("zod");
const mongoose = require("mongoose");

const baseController = require("./baseController.js");
const researchModel = require("../model/researchModel.js");

function researchController() {
	baseController.call(this. process.env.SECRET, researchModel.model, researchModel.zodObject);
};

researchController.prototype = Object.create(baseController);
researchController.prototype.constructor = researchController;

module.exports = researchController;