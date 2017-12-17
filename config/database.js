const fs = require('fs');
require('dotenv').config()

const config = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql'
}

const test = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'database_test',
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql'
}

module.exports = {
    development: config,
    test: test,
    production: config
}
