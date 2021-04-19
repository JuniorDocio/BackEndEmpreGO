const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_DIALECT, DB_HOST, DB_PORT } = require('./constants');

module.exports = {
    dialect: DB_DIALECT,
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    define: {
        timestamps: false,
    },
}