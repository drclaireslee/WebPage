import dotenv from "dotenv";
dotenv.config();

const secret = process.env.SECRET;
const db = process.env.DB;
const origin = "https://drclaireslee-backend.vercel.app";

export {secret, db, origin};