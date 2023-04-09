import "./env.js"
import express from "express";
import logger from "./utils/logger.js";
import userRoute from "./lib/user/route.js";
import authRoute from "./lib/auth/route.js";


// parameters
const PORT = 8080;

// server init
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

try {
    app.listen(PORT, () => logger.info(`Server started on PORT = ${PORT}`));
} catch (error) {
    logger.fatal(error);
}
