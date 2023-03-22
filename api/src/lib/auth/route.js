import { Router } from "express";
import controller from "./controller.js";

const authRoute = Router();

authRoute.post('/signup', controller.signup);
authRoute.post('/login', controller.login);

export default authRoute;