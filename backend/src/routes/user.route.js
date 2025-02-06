import {Router} from "express";
import { deleteUsers, getOneUser, getUsers, postUsers, updateUser } from "../controllers/user.controller.js";

const employeeRouter = new Router();

employeeRouter.get("/employees",getUsers);
employeeRouter.get("/user/:id",getOneUser);
employeeRouter.post("/user",postUsers);
employeeRouter.delete("/user/:id",deleteUsers);
employeeRouter.put("/user/:id",updateUser);


export default employeeRouter;
