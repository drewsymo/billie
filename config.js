/**
 * Configuration.
 *
 * @type {Object}
 */
module.exports = {
    /**
     * Server settings.
     * @type {Object}
     */
    server: {
        port: process.env.PORT || 3000
    },
    
    /**
     * JWT settings.
     * @type {Object}
     */
    jwt: {
        secret: process.env.JWT_SECRET || 'secret'
    }
}
