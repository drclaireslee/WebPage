const express = require("express");
const router  = express.Router();
const editorController = require("../controller/editorController.js");

router.post("/auth", editorController.auth);

router.delete("/delete/:id", editorController.deleteLabMember);


module.exports = router;
