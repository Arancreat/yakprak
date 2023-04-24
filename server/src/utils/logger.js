import pino from "pino";
import chalk from "chalk";

export const logger = pino({
    transport: {
        targets: [
            {
                target: "pino-pretty",
                options: {
                    translateTime: "SYS:HH:MM:ss dd-mm-yyyy",
                    ignore: "pid,hostname",
                },
            },
            {
                target: "pino-pretty",
                options: {
                    translateTime: "SYS:HH:MM:ss dd-mm-yyyy",
                    ignore: "pid,hostname",
                    colorize: false,
                    destination: "./log.txt",
                },
            },
        ],
    },
});

export const loggerMiddleware = (req, res, next) => {
    logger.info(
        `${chalk.red(req.method)} "${req.originalUrl}" from remote address: "${
            req.ip
        }"`
    );
    next();
};

export default logger;
