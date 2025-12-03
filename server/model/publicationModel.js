import mongoose from "mongoose";
import zod from "zod";
import connectionHelper from "../helper/connectionHelper.js";
import DOMPurify from "isomorphic-dompurify";

const publicationSchema = mongoose.Schema({
    title: {type: String, unique: true, required: true},
    author: {type: [String]},
    url:  {type: String},
    abstract: {type: String}
});

const publicationZod = zod.object({
    _id: zod.string().transform(val => DOMPurify.sanitize(val)),
    title: zod.string().transform(val => DOMPurify.sanitize(val)),
    author: zod.string().transform(val => DOMPurify.sanitize(val)),
    url: zod.url().transform(val => DOMPurify.sanitize(val)),
    abstract: zod.string().transform(val => DOMPurify.sanitize(val))
});

const conn = await connectionHelper();

conn.model("Publication", publicationSchema);


export {publicationZod};