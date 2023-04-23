import { Router } from "express";
import controller from "./controller.js";

const traineeRoute = Router();

traineeRoute.get("/all", controller.getAll);
traineeRoute.get("/:id", controller.getById);
traineeRoute.post('/signup', controller.signup);
traineeRoute.post('/login', controller.login);
traineeRoute.put("/:id", controller.update);

export default traineeRoute;
