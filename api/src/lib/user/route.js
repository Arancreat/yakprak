import { Router } from "express";
import controller from "./controller.js";

const userRoute = Router();

userRoute.get("/all", controller.getAll)
userRoute.get("/:id", controller.getById)
userRoute.put("/:id", controller.update)


export default userRoute;