//bring in pool from pg
const pg = require( 'pg' );
const Pool = pg.Pool;

//use pool to target db and table
const config = {
    database: 'react_gallery',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000 
};

//instance
const pool = new Pool(config);

//exports
module.exports = pool;