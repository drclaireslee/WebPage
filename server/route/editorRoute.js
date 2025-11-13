const express = require("express");
const editorController = require("../controller/editorController.js");
const router  = express.Router();
const controller = new editorController();

router.post("/auth", controller.auth);

module.exports = router;
