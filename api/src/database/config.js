import pkg from "pg";

const { Pool } = pkg;

// TODO: import from .env file

const pool = new Pool({
    connectionString: "postgres://postgres:admin@localhost:5432/yakprak",
});

export default pool;
