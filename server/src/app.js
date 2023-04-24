import "./cfg.js";
import express from "express";
import { logger, loggerMiddleware } from "./utils/logger.js";
import db from "./database/config.js";
import traineeRoute from "./api/trainee/route.js";

// parameters
const PORT = 8080;

// server init
const app = express();

// middlewares
app.use(express.json());
app.use(loggerMiddleware);

// routes
app.use("/api/trainee", traineeRoute);

db.sync();

try {
    app.listen(PORT, () =>
        logger.info(`Server ready at http://localhost:${PORT}`)
    );
} catch (error) {
    logger.fatal(error);
}
