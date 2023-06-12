import "./cfg.js";
import express from "express";
import { logger, loggerMiddleware } from "./utils/logger.js";
import db from "./database/config.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import traineeRoute from "./api/trainee/route.js";
import resumeRoute from "./api/resume/route.js";
import companyRoute from "./api/company/route.js";
import sendedResumeRoute from "./api/sendedResume/route.js";

// parameters
const PORT = 8080;

// server init
const app = express();

// middlewares
app.use(express.json());
app.use(loggerMiddleware);
app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000", "https://localhost:3000"],
    })
);
app.use("/files", express.static("storage"));
app.use(cookieParser());

// routes
app.use("/api/trainee", traineeRoute);
app.use("/api/company", companyRoute);
app.use("/api/resume", resumeRoute);
app.use("/api/sendedResume", sendedResumeRoute);

db.sync();

try {
    app.listen(PORT, () =>
        logger.info(`Server ready at http://localhost:${PORT}`)
    );
} catch (error) {
    logger.fatal(error);
}
