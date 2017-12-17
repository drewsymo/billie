const passport = require('passport')

/**
 * Authenticates local middleware.
 *
 * @type {[type]}
 */
module.exports = passport.authenticate('local', { session: false })
