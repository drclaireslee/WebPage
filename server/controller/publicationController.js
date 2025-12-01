import baseController from "./baseController.js"
import {publicationZod} from "../model/publicationModel.js"


export default class publicationController extends baseController {
	constructor() {
		super("Publication", publicationZod);
	}
}
