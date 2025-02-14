import { Router } from "express";
import { deleteProject, getProject, postProject } from "../controllers/project.controller.js";
let project = new Router();

project.get("/project",getProject);
project.post("/project",postProject);
project.delete("/project",deleteProject);
export default project;