import express from "express";
import logger from "./utils/logger.js";
import userRoute from "./lib/user/route.js";

// parameters
const port = 8080;

// server init
const app = express();

// middlewares
app.use("/api/user", userRoute);

try {
    app.listen(port, () => logger.info(`Server started on PORT = ${port}`));
} catch (error) {
    logger.fatal(error);
}
