import { Router } from "express";
import { 
    deleteContents, 
    getOneContent, 
    getContents, 
    postContents, 
    updateContent
} from "../controllers/content.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const contentRouter = new Router();

contentRouter.get("/contents", isAuth, getContents);
contentRouter.post("/content", isAuth, postContents);
contentRouter.get("/content/:id", isAuth, getOneContent);
contentRouter.delete("/content/:id", isAuth, deleteContents);
contentRouter.put("/content/:id", isAuth, updateContent);


export default contentRouter;
