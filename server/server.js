const express = require("express");
const cors = require("cors");
const app = express();


const port = 3000;

//Routes
const labMemberRoute = require("./route/labMemberRoute.js");

//Enable all CORS requests
app.use(cors());

//Parses URL-encoded data in a request body and adds the parsed values to the req.body
app.use(express.urlencoded({extended: false}));

app.use("/api/labMember", labMemberRoute);

app.listen(port);