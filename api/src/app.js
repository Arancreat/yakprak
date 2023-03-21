//import section
import express from "express";
import { createRequire } from "module";

//require section
const require = createRequire(import.meta.url);
const logger = require("./utils/logger.cjs");

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
