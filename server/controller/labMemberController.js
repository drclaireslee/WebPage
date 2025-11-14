import baseController from "./baseController.js";
import {labMemberModel, labMemberZod} from "../model/labMemberModel.js"
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

export default class labMemberController extends baseController {
	constructor() {
		super(process.env.SECRET, labMemberModel, labMemberZod);
	}

	//expects a list of object with _id attributes
	//appends a key named "imagePath" with a value of the path of an image relating to the _id in each object
	appendImagePath(memberList) {
		for (let i = 0; i < memberList.length; i++) {
			memberList[i]["imagePath"] = (fs.existsSync(`./public/img/${memberList[i]["_id"]}.jpeg`)) ? 
				(`/img/${memberList[i]["_id"]}.jpeg`) : `/img/undefined.jpeg`;
		}
	}

	async readFiltered(req, res) {
	    try {
	    	const doc = this.validateDocument(req.query);
	    	const memberList = await this.model.find(doc).lean().exec();
	    	this.appendImagePath(memberList);
	    	res.status(200).json(memberList);
	    } catch(ex) {
	    	this.errorHandler(res, ex);
	    }
	}

	async readAll(req, res) {
		try {
	    	const memberList = await this.model.find({}).lean().exec(); 
	    	this.appendImagePath(memberList);
	    	res.status(200).json(memberList);
	    } catch(ex) {
	    	this.errorHandler(res, ex);
	    }
	}
}
