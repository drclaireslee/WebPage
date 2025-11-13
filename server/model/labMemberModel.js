const mongoose = require("mongoose");
const zod = require("zod");

const labMemberSchema = mongoose.Schema({
        fullName: {type: String, required: true},
        type: {type: String, required: true},
        email: {type: String, unique: true},
        picture: {type: String},
        background: {type: [String]}
});

const zodObject = zod.object({
    fullName: zod.string(),
    type: zod.string(),
    email: zod.email(),
    picture: zod.url(),
    background: zod.array(zod.string())
})

const model = mongoose.model("LabMember", labMemberSchema);


module.exports = {model, zodObject};
