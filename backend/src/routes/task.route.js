import {Router} from "express";
import { deleteTasks, getOneTask, getTasks, postTasks, updateTask } from "../controllers/task.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const taskRouter = new Router();

taskRouter.route("/tasks").get(getTasks);
taskRouter.route("/task/:id").get(isAuth, getOneTask);
taskRouter.route("/task").post(isAuth, postTasks);
taskRouter.route("/task/:id").delete(isAuth, deleteTasks);
taskRouter.route("/task/:id").put(isAuth, updateTask);


export default taskRouter;
