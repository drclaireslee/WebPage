import baseController from "./baseController.js";
import {labMemberModel, labMemberZod} from "../model/labMemberModel.js"

export default class labMemberController extends baseController {
	constructor() {
		super(process.env.SECRET, labMemberModel, labMemberZod);
	}
}
