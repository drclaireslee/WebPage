import mongoose from "mongoose";
import zod from "zod";
import connectionHelper from "../helper/connectionHelper.js";

const editorSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    passhash: {type: String, minLength: 60, maxLength: 60, required: true},
    role: {type: String}    
});

const editorZod = zod.object({
    _id: zod.string(),
    username: zod.string(),
    passhash: zod.string(),
    role: zod.string()
});

const conn = await connectionHelper();

conn.model("Editor", editorSchema);


export {editorZod};


