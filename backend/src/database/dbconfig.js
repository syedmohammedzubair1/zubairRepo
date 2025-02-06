import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()


mongoose.connect(process.env.MONGODB_URL)
.then(() =>{
    console.log("DB Connected");
})
.catch(e =>{
    console.log(e)
})