import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.USER_PASSWORD_DB,
    port: process.env.PORT_DB,
    database: process.env.NAME_DB
});
