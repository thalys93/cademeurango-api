import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)

let database = mongoose.connection;

export default database;