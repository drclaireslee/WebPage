import baseController from "./baseController.js"
import {publicationZod} from "../model/publicationModel.js"

/**
 * 
 * @extends baseController
 */
class publicationController extends baseController {
	/**
	 * create a publicationController
     */
	constructor() {
		super("Publication", publicationZod);
	}
}


export default publicationController;