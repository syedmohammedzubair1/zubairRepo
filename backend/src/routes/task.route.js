import {Router} from "express";
import { deleteTasks, getOneTask, getTasks, postTasks, updateTask } from "../controllers/task.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const taskRouter = new Router();

taskRouter.get("/tasks", getTasks);
taskRouter.get("/task/:id",isAuth, getOneTask);
taskRouter.post("/task",isAuth, postTasks);
taskRouter.delete("/task/:id",isAuth, deleteTasks);
taskRouter.put("/task/:id",isAuth, updateTask);


export default taskRouter;
