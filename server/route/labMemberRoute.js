import express from "express"
import labMemberController from "../controller/labMemberController.js"
import multer from "multer"

const store = multer.diskStorage({
	destination: "./public/img",
	filename: function(req, file, cb) {
		cb(null, "temp");
	}
});

const imageFilter = function(req, file, cb) {
	switch (file.mimetype) {
	case "image/jpeg":
	case "image/png":
	case "image/webp":
		cb(null, true);
		break;
	default:
		cb(null, false);
	}
};

const limiters = {
	files: 1,
	fileSize: 1e7
};

const upload = multer({
	storage: store,
	fileFilter: imageFilter,
	limits: limiters
});

const router = express.Router();
const controller = new labMemberController();

router.get("/all", controller.readAll.bind(controller));
router.get("/", controller.readFiltered.bind(controller));

router.post("/", upload.single("labMemberImage"), controller.create.bind(controller));
router.patch("/:_id", upload.single("labMemberImage"), controller.update.bind(controller));
router.delete("/:_id", controller.delete.bind(controller));


export default router;
