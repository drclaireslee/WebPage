import express from "express"
import researchController from "../controller/researchController.js"

const router = express.Router();
const controller = new researchController();

router.get("/all", controller.readAll.bind(controller));
router.get("/", controller.readFiltered.bind(controller));

router.post("/", controller.create.bind(controller));
router.patch("/:id", controller.update.bind(controller));
router.delete("/:id", controller.delete.bind(controller));


export default router;
