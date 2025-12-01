import express from "express"
import publicationController from "../controller/publicationController.js"
import access from "../middleware/access.js";

const router = express.Router();
const controller = new publicationController();

router.get("/all", controller.readAll.bind(controller));
router.get("/", controller.readFiltered.bind(controller));

router.post("/", access, controller.create.bind(controller));
router.patch("/:_id", access, controller.update.bind(controller));
router.delete("/:_id", access, controller.delete.bind(controller));


export default router;