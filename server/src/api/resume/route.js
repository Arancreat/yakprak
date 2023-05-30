import { Router } from "express";
import controller from "./controller.js";
import requireAuth from "../jwt/middleware.js";

const resumeRoute = Router();

// resumeRoute.get("/all", requireAuth, controller.getAll);
resumeRoute.get("/traineeId/:traineeId", requireAuth, controller.getResumeByTraineeId);
resumeRoute.get("/resumeId/:resumeId", requireAuth, controller.getEducationByResumeId);
resumeRoute.post("/create", controller.postSignup);
resumeRoute.put("/update", controller.putUpdate);

export default resumeRoute;
