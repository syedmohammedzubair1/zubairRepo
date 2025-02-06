<<<<<<< HEAD
import express, { urlencoded } from "express";
import cors from "cors";

=======
import express from "express";
import cors from "cors"
import employeeRouter from "./routes/user.route.js";
import "./database/dbconfig.js";
import dotenv from "dotenv";
dotenv.config()
>>>>>>> 0ca07411fc84c550f558fec51ea94e81c86462d8

const app = express();

app.use(express.json());
<<<<<<< HEAD

app.use(express.urlencoded({extended: true}));

app.use(cors())
=======
app.use(cors());
app.use("/api/v1",employeeRouter);


app.listen(process.env.PORT,()=>{
    console.log("server is running on port 4000");
});
>>>>>>> 0ca07411fc84c550f558fec51ea94e81c86462d8
