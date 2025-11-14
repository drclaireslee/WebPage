import express from "express"
import labMemberController from "../controller/labMemberController.js"
import multer from "multer"

const store = multer.diskStorage({
	destination: "./public/img",
	filename: function(req, file, cb) {
		cb(null, req.body._id + ".jpeg");
	}
});

const imageFilter = function(req, file, cb) {
	
	cb(null, true);
};

const upload = multer({
	storage: store,
	fileFilter: imageFilter,
});

const router = express.Router();
const controller = new labMemberController();

router.get("/all", controller.readAll.bind(controller));

router.post("/", upload.single("memberImage"), controller.create.bind(controller));
router.patch("/:id", controller.update.bind(controller));
router.delete("/:id", controller.delete.bind(controller));


export default router;
