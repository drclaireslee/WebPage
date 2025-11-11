const mongoose = require("mongoose");
mongoose.connect(process.env.DB);

const labMemberSchema = mongoose.Schema({
        fullName: {type: String, required: true},
        type: {type: String, required: true},
        email: {type: String, unique: true},
        picture: {type: String},
        background: {type: [String]}
});

//Add methods to the model
labMemberSchema.statics.getType = async function(typeInput) {
    return this.find({type: typeInput}).exec();
};

labMemberSchema.statics.getAll = async function() {
    return this.find({}).exec();
};

labMemberSchema.statics.create = async function(labMemberInput) {
    this.create(labMemberInput);
};

labMemberSchema.statics.deleteById = async function(idInput) {
    this.findById(idInput).deleteOne().exec();
};

labMemberSchema.statics.updateById = async function(idInput, labMemberInput) {
    this.findById(idInput).updateOne({$set: labMemberInput}).exec();
};


const labMemberModel = mongoose.model("LabMember", labMemberSchema);


module.exports = labMemberModel;
