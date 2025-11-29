import express from "express"
import editorController from "../controller/editorController.js"

const router = express.Router();
const controller = new editorController();

router.get("/all", controller.readAll.bind(controller));
router.get("/", controller.readFiltered.bind(controller));


router.post("/auth", controller.auth.bind(controller));
router.post("/auth/admin", controller.authAdmin.bind(controller));

router.post("/", controller.create.bind(controller));

router.patch("/:_id", controller.update.bind(controller));
router.delete("/:_id", controller.delete.bind(controller));
router.patch("/user/:username", controller.updateByUsername.bind(controller));
router.delete("/user/:username", controller.deleteByUsername.bind(controller));

export default router;
