const mongoose = require("mongoose");
const zod = require("zod");

const researchSchema = mongoose.Schema({
	title: {type: String, required: true, unique: true},
    startDate: {type: Date},
	endDate: {type: Date, validate:{
        validator: function(v) {
            return v > startDate;
        }
    }},
    role: {type: String},
    description: {type: String},
    sponsor: {type: [String]},
    fundAmountUsd: {type: Number, min: 0}
});

const zodObject = zod.object({
    title: zod.string();
    startDate: zod.iso.date();
    endDate: zod.iso.date();
    role: zod.string();
    description: zod.string();
    sponsor: zod.array(zod.string());
    fundAmountUsd: zod.number();
});


const model = mongoose.model("Research", researchSchema);

module.exports = {model, zodObject};
