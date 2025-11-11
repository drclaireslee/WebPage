require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");


const port = process.env.PORT || 3000;

//Routes
const labMemberRoute = require("./route/labMemberRoute.js");
const editorRoute = require("./route/editorRoute.js");


//Enable all CORS requests
app.use(cors());

//Parses URL-encoded data in a request body and adds the parsed values to the req.body
app.use(express.urlencoded({extended: false}));

// Middleware that parses HTTP requests with JSON body
app.use(express.json());

app.use("/api/labMember", labMemberRoute);
app.use("/api/editor", editorRoute);

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
