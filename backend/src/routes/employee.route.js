import {Router} from "express";
import { getSalaryAndBonusData, updateSalaryOrBonus } from "../controllers/employee.controller.js";
import { generateLastMonthInvoice } from "../controllers/eInvoice.controller.js";

const empRouter = new Router();

empRouter.route("/update-emp-payment").put(updateSalaryOrBonus)

empRouter.route("/emp-payment-history").get(getSalaryAndBonusData)

empRouter.route("/emp-invoice").get(generateLastMonthInvoice)

export default empRouter;