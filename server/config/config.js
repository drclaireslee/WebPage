import dotenv from "dotenv";
dotenv.config();

const secret = process.env.SECRET;
const db = process.env.DB;
export {secret, db};