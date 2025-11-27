import baseController from "./baseController.js";
import {researchZod} from "../model/researchModel.js"
import dotenv from "dotenv";
dotenv.config();

export default class researchController extends baseController {
	constructor() {
		super(process.env.SECRET, "Research", researchZod);
	}
}
