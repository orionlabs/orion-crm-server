const Pool = require('pg').Pool

const pool = new Pool({
    // connectionString: `postgres://neworioncrm_user:kAraeqt8CXHp6IrEFiFpcFYWOOVWAWt9@dpg-ck59g0mg2bec73fhpt7g-a.oregon-postgres.render.com/neworioncrm `
    user: 'orionlabs',
    host: 'dpg-cletctd3qkas73b0c1v0-a.oregon-postgres.render.com',
    database: 'oriondcrmdb',
    password: 'bnfxq8IyaUjwG0pSn6id0oXB5T9LYHtT',
    port: 5432,
    ssl: true
})

module.exports = pool