import { Router } from "express";
import Controller from "./controller.js";

const userRoute = Router();

userRoute.get("/hello-world", Controller.helloWorld)
userRoute.get("/all", Controller.getAll)
userRoute.get("/:id", Controller.getById)

export default userRoute;