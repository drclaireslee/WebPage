//Abridged from https://mongoosejs.com/docs/8.x/docs/lambda.html
import mongoose from "mongoose";
import {db} from "../config/config.js"

let conn = null;
const uri = db


/** 
 * @external mongoose
 * @see {@link https://mongoosejs.com/}
 */

/**
 * @function connectionHelper
 * Returns a connection to the database
 * @return {external:mongoose.Connection}
 */
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