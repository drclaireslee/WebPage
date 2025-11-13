const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const zod = require("zod");

const editorSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    passhash: {type: String, minLength: 60, maxLength: 60, required: true},
    role: {type: String}    
});

const zodObject = {
    username: zod.string(),
    passhash: zod.string(),
    role: zod.string()
};

const model = mongoose.model("Editor", editorSchema);


module.exports = {model, zodObject};


