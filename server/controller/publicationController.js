const jwt =  require("jsonwebtoken");
const zod = require("zod");
const mongoose = require("mongoose");

const baseController = require("./baseController.js");
const publicationModel = require("../model/publicationModel.js");

function publicationController() {
	baseController.call(this, process.env.SECRET, publicationModel.model, publicationModel.zodObject);
};

publicationController.prototype = Object.create(baseController);
publicationController.prototype.constructor = publicationController;

module.exports = publicationController;