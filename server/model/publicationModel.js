const mongoose = require("mongoose");
const zod = require("zod");

const publicationSchema = mongoose.Schema({
    title: {type: String, unique: true, required: true},
    author: {type: [String]},
    url:  {type: String},
    abstract: {type: String}
});

const zodObject = zod.object({
    title: zod.string(),
    author: zod.string(),
    url: zod.url(),
    abstract: zod.string()
})


const model = mongoose.model("Publication", publicationSchema);


module.exports = {model, zodObject};
