import express from "express";
import { createJob, getJobs } from "../controllers/jobController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/", auth, createJob);
router.get("/", getJobs);

export default router;
