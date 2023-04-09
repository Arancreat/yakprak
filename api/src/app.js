import "./cfg.js";
import logger from "./utils/logger.js";
import chalk from 'chalk';
import express from "express";
import userRoute from "./lib/user/route.js";
import authRoute from "./lib/auth/route.js";

const loggerMiddleware = (req, res, next) => {
    logger.info(`${chalk.red(req.method)} "${req.originalUrl}" from remote address: "${req.ip}"`);
    next();
};

// parameters
const PORT = 8080;

// server init
const app = express();

// middlewares
app.use(express.json());
app.use(loggerMiddleware);

// routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

try {
    app.listen(PORT, () =>
        logger.info(`Server ready at http://localhost:${PORT}`)
    );
} catch (error) {
    logger.fatal(error);
}
