import {Router} from "express";
import { deleteUsers, getOneUser, getUsers, postUsers, updateUser } from "../controllers/user.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const employeeRouter = new Router();

employeeRouter.get("/users", getUsers);
employeeRouter.get("/user/:id",isAuth, getOneUser);
employeeRouter.post("/user",isAuth, postUsers);
employeeRouter.delete("/user/:id",isAuth, deleteUsers);
employeeRouter.put("/user/:id",isAuth, updateUser);


export default employeeRouter;
