import { Router } from "express";
import controller from "./controller.js";
import requireAuth from "../jwt/middleware.js";

const sendedResumeRoute = Router();

sendedResumeRoute.get("/byResume", requireAuth, controller.getByResume);
sendedResumeRoute.get("/byJwt", requireAuth, controller.getByJwt);
sendedResumeRoute.put("/send", requireAuth, controller.send);
sendedResumeRoute.put("/accept", requireAuth, controller.accept);
sendedResumeRoute.delete("/decline", requireAuth, controller.decline);

export default sendedResumeRoute;
