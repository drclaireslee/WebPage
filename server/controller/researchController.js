import jwt from "jsonwebtoken";
import zod from "zod";
import mongoose from "mongoose";
import baseController from "./baseController.js";
import {researchModel, researchZod} from "../model/researchModel.js"

export default class researchController extends baseController {
	constructor() {
		super(process.env.SECRET, researchModel, researchZod);
	}
}
