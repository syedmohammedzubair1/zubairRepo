import { Router } from "express";
import { deletePerformance, getOnePerformance, getPerformances, postPerformance, updatePerformance } from "../controllers/performance.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const performanceRouter = Router();

performanceRouter.get("/performances", isAuth, getPerformances);
performanceRouter.get("/performance/:id", isAuth, getOnePerformance);
performanceRouter.post("/performance", isAuth, postPerformance);
performanceRouter.delete("/performance/:id", isAuth, deletePerformance);
performanceRouter.put("/performance/:id", isAuth, updatePerformance);

export default performanceRouter;
