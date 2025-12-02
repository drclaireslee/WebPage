import express from "express";
import cors from "cors";
import corsOptions from "./config/corsOptions.js";
import helmetOptions from "./config/helmetOptions.js";
import errorHandler from "./middleware/errorHandler.js";
import helmet from "helmet";


//Routes
import labMemberRoute from "./route/labMemberRoute.js";
import editorRoute from "./route/editorRoute.js";
import publicationRoute from "./route/publicationRoute.js";
import researchRoute from "./route/researchRoute.js";


const app = express();

//Activate general security policies
app.use(helmet(helmetOptions));

//Enable CORS requests with specific options
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

//Disable finger printing
app.disable('x-powered-by');

// Middleware that parses HTTP requests with JSON body
app.use(express.json());

//Parses URL-encoded data in a request body and adds the parsed values to the req.body
app.use(express.urlencoded({extended: false}));

app.use(express.static("public"));

app.use("/api/labMember", labMemberRoute);
app.use("/api/editor", editorRoute);
app.use("/api/publication", publicationRoute);
app.use("/api/research", researchRoute);

app.use(errorHandler);

export default app;
