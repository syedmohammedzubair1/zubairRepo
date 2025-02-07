import { Router } from "express";
import {Login, validateEmail} from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const authRoutes = new Router();

authRoutes.route("/login").post(Login)
authRoutes.route("/validate-email").post(validateEmail)


export default authRoutes