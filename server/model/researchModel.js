import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import zod from "zod";


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

const researchZod = {
    title: zod.string(),
    startDate: zod.iso.date(),
    endDate: zod.iso.date(),
    role: zod.string(),
    description: zod.string(),
    sponsor: zod.array(zod.string()),
    fundAmountUsd: zod.number()
};


const researchModel = mongoose.model("Research", researchSchema);

export {researchModel, researchZod};
