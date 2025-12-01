import express from "express"
import editorController from "../controller/editorController.js"
import accessUpdateUser from "../middleware/accessUpdateUser.js"
import accessAdmin from "../middleware/accessAdmin.js";
import auth from "../middleware/auth.js";

const router = express.Router();
const controller = new editorController();

router.get("/all", accessAdmin, controller.readAll.bind(controller));
router.get("/", accessAdmin, controller.readFiltered.bind(controller));

router.post("/auth", auth);
router.post("/auth/admin", auth);

router.post("/", accessAdmin, controller.create.bind(controller));

//router.patch("/:_id", controller.update.bind(controller));

router.delete("/:_id", accessAdmin, controller.delete.bind(controller));
router.patch("/user/:username", accessUpdateUser, controller.updateByUsername.bind(controller));
router.delete("/user/:username", accessAdmin, controller.deleteByUsername.bind(controller));

export default router;
