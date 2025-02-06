import express from "express";
import cors from "cors"
import employeeRouter from "./routes/user.route.js";
import "./database/dbconfig.js";
import dotenv from "dotenv";
dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1",employeeRouter);


app.listen(process.env.PORT,()=>{
    console.log("server is running on port 4000");
});
