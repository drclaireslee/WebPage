const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const zod = require("zod");

const editorSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    passhash: {type: String, minLength: 60, maxLength: 60, required: true}    
});

const editorZod = {
    username: zod.string(),
    passhash: zod.string()
};

const editorModel = mongoose.model("Editor", editorSchema);


module.exports = {editorModel, editorZod};


