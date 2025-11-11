const mongoose = require("mongoose");

const researchSchema = mongoose.Schema({
	startDate: {type: Date},
	endDate: {type: Date, validate:{
        validator: function(v) {
            return v > startDate;
        }
    }},
    role: {type: String},
    title: {type: String, required: true, unique: true},
    description: {type: String},
    sponsor: {type: [String]}
});

researchSchema.statics.getAll = async function() {
    return this.find({});
};

researchSchema.statics.create = async function(researchInput) {
    this.create(researchInput);
};

researchSchema.statics.deleteById = async function(idInput) {
    this.findById(idInput).deleteOne().exec();
};

researchSchema.statics.updateById = async function(idInput, researchNew) {
    this.findById(idInput).updateOne({$set: researchNew}).exec();
};

const researchModel = mongoose.model("Research", researchSchema);

module.exports = researchModel;
