
import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export default async function connectDB(){
    try {
        await mongoose.connect(MONGO_URL)
        console.log("Mongo DB Connected")
    } catch (error) {
        console.log("Connection failed",error)
    }
}