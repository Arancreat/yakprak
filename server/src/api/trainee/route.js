import { Router } from "express";
import controller from "./controller.js";
import requireAuth from "../jwt/middleware.js";

const traineeRoute = Router();

// traineeRoute.get("/all", requireAuth, controller.getAll);
traineeRoute.get("/id/:id", requireAuth, controller.getById);
traineeRoute.get("/currentUser", requireAuth, controller.getCurrentUser);
traineeRoute.post("/signup", controller.postSignup);
traineeRoute.post("/login", controller.postLogin);
traineeRoute.post("/upload-avatar", requireAuth, controller.postUploadAvatar);
traineeRoute.put("/update", requireAuth, controller.putUpdate);

export default traineeRoute;
