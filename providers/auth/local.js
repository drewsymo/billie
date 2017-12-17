const { Strategy, ExtractJwt } = require('passport-local')
const passport = require('passport')
const { config } = require('../../helpers')

const opts = {
    usernameField: 'email',
    passwordField: 'password',
    session: false
}

module.exports = (app) => {
    passport.use(new Strategy(opts, function(username, password, callback) {
        // Find the user.
        // Verify the password.
        return callback(null, {
            id: 'XXX-111',
            name: 'Drew',
            email: 'drew@gmail.com'
        })
    }))
}
