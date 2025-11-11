const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema({
    title: {type: String, unique: true, required: true},
    author: {type: [String]},
    url:  {type: String},
    abstract: {type: String}
});


//Add methods to the model
publicationSchema.statics.getAll = async function() {
    return this.findOne({});
};

publicationSchema.statics.create = async function(publicationInput) {
    this.create(publicationInput);
};

publicationSchema.statics.deleteById = async function(idInput) {
    this.findById(idInput).deleteOne().exec();
};

publicationSchema.statics.updateById = async function(idInput, publicationInput) {
    this.findById(idInput).updateOne({$set: publicationInput}).exec();
};

const publicationModel = mongoose.model("Publication", publicationSchema);

module.exports = publicationModel;
