import mongoose from "mongoose";
import zod from "zod";

const editorSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    passhash: {type: String, minLength: 60, maxLength: 60, required: true},
    role: {type: String}    
});

const editorZod = {
    username: zod.string(),
    passhash: zod.string(),
    role: zod.string()
};

const editorModel = mongoose.model("Editor", editorSchema);


export {editorModel, editorZod};


