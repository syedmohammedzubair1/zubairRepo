import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

// Check if MONGO_URI is properly loaded
console.log("🔍 Checking MONGO_URI:", process.env.MONGO_URI);


mongoose.connect(process.env.MONGODB_URL)
.then(() =>{
    console.log("DB Connected");
})
.catch(e =>{
    console.log(e)
})