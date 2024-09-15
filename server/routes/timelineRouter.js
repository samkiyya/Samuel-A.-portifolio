import express from "express";
import {
  deleteTimeline,
  getAllTimelines,
  postTimeline,
  // updateTimeline,
} from "../controllers/timelineController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", postTimeline);
router.delete("/delete/:id",  deleteTimeline);
router.get("/getall", getAllTimelines);

export default router;
