import bcrypt from "bcryptjs";
import zod from "zod";
import baseController from "./baseController.js";
import {editorZod} from "../model/editorModel.js"
import customError from "../middleware/customError.js";



/** 
 * @external express 
 * @see {@link https://expressjs.com/}
 * 
 */

/**
 * 
 * @extends baseController
 * 
 */
class editorController extends baseController {
	/**
	 * create an editorController
     */
	constructor() {
		super("Editor", editorZod);
		this.updateZodCreator = zod.object({passhash: zod.string()});
	}

	//Assume req.body.passhash contains a plain text password
	async create(req, res) {
		req.body.passhash = bcrypt.hashSync(req.body.passhash, bcrypt.genSaltSync(10));
		return super.create(req, res);
	}

	/**
	 * Delete a document/object specified by req.params.username.
	 * Sends a JSON response object containing a message that the 
	 * document/object is deleted.
	 * @param {external:express.req} req - an express request object
	 * @param {external:express.res} res - an express response object
	 * @param {external:express.next} next - an express next object
	 * @return {Promise<Object>} A JSON response object containing a message.
	 * @example
	 * 
	 * const controller = new editorController();
	 * app.post("/", controller.deleteByUsername.bind(controller));
	 * 
	 * //Assume editor table has {{username: Bob, passhash: oldhash}}
	 * //Assume req.params.username = "Bob"
	 * //The JSON response will be {message: "Document deleted successfully"}
	 * //The editor table will have {}
	 */
	async deleteByUsername(req, res, next) {
		const model = await this.getModel();
		const result = await model.findOne({username: req.params.username}).deleteOne().exec();
		if (result.deletedCount == 0) {
			next(new customError(404, "Not Found: Document does not exist"));
		} else {
			return res.status(200).json({message: "Document deleted successfully"});
		}
	} 

	async update(req, res) {
		this.updateZodCreator.parse(req.body);
		req.body.passhash = bcrypt.hashSync(req.body.passhash, bcrypt.genSaltSync(10));
		return super.update(req, res);
	}


	/**
	 * Update a document/object by setting the properties and values of the req.body or request body
	 * to the document/object specified by req.params.username. 
	 * The properties of the req.body that don't match the properties of the 
	 * document/object are stripped. Sends a JSON response object containing a
	 * message that the document/object is updated.
	 * @param {external:express.req} req - an express request object
	 * @param {external:express.res} res - an express response object
	 * @param {external:express.next} next - an express next object
	 * @returns {Promise<Object>} A JSON response object containing a message.
	 * @example
	 * const controller = new editorController();
	 * app.post("/", controller.updateByUsername.bind(controller));
	 * 
	 * //Assume editor table has {{username: Bob, passhash: oldhash}}
	 * //Assume req.body = {passhash: newpassword}
	 * //Assume req.params.username = "Bob"
	 * //The JSON response will be {message: "Document updated successfully"}
	 * //The editor table has {{username: Bob, passhash: newhash}}
	 */
	async updateByUsername(req, res, next) {
		this.updateZodCreator.parse(req.body);
		const model = await this.getModel();
		const result = await model.findOne({username: req.params.username}).updateOne({$set: {passhash: bcrypt.hashSync(req.body.passhash, bcrypt.genSaltSync(10))}}).exec();
		if (result.matchedCount == 0) {
			next(new customError(404, "Not Found: Document does not exist"));
		} else {
			return res.status(200).json({message: "Document updated successfully"});
		}
	}
}

export default editorController;