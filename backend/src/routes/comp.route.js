import {Router} from "express";
import { deleteCompanies, getOneCompany, getCompanies, postCompanies, updateCompany } from "../controllers/comp.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const companyRouter = new Router();

<<<<<<< HEAD
companyRouter.get("/companies", getCompanies);
companyRouter.get("/company/:id",isAuth, getOneCompany);
companyRouter.post("/company",isAuth, postCompanies);
companyRouter.delete("/company/:id",isAuth, deleteCompanies);
companyRouter.put("/company/:id",isAuth, updateCompany);
=======
companyRouter.route("/companies").get(getCompanies);
companyRouter.route("/company/:id").get(isAuth, getOneCompany);
companyRouter.route("/company").post(isAuth, postCompanies);
companyRouter.route("/company/:id").delete(isAuth, deleteCompanies);
companyRouter.route("/company/:id").put(isAuth, updateCompany);
>>>>>>> fb68908f05537bc58cf71935f078312e67779036


export default companyRouter;
