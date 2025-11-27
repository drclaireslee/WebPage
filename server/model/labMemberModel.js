import mongoose from "mongoose";
import zod from "zod";
import connectionHelper from "../helper/connectionHelper.js";

const labMemberSchema = mongoose.Schema({
        fullName: {type: String, required: true},
        type: {type: String, required: true},
        picture: {type: String},
        background: {type: [String]}
});

const labMemberZod = zod.object({
    fullName: zod.string(),
    type: zod.string(),
    email: zod.email(),
    background: zod.array(zod.string())
});
const conn = await connectionHelper();

conn.model("LabMember", labMemberSchema);

export {labMemberZod};
