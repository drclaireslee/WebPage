import baseController from "./baseController.js";
import {researchZod} from "../model/researchModel.js"

/**
 *
 * @extends baseController
 */
class researchController extends baseController {
	/**
	 * create a publicationController
     */
	constructor() {
		super("Research", researchZod);
	}
}


export default researchController;