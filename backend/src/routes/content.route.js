import { Router } from "express";
import { 
<<<<<<< HEAD
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

=======
    createContent,
    addService, 
    addProject, 
    updateContactUs, 
    updateLocation,
    updateAboutSection,
    getContent
} from "../controllers/content.controller.js";

import { isAuth, isAdmin } from "../middlewares/isAuth.js";

const contentRouter = new Router();

contentRouter.route('/content').get(getContent);

contentRouter.route('/content')
    .post(isAuth, isAdmin, createContent);

contentRouter.route('/content/about/:contentId')
    .put(isAuth, isAdmin, updateAboutSection);

contentRouter.route('/content/services/:contentId')
    .post(isAuth, isAdmin,  addService);

contentRouter.route('/content/projects/:contentId')
    .post(isAuth, isAdmin, addProject);

contentRouter.route('/content/contact/:contentId')
    .put(isAuth, isAdmin, updateContactUs);

contentRouter.route('/content/locations/:contentId')
    .put(isAuth, isAdmin, updateLocation);
>>>>>>> fb68908f05537bc58cf71935f078312e67779036

export default contentRouter;
