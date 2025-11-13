import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

//Routes
import labMemberRoute from "./route/labMemberRoute.js";
import editorRoute from "./route/editorRoute.js";
import publicationRoute from "./route/publicationRoute.js";
import researchRoute from "./route/researchRoute.js";


const port = process.env.PORT || 3000;
const app = express();


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
