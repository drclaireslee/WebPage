import express from "express"
import publicationController from "../controller/publicationController.js"

const router = express.Router();
const controller = new publicationController();

router.get("/all", controller.readAll.bind(controller));
router.get("/", controller.readFiltered.bind(controller));

router.post("/", controller.create.bind(controller));
router.patch("/:_id", controller.update.bind(controller));
router.delete("/:_id", controller.delete.bind(controller));


export default router;