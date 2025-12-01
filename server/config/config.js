import dotenv from "dotenv";
dotenv.config();

const secret = process.env.SECRET;
const db = process.env.DB;
const origin = "https://iprahoo86xomtazb.public.blob.vercel-storage.com";

export {secret, db, origin};