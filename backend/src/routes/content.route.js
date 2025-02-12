import { Router } from "express";
import { 
    updateAbout, 
    addService, 
    addProject, 
    updateContactUs, 
    updateLocation
} from "../controllers/content.controller.js";
import { isAuth, isAdmin } from "../middlewares/isAuth.js";

const contentRouter = new Router();

contentRouter.route('/content/about/:contentId')
    .put(isAdmin, isAuth, updateAbout);

contentRouter.route('/content/services/:contentId')
    .post(isAdmin, isAuth, addService);

contentRouter.route('/content/projects/:contentId')
    .post(isAdmin, isAuth, addProject);

contentRouter.route('/content/contact/:contentId')
    .put(isAdmin, isAuth, updateContactUs);

contentRouter.route('/content/locations/:contentId')
    .put(isAdmin, isAuth, updateLocation);

export default contentRouter;
