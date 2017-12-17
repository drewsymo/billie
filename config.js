/**
 * Configuration.
 *
 * @type {Object}
 */
module.exports = {
    server: {
        port: process.env.SERVER_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET
    }
}
