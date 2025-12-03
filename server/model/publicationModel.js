import mongoose from "mongoose";
import zod from "zod";
import connectionHelper from "../helper/connectionHelper.js";


const publicationSchema = mongoose.Schema({
    title: {type: String, unique: true, required: true},
    author: {type: [String]},
    url:  {type: String},
    abstract: {type: String}
});

const publicationZod = zod.object({
    _id: zod.string(),
    title: zod.string(),
    author: zod.string(),
    url: zod.url(),
    abstract: zod.string()
});

const conn = await connectionHelper();

conn.model("Publication", publicationSchema);


export {publicationZod};