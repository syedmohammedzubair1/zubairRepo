import {Router} from "express";
import { deleteUsers, getOneUser, getUsers, postUsers, updateUser } from "../controllers/user.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const UserRouter = new Router();

<<<<<<< HEAD
employeeRouter.get("/users",isAuth, getUsers);
employeeRouter.get("/user/:id",isAuth, getOneUser);
employeeRouter.post("/user",isAuth, postUsers);
employeeRouter.delete("/user/:id",isAuth, deleteUsers);
employeeRouter.put("/user/:id",isAuth, updateUser);
=======
UserRouter.route("/users").get( isAuth, getUsers);
UserRouter.route("/user/:id").get( isAuth, getOneUser);
UserRouter.route("/user").post( isAuth, postUsers);
UserRouter.route("/user/:id").delete( isAuth, deleteUsers);
UserRouter.route("/user/:id").put( isAuth, updateUser);
>>>>>>> fb68908f05537bc58cf71935f078312e67779036


export default UserRouter;
