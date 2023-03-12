// Подключаем базу данных.

import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    user: 'habrpguser',
    password: 'pgpwd4habr',
    host:"localhost",
    port: - "5432:5432",
    database: "kino"
});

export default pool;