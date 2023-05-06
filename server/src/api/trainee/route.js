import { Router } from "express";
import controller from "./controller.js";

const traineeRoute = Router();

traineeRoute.get("/all", controller.getAll);
traineeRoute.get("/:id", controller.getById);
traineeRoute.post('/signup', controller.postSignup);
traineeRoute.post('/login', controller.postLogin);
traineeRoute.put("/:id", controller.putUpdate);

export default traineeRoute;
