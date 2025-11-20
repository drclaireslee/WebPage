import mongoose from "mongoose";
import zod from "zod";

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

const labMemberModel = mongoose.model("LabMember", labMemberSchema);


export {labMemberModel, labMemberZod};
