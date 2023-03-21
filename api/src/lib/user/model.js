import pool from "../../database/config.js";

const table = "users";

const User = {
    getAll: async () => {
        return new Promise((resolve, reject) => {
            const query = {
                text: `SELECT * FROM ${table};`,
            };
            pool.query(query, (error, results) => {
                if (error) reject(error);
                resolve(results.rows);
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
                resolve(results.rows);
            });
        });
    },

    create: async (data) => {
        return new Promise((resolve, reject) => {
            const query = {
                text: `INSERT INTO ${table} (name, email, password) VALUES($1, $2, $3);`,
                values: [data.name, data.email, data.password],
            };
            pool.query(query, (error, results) => {
                if (error) reject(error);
                resolve(results);
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

// class User {
//     constructor() {
//         this.table = "users";
//     }

//     async getAll() {
//         return new Promise((resolve, reject) => {
//             const query = {
//                 text: `SELECT * FROM ${this.table};`
//             };
//             pool.query(query, (error, results) => {
//                 if (error) reject(error);
//                 resolve(results);
//             });
//         });
//     }

//     async getById(data) {
//         return new Promise((resolve, reject) => {
//             const query = {
//                 text: `SELECT * FROM ${this.table} WHERE id = $1;`,
//                 values: [data.id],
//             };
//             pool.query(query, (error, results) => {
//                 if (error) reject(error);
//                 resolve(results);
//             });
//         });
//     }

//     async create(data) {
//         return new Promise((resolve, reject) => {
//             const query = {
//                 text: `INSERT INTO ${this.table} (name, email, password) VALUES($1, $2, $3);`,
//                 values: [data.name, data.email, data.password],
//             };
//             pool.query(query, (error, results) => {
//                 if (error) reject(error);
//                 resolve(results);
//             });
//         });
//     }

//     async update(data) {
//         return new Promise((resolve, reject) => {
//             const query = {
//                 text: `UPDATE ${this.table} SET name = $1, updated_at = $2 WHERE id = $3;`,
//                 values: [data.name, data.updated_at, data.id],
//             };
//             pool.query(query, (error, results) => {
//                 if (error) reject(error);
//                 resolve(results);
//             });
//         });
//     }
// }

export default User;
