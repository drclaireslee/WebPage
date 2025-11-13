import jwt from "jsonwebtoken";
import zod from "zod";
import mongoose from "mongoose";
import baseController from "./baseController.js";
import {publicationModel, publicationZod} from "../model/publicationModel.js"

export default class publicationController extends baseController {
	constructor() {
		super(process.env.SECRET, publicationModel, publicationZod);
	}
}
