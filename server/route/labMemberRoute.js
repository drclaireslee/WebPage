import express from "express"
import labMemberController from "../controller/labMemberController.js"

const router = express.Router();
const controller = new labMemberController();

router.get("/all", controller.readAll);

router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);


export default router;
