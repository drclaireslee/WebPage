const express = require("express");
const publicationController = require("../controller/labMemberController.js");
const router = express.Router();
const controller = new publicationController();

router.get("/all", controller.getAll);

router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;