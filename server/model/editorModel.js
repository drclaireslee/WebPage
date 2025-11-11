const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");


const editorSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    passhash: {type: String, minLength: 60, maxLength: 60, required: true}    
});

//add methods to the model
editorSchema.statics.verify = async function(editorInput) {
    const doc = await this.findOne({username: editorInput.username}).exec();
    return (doc.passhash != undefined && bcrypt.compareSync(editorInput.password, doc.passhash));
};

editorSchema.statics.deleteByUsername = async function(usernameInput) {
    this.findOne({username: usernameInput}).deleteOne().exec();
};

editorSchema.statics.insert = async function(editorInput) {
    this.create(editorInput);
};


const editorModel = mongoose.model("Editor", editorSchema);

module.exports = editorModel;
