const express = require("express");
const editorController = require("../controller/editorController.js");
const router  = express.Router();

router.post("/auth", editorController.auth);

//create
router.post("/labmember", editorController.createLabMember);
router.post("/publication", editorController.createPublication);
router.post("/research", editorController.createResearch);

//update
router.patch("/labmember/:id", editorController.updateLabMember);
router.patch("/publication/:id", editorController.updatePublication)
router.patch("research/:id", editorController.updateResearch);

//delete
router.delete("labmember/:id", editorController.deleteLabMember);
router.delete("publication/:id", editorController.deletePublication);
router.delete("research/:id", editorController.deleteResearch);



module.exports = router;
