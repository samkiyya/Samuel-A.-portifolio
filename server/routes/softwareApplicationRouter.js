import express from "express";
import {
  addNewApplication,
  deleteApplication,
  getAllApplications,
} from "../controllers/softwareApplicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add",  addNewApplication);
router.delete("/delete/:id",  deleteApplication);
router.get("/getall", getAllApplications);

export default router;
