import logger from "./utils/logger.js";
import { existsSync, writeFileSync } from "fs";

if (existsSync("./.env")) {
    logger.info('Loaded ".env" file :)');
} else {
    logger.fatal('File ".env" not found. Create and configure it!');
    logger.info("For variable names you may check ./src/database/config.js");
    process.exit(0);
}

if (
    !process.env.DB_HOST ||
    !process.env.DB_PORT ||
    !process.env.DB_NAME ||
    !process.env.DB_USER ||
    !process.env.DB_PASS
) {
    logger.fatal('Variables at ".env" not configured!');
    process.exit(0);
}

if (existsSync("./database.json")) {
    logger.info('Loaded "database.json" file');
} else {
    const migrateConfig = JSON.stringify({
        dev: {
            driver: "pg",
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
            schema: "public",
        },
    });
    logger.info('File "database.json" not found. I generated it for you! :D');
    writeFileSync("./database.json", migrateConfig, "utf8", (err) => {
        if (err) throw err;
    });
    logger.info(`If that's your first run of server, you may need to generate`);
    logger.info(`tables for database. Type in your console "./migrate.bat up"`);
    process.exit(0);
}
