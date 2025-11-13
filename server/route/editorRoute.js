import express from "express"
import editorController from "../controller/editorController.js"

const router = express.Router();
const controller = new editorController();

router.post("/auth", controller.auth.bind(controller));

export default router;
