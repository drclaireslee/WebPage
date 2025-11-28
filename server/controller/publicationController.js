import baseController from "./baseController.js"
import {publicationZod} from "../model/publicationModel.js"
import dotenv from "dotenv"
dotenv.config();

export default class publicationController extends baseController {
	constructor() {
		super(process.env.SECRET, "Publication", publicationZod);
	}
}
