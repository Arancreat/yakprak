import pino from "pino";

const logger = pino({
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

export default logger;
