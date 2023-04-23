import { Sequelize } from "sequelize";

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        logging: false,
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
            acquire: 60000,
        },
    }
);

export default db;
