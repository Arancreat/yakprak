import { Router } from "express";
import controller from "./controller.js";
import requireAuth from "../jwt/middleware.js";

const resumeRoute = Router();

// resumeRoute.get("/all", requireAuth, controller.getAll);
resumeRoute.get("/getCurrentTraineeResume", requireAuth, controller.getCurrentTraineeResume);
resumeRoute.get("/getResume/:resumeId", requireAuth, controller.getByResumeId);
resumeRoute.put("/update", controller.putUpdate);

export default resumeRoute;
