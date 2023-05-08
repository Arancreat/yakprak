import "./cfg.js";
import express from "express";
import { logger, loggerMiddleware } from "./utils/logger.js";
import db from "./database/config.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import traineeRoute from "./api/trainee/route.js";

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
        origin: [
            "http://localhost:3000",
            "https://localhost:3000",
        ],
    })
);
app.use(
    session({
        secret: "so secret that it's on github",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

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
