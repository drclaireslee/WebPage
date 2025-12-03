import mongoose from "mongoose";
import zod from "zod";
import connectionHelper from "../helper/connectionHelper.js";
import DOMPurify from "isomorphic-dompurify";

const editorSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    passhash: {type: String, minLength: 60, maxLength: 60, required: true},
    role: {type: String}    
});

const editorZod = zod.object({
    _id: zod.string().transform(val => DOMPurify.sanitize(val)),
    username: zod.string().transform(val => DOMPurify.sanitize(val)),
    passhash: zod.string().transform(val => DOMPurify.sanitize(val)),
    role: zod.string().transform(val => DOMPurify.sanitize(val))
});

const conn = await connectionHelper();

conn.model("Editor", editorSchema);


export {editorZod};


