const express = require("express");
const labMemberController = require("../controller/labMemberController.js");
const router = express.Router();

router.get("/all", labMemberController.getAll);

module.exports = router;
