import baseController from "./baseController.js";
import {researchModel, researchZod} from "../model/researchModel.js"
import dotenv from "dotenv";
dotenv.config();

export default class researchController extends baseController {
	constructor() {
		super(process.env.SECRET, researchModel, researchZod);
	}
}
