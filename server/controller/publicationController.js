import baseController from "./baseController.js";
import {publicationModel, publicationZod} from "../model/publicationModel.js"
import dotenv from "dotenv";
dotenv.config();

export default class publicationController extends baseController {
	constructor() {
		super(process.env.SECRET, publicationModel, publicationZod);
	}
}
