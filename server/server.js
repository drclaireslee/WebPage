require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();


const port = process.env.PORT || 3000;

//Routes
const labMemberRoute = require("./route/labMemberRoute.js");
const editorRoute = require("./route/editorRoute.js");

//Enable all CORS requests
app.use(cors());

//Parses URL-encoded data in a request body and adds the parsed values to the req.body
app.use(express.urlencoded({extended: false}));

app.use("/api/labMember", labMemberRoute);
app.use("/api/editor", editorRoute);

app.listen(port, () => {
	console.log(`Listen on port: ${port}`);
});
