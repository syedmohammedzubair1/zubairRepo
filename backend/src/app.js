import express from "express";
import cors from "cors"
import employeeRouter from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js"
import "./database/dbconfig.js";
import dotenv from "dotenv";
import session from "express-session";
import passport from "./config/passportConfig.js";
import cookieParser from "cookie-parser";


dotenv.config()

const app = express();

app.use(cors())

app.use(cookieParser(process.env.SESSION_SECRET || 'default_cookie_secret'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'default_cookie_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'lax',
    }
  })
);


app.use(passport.initialize());


app.use("/api/v1",employeeRouter);
app.use("/api/v1",authRoutes);



app.listen(process.env.PORT,()=>{
    console.log("server is running on port 5000");
});