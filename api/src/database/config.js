import { Pool } from "pg";

// TODO: import from .env file

const pool = new Pool({
    connectionString: "postgres://postgres:admin@localhost:5432/yakprak",
});

export default pool;
