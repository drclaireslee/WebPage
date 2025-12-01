import customError from "../middleware/customError.js";
import connectionHelper from "../helper/connectionHelper.js";

/** 
 * @class baseController
 * 
*/
export default class baseController {

	constructor(modelName, zodSchema) {
		this.modelName = modelName;
		this.zodSchema = zodSchema;
	}

	/**
     * Sanitizes a document object against the defined schema.
     * This method treats all schema fields as optional (partial) and strips
     * any properties in the `doc` that are not defined in the schema.
	 * @method
	 * @memberof validateDocument#
     * @param {Object} doc - The input object to validate and sanitize.
     * @returns {Object} A new object containing only the valid, known fields.
     * @throws {ZodError} If validation fails on existing fields.
     */
	validateDocument(doc) {
		return this.zodSchema.partial().parse(doc);
	}

	async getModel() {
		const conn = await connectionHelper();
		return await conn.model(this.modelName);
	}
	
	async readAll(req, res) {
		const model = await this.getModel();
	    return res.status(200).json(await model.find({}).exec());
	}

	async readFiltered(req, res) {
		const model = await this.getModel();
	    const doc = this.validateDocument(req.query);
	    return res.status(200).json(await model.find(doc).exec());
	}

	async create(req, res) {
		const model = await this.getModel();
	    const doc = this.validateDocument(req.body);
	    const createdDoc = await model.create(doc);
	    return res.status(201).json(createdDoc);
	}

	async delete(req, res) {
		const model = await this.getModel();
	    const result = await model.findById(req.params._id).deleteOne().exec();
	    if (result.deletedCount == 0) {
			throw new customError(404, "Not Found: Document does not exist");
	    } else {
	    	return res.status(200).json({message: "Document deleted successfully"});
	    }
	}

	async update(req, res) {
		const model = await this.getModel();
	    const doc = this.validateDocument(req.body);
	    const result = await model.findById(req.params._id).updateOne({$set: doc}).exec();
	    if (result.matchedCount == 0) {
	    	throw new customError(404, "Not Found: Document does not exist");
	    } else {
	    	return res.status(200).json({message: "Document updated successfully"});
	    }
	}
}
