//Abridged from https://mongoosejs.com/docs/8.x/docs/lambda.html
import mongoose from "mongoose";
import {db} from "./config.js"

let conn = null;
const uri = db

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