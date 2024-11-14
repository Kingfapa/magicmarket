import 'server-only';

import postgres from "postgres";

const sql = postgres({
    host: '192.168.1.11',
    port: 5432,
    database: 'magicmarket',
    username: 'postgres',
    password: 'example'
})

export { sql }