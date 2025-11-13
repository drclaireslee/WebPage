import express from "express"
import reserarchController from "../controller/researchController.js"

const router = express.Router();
const controller = new researchController();

router.get("/all", controller.getAll);

router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
