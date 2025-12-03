import mongoose from "mongoose";
import zod from "zod";
import connectionHelper from "../helper/connectionHelper.js";
import DOMPurify from "isomorphic-dompurify";

const labMemberSchema = mongoose.Schema({
        fullName: {type: String, required: true},
        type: {type: String, required: true},
        email: {type: String},
        imageURL: {type: String},
        background: {type: [String]}
});

const labMemberZod = zod.object({
    _id: zod.string().transform(val => DOMPurify.sanitize(val)),
    fullName: zod.string().transform(val => DOMPurify.sanitize(val)),
    type: zod.string().transform(val => DOMPurify.sanitize(val)),
    email: zod.email().transform(val => DOMPurify.sanitize(val)),
    imageURL: zod.httpUrl().transform(val => DOMPurify.sanitize(val)),
    background: zod.array(zod.string().transform(val => DOMPurify.sanitize(val)))
});
const conn = await connectionHelper();

conn.model("LabMember", labMemberSchema);

export {labMemberZod};
