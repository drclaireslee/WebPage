import express from "express"
import publicationController from "../controller/publicationController.js"

const router = express.Router();
const controller = new publicationController();

router.get("/all", controller.readAll);

router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
