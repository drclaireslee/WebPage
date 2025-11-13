const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();



const port = process.env.PORT || 3000;

//Routes
const labMemberRoute = require("./route/labMemberRoute.js");
const editorRoute = require("./route/editorRoute.js");
const publicationRoute = require("./route/publicationRoute.js");
const researchRoute = require("./route/researchRoute.js");


//Enable all CORS requests
app.use(cors());

//Parses URL-encoded data in a request body and adds the parsed values to the req.body
app.use(express.urlencoded({extended: false}));

// Middleware that parses HTTP requests with JSON body
app.use(express.json());

app.use("/api/labMember", labMemberRoute);
app.use("/api/editor", editorRoute);
app.use("/api/publication", publicationRoute);
app.use("/api/research", researchRoute);

app.use(express.static("public"));

async function startServer() {
	try {
		await mongoose.connect(process.env.DB);
		app.listen(port, () => {
			console.log(`Listen on port: ${port}`);
		});
	} catch(ex) {
		console.log(ex.message);
		process.exit(1);
	}
}
startServer();
