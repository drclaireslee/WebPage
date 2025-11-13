import mongoose from "mongoose";
import zod from "zod";

const publicationSchema = mongoose.Schema({
    title: {type: String, unique: true, required: true},
    author: {type: [String]},
    url:  {type: String},
    abstract: {type: String}
});

const publicationZod = {
    title: zod.string(),
    author: zod.string(),
    url: zod.url(),
    abstract: zod.string()
};


const publicationModel = mongoose.model("Publication", publicationSchema);


export {publicationModel, publicationZod};
