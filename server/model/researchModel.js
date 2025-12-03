import mongoose from "mongoose";
import zod from "zod";
import connectionHelper from "../helper/connectionHelper.js";
import DOMPurify from "isomorphic-dompurify";

const researchSchema = mongoose.Schema({
	title: {type: String, required: true, unique: true},
    startDate: {type: Date},
	endDate: {type: Date, validate:{
        validator: function(v) {
            if (!this.startDate) {
                return true;
            }
            return v > this.startDate;
        }
    }},
    role: {type: String},
    description: {type: String},
    sponsor: {type: [String]},
    fundAmountUsd: {type: Number, min: 0}
});

const researchZod = zod.object({
    _id: zod.string().transform(val => DOMPurify.sanitize(val)),
    title: zod.string().transform(val => DOMPurify.sanitize(val)),
    startDate: zod.iso.date().transform(val => DOMPurify.sanitize(val)),
    endDate: zod.iso.date().transform(val => DOMPurify.sanitize(val)),
    role: zod.string().transform(val => DOMPurify.sanitize(val)),
    description: zod.string().transform(val => DOMPurify.sanitize(val)),
    sponsor: zod.array(zod.string()).transform(val => DOMPurify.sanitize(val)),
    fundAmountUsd: zod.number().transform(val => DOMPurify.sanitize(val))
});

const conn = await connectionHelper();
conn.model("Research", researchSchema);

export {researchZod};
