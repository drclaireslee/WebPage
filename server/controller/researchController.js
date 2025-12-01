import baseController from "./baseController.js";
import {researchZod} from "../model/researchModel.js"


export default class researchController extends baseController {
	constructor() {
		super("Research", researchZod);
	}
}
