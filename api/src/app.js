//import section
import express from "express";
import logger from "./utils/logger.js";

// parameters
const port = 4000;

// server init
const app = express();

// routers

// usages

try {
    app.listen(port, () => logger.info(`Server started on PORT = ${port}`));
} catch (error) {
    logger.fatal(error);
}
