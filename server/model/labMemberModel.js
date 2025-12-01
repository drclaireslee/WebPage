import mongoose from "mongoose";
import zod from "zod";
import connectionHelper from "../helper/connectionHelper.js";

//From: https://zod.dev/api#urls
const httpUrl = zod.url({
  protocol: /^https?$/,
  hostname: zod.regexes.domain
});


const labMemberSchema = mongoose.Schema({
        fullName: {type: String, required: true},
        type: {type: String, required: true},
        email: {type: String},
        imageURL: {type: String},
        background: {type: [String]}
});

const labMemberZod = zod.object({
    fullName: zod.string(),
    type: zod.string(),
    email: zod.email(),
    imageURL: httpUrl,
    background: zod.array(zod.string())
});
const conn = await connectionHelper();

conn.model("LabMember", labMemberSchema);

export {labMemberZod};
