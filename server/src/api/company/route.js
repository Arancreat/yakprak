import { Router } from "express";
import controller from "./controller.js";
import requireAuth from "../jwt/middleware.js";

const companyRoute = Router();

companyRoute.get("/all", controller.getAll);
// companyRoute.get("/id/:id", requireAuth, controller.getById);
companyRoute.get("/currentUser", requireAuth, controller.getCurrentUser);
companyRoute.post("/signup", controller.postSignup);
companyRoute.post("/login", controller.postLogin);
companyRoute.post("/upload-avatar", requireAuth, controller.postUploadAvatar);
companyRoute.put("/update", requireAuth, controller.putUpdate);

export default companyRoute;
