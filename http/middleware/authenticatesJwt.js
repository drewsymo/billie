const passport = require('passport')

/**
 * Authenticates JWT middleware.
 *
 * @type {[type]}
 */
module.exports = passport.authenticate('jwt', { session: false })
