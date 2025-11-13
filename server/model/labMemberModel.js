import mongoose from "mongoose";
import zod from "zod";

const labMemberSchema = mongoose.Schema({
        fullName: {type: String, required: true},
        type: {type: String, required: true},
        email: {type: String},
        picture: {type: String},
        background: {type: [String]}
});

const labMemberZod = {
    fullName: zod.string(),
    type: zod.string(),
    email: zod.email(),
    picture: zod.url(),
    background: zod.array(zod.string())
};

const labMemberModel = mongoose.model("LabMember", labMemberSchema);


export {labMemberModel, labMemberZod};
