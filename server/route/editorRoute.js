const express = require("express");
const router  = express.Router();
const editorController = require("../controller/editorController.js");

router.post("/auth", editorController.auth);
router.delete("/:id", editorController.deleteLabMember);
router.put("/:id", editorController.modifyLabMember);


module.exports = router;
