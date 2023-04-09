import pool from "../../database/config.js";

const table = "users";

const user = {
    getAll: async () => {
        return new Promise((resolve, reject) => {
            const query = {
                text: `SELECT * FROM ${table};`,
            };
            pool.query(query, (error, results) => {
                if (error) reject(error);
                resolve(results?.rows);
            });
        });
    },

    getById: async (data) => {
        return new Promise((resolve, reject) => {
            const query = {
                text: `SELECT * FROM ${table} WHERE id = $1;`,
                values: [data.id],
            };
            pool.query(query, (error, results) => {
                if (error) reject(error);
                resolve(results?.rows);
            });
        });
    },

    create: async (data) => {
        return new Promise((resolve, reject) => {
            const query = {
                text: `INSERT INTO ${table} (email, hashed_password) VALUES($1, $2) RETURNING id;`,
                values: [data.email, data.hashed_password],
            };
            pool.query(query, (error, results) => {
                if (error) reject(error);
                resolve(results?.rows[0]);
            });
        });
    },

    update: async (data) => {
        return new Promise((resolve, reject) => {
            const query = {
                text: `UPDATE ${table} SET name = $1, updated_at = $2 WHERE id = $3;`,
                values: [data.name, data.updated_at, data.id],
            };
            pool.query(query, (error, results) => {
                if (error) reject(error);
                resolve(results);
            });
        });
    },
};

export default user;
