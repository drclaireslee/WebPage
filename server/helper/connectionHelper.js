//Abridged from https://mongoosejs.com/docs/8.x/docs/lambda.html
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let conn = null;
const uri = process.env.DB;

async function connectionHelper() {
  if (conn == null) {
    conn = mongoose.createConnection(uri, {
      serverSelectionTimeoutMS: 5000
    });
    await conn.asPromise();
  }
  return conn;
};

export default connectionHelper;